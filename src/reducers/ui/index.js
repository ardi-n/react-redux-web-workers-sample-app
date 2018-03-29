import list from './list';

export default function rootReducer(state, action, booksState) {
  return {
    list: list(state.list, action, booksState)
  };
}