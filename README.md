# React/Redux proof-of-concept app that utilizes Web Workers to take the load off UI thread to manage part of the state.

## [Live Example](https://ardi-n.github.io/react-redux-web-workers-sample-app/dist/index2.html)

## The Problem

I wanted to tackle a specific problem: is it possible to 
handle a list of one million items in browser and manage 
its state in browser memory without contacting server for
chunks of data? 

The answer is **yes**, but with a few caveats.
The most important issue I came across was that as of this writing
(March, 2018) Firefox can't handle html elements with 
`height` greater than about `17900000px` properly.
It instead zeroes such height.

Interestingly, Chrome and Safari don't have such a low limit.
Chrome has different kind of problem - somehow a list that 
is higher than about 16776000px has all items that lie 
below that point hidden. DOM inspector displays them properly though.
Also scrolling behavior below that point breaks.

That's why I decreased row height to 16px which makes
list's total height 16 * 1000000. The result is lower than that Firefox's and Chrome's limits. 

Safari doesn't suffer from such conditions.

The app has been tested to work in Firefox, Chrome and Safari under MacOS.

App's assets are bundled using [ParcelJS](https://parceljs.org). The tool
also allows for seamless integration between React and [CSS Modules](https://github.com/css-modules/css-modules).

ParcelJS supports Web Worker script's dependency resolution and bundling out of the box. But still, when a JS module run in main thread imports something and a Worker script imports the same dependency it is bundled once for the main thread.
The problem is tracked [here](https://github.com/parcel-bundler/parcel/issues/758).

To be able to run `parcel index.html` in development and have bundled files updated properly a workaround is used. Worker initiation code is wrapped in
a Function constructor call (see `src/worker.js`). This way ParcelJS doesn't
traverse Worker's dependencies. Bundled worker file has to be recreated manually
by running `parcel build src/worker.src.js`.

## Project Architecture

The project doesn't contain many components nor handle many interactions so its directory structure is flat. There are `actions`, `components` for visual aspect, `containers` that connect them with global state and inject action creators, `reducers` that update the state and `selectors` that are used to access specific parts of the state. 

Data used in this demonstration is generated randomly in Web Worker. Each item
is a fictional book with a name, book genre, author name, author gender and publish date. List items can be sorted by name or author name and filtered by book genre or author gender. 

Additionally books are marked in the UI if either they are horror books published on Halloween or finance books published on any last Friday.

### UI Considerations

No browser could handle a list with one million rows. Each row is built out of a few elements which would lead to a few million DOM elements in memory. Gross.

Several techniques has been employed to build this app:

* First, list is scrollable. This means a wrapper element with a fixed height 
allows to see only a fragment of the whole list. This results in displaying only a chunk of dataset.
* Chunks are small subsets of dataset. While scrolling a list, an index of a chunk that should be displayed is calculated from list's scroll position. This leads to requesting three chunks: one that is visible and two that are siblings to it. This ensures that window is filled with rows.
* The actual scroll event listener is debounced - it's called when scrolling has stopped for a few dozens of milliseconds. This improves performance and unnecessary calls to get dataset chunks are avoided.
* When scroll event listener is called, an action is issued only if just calculated index of chunk is different from current index.
* UI elements that correspond to chunks have keys which helps React to decide if they shouls stay or be removed.

These are other, non-performance related UI things:

* CSS Modules are used to nicely separate component's styles from global context.
* No UI framework is used. Layout is simply built using flexible containers. List is `position: relative` which allows to `position: absolute` rendered list chunks.

### State Implementation

State's shape follows good practices and is split between `entities` and `ui`.
Entities contain normalized domain objects and ui has necessary data persisted for re-use by Redux-powered containers.

Redux state exists in two parts. One store that contains lightweight
data necessary for UI components lives in main context. The other that deals with big data lives in worker context. 

Messages posted to Worker are typical Redux actions. Worker's store handles them
by running the same reducers used for main store but aware of context. In result Worker posts back a message with action for the main context that contains necessary chunks of data to update the list.

If some data is duplicated between stores, selectors act the same. In specific circumstances like for `getListItemsCount` the selector checks if it's called in Worker context. If so, it counts items stored physically there. Otherwise, it uses a cached value stored in main context.

#### Reselect

Initially there was a plan to use [Reselect](https://github.com/reactjs/reselect). But as it turned out its caching mechanism led to quickly growing memory consumption when selecting specific chunks of whole dataset. So a dumb version of `createSelector` was provided that can just compose other selectors. This way selecting chunks of data is performed every time in Worker in non-blocking fashion.

## Running Locally

After cloning the repository please run `npm install` and then `npm run start-dev`.

## About the author

My name is Adrian Nowicki. You can contact me through 
[LinkedIn](https://www.linkedin.com/in/adriannowicki/)
and [Twitter](https://twitter.com/MeNowicki). 
Some of my work is published on [Github](https://github.com/ardi-n).

By the way, I'm the founder of 
[Livewallpaper.io](https://www.livewallpaper.io),
a place for awesome Android phone wallpapers. If you wonder how to turn
a gif or an mp4 into a live wallpaper, 
you can find the answer [here](https://www.livewallpaper.io/how-it-works).
