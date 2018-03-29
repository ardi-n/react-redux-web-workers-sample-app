import { createStore } from 'redux';
import { NB_ITEMS, BOOK_GENRES, AUTHOR_GENDERS } from './constants';
import * as actions from './actions';
import rootReducer from './reducers';
import { 
  getChunksOfList, 
  getVisibleChunkIndex,
  getListSorting,
  getListFiltering,
  getListItemsCount
} from './selectors';

const getRandomArrayItem = array => 
  array[Math.floor(Math.random() * 100) % array.length];

const getRandomDate = (from, to) => 
  new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));

const state = {
  entities: {
    books: {
      allIds: new Array(NB_ITEMS),
      byId: {}
    }
  },
  ui: {
    list: {
      itemsPerChunk: 50,
      visibleChunkIndex: 0,
      orderedIds: new Array(NB_ITEMS)
    }
  }
};

const fromDate = new Date(2017, 0, 1);
const toDate = new Date();

for (let i = 0; i < NB_ITEMS; i++) {
  let id = i;
  let randomInt
  state.entities.books.allIds[i] = id;
  state.ui.list.orderedIds[i] = id;
  let entity = {
    id,
    name: `${i} Title`,
    book_genre: getRandomArrayItem(BOOK_GENRES)[0],
    author_name: `Author Name ${NB_ITEMS - i}`,
    author_gender: getRandomArrayItem(AUTHOR_GENDERS)[0],
    publish_date: getRandomDate(fromDate, toDate)
  };
  state.entities.books.byId[id] = entity;
}

const store = createStore(rootReducer, state);

store.subscribe(() => {
  const newState = store.getState();
  postMessage({
    action: actions.updateListSuccess(
      getChunksOfList(newState),
      getVisibleChunkIndex(newState),
      getListSorting(newState),
      getListFiltering(newState),
      getListItemsCount(newState)
    )
  });
});

self.onmessage = e => {
  if (e.data.action) {
    store.dispatch(e.data.action);
  }
};