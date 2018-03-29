import * as actions from '../../actions';
import { SORTING_ASC } from '../../constants';

const reduceListUpdateRequest = (state, action, booksState) => {
  const { isMajorChange, visibleChunkIndex } = action;
  let { sorting, filtering } = action;
  let orderedIds;
  if (booksState) {
    // we're in a WebWorker
    filtering = filtering || state.filtering;
    sorting = sorting || state.sorting;
    const appliedFilters = Object.keys(filtering || {});

    if (isMajorChange) {
      orderedIds = booksState.allIds.filter(id => {
        const book = booksState.byId[id];
        return appliedFilters.reduce(
          (stays, appliedFilter) => 
            stays && book[appliedFilter] == filtering[appliedFilter],
          true
        );
      });
      if (sorting) {
        orderedIds.sort((id1, id2) => {
          const book1 = booksState.byId[id1];
          const book2 = booksState.byId[id2];
          if (book1[sorting.prop] < book2[sorting.prop]) {
            return sorting.dir == SORTING_ASC ? -1 : 1;
          } else if (book1[sorting.prop] > book2[sorting.prop]) {
            return sorting.dir == SORTING_ASC ? 1 : -1;
          } else {
            return 0;
          }
        });
      }
    } else {
      orderedIds = state.orderedIds;
    }
  }
  return {
    ...state,
    visibleChunkIndex,
    sorting,
    filtering,
    orderedIds
  };
};

const reduceListUpdateSuccess = (state, action, booksState) => {
  const { chunks, visibleChunkIndex, sorting, filtering, itemsCount } = action;
  return {
    ...state,
    visibleChunkIndex,
    visibleChunks: chunks,
    sorting,
    filtering,
    itemsCount
  };
};

export default function reducer(state, action, booksState) {
  switch (action.type) {
    case actions.LIST_UPDATE_REQUEST:
      return reduceListUpdateRequest(state, action, booksState);
    case actions.LIST_UPDATE_SUCCESS:
      return reduceListUpdateSuccess(state, action, booksState);
    default:
      return state;
  }
}