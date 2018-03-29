import worker from '../worker';

export const LIST_UPDATE_REQUEST = 'LIST_UPDATE_REQUEST';
export const LIST_UPDATE_PENDING = 'LIST_UPDATE_PENDING';
export const LIST_UPDATE_SUCCESS = 'LIST_UPDATE_SUCCESS';

export const updateListRequest = 
  (visibleChunkIndex, sorting, filtering, isMajorChange = false) => {
    const action = {
      type: LIST_UPDATE_REQUEST,
      visibleChunkIndex,
      sorting,
      filtering,
      isMajorChange
    };
    worker.postMessage({ action });
    return {
      type: LIST_UPDATE_PENDING
    };
  };

export const updateListSuccess = 
  (chunks, visibleChunkIndex, sorting, filtering, itemsCount) => ({
    type: LIST_UPDATE_SUCCESS,
    chunks,
    visibleChunkIndex,
    sorting,
    filtering,
    itemsCount
  });