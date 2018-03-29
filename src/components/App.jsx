import React from 'react';
import List from '../containers/List';

const App = () => (
  <div>
    <h1>
      React/Redux proof-of-concept app that utilizes Web Workers
      to take the load off UI thread to manage part of the state.
    </h1>
    <h3>About the author</h3>
    <p>
      My name is Adrian Nowicki. You can contact me through 
      {' '}<a href="https://www.linkedin.com/in/adriannowicki/">LinkedIn</a> 
      {' '}and <a href="https://twitter.com/MeNowicki">Twitter</a>. 
      Some of my work is published on 
      {' '}<a href="https://github.com/ardi-n">Github</a>.
    </p>
    <p>
      By the way, I'm the founder of 
      {' '}<a href="https://www.livewallpaper.io">Livewallpaper.io</a>,
      a place for awesome Android phone wallpapers. If you wonder how to turn
      a gif or an mp4 into a live wallpaper, 
      {' '}you can find the answer <a href="https://www.livewallpaper.io/how-it-works">here</a>.
    </p>
    <List />
  </div>
);

export default App;