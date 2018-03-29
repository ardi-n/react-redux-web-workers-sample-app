import { BOOK_GENRE_HORROR, BOOK_GENRE_FINANCE } from '../constants';

export const getVisibleChunkIndex = state => state.ui.list.visibleChunkIndex;
export const getItemsPerChunk = state => state.ui.list.itemsPerChunk;
const getOrderedIds = state => state.ui.list.orderedIds;
const getBooks = state => state.entities.books.byId;

const isHorrorBookPublishedOnHalloween = book => 
  book.book_genre == BOOK_GENRE_HORROR && 
  book.publish_date.getMonth() == 10 &&
  book.publish_date.getDate() == 1;

const getMonthLastFriday = date => {
  let lastFriday;
  for (let day = 1; day <= 31; day++) {
    const testDate = new Date(date.getFullYear(), date.getMonth(), day);
    if (testDate.getMonth() > date.getMonth()) {
      return lastFriday;
    }
    if (testDate.getDay() == 5) {
      lastFriday = testDate.getDate();
    }
  }
  return lastFriday;
};

const isFinanceBookPublishedOnEveryLastFriday = book =>
  book.book_genre == BOOK_GENRE_FINANCE &&
  book.publish_date.getDay() == 5 &&
  book.publish_date.getDate() == getMonthLastFriday(book.publish_date);

/**
 * A simple creator that resembles reselect's createSelector 
 * but do not cache results. That would eat memory fast and freeze the browser.
 * @param {*} inputSelectors 
 * @param {*} composingSelector 
 */
const createSelector = (inputSelectors, composingSelector) => state => {
  return composingSelector(...inputSelectors.map(inputSelector => inputSelector(state)));
};

export const getChunksOfList = createSelector(
  [getVisibleChunkIndex, getItemsPerChunk, getOrderedIds, getBooks],
  (visibleChunkIndex, perChunk, orderedIds, books) => {
    const firstIndex = (visibleChunkIndex - (visibleChunkIndex > 0 ? 1 : 0)) * perChunk;
    const lastIndex = (visibleChunkIndex + 2) * perChunk;
    return orderedIds.filter(
        (id, index) => index >= firstIndex && index < lastIndex
      )
      .map(id => ({
        ...books[id]
      }))
      .reduce((accu, book, index) => {
        if (isHorrorBookPublishedOnHalloween(book)) {
          book.horror_halloween = true;
        }
        if (isFinanceBookPublishedOnEveryLastFriday(book)) {
          book.finance_last_friday = true;
        }
        if (index < perChunk) {
          if (!accu[0]) accu[0] = [];
          accu[0].push(book);
        } else if (index < 2 * perChunk) {
          if (!accu[1]) accu[1] = [];
          accu[1].push(book);
        } else if (index < 3 * perChunk) {
          if (!accu[2]) accu[2] = [];
          accu[2].push(book);
        }
        return accu;
      }, []);
  }
);

export const getVisibleChunksOfList = state => state.ui.list.visibleChunks;
export const getListSorting = state => state.ui.list.sorting;
export const getListFiltering = state => state.ui.list.filtering;
// distinguish between Worker env and Main env
export const getListItemsCount = 
  state => self.document ? state.ui.list.itemsCount : state.ui.list.orderedIds.length;