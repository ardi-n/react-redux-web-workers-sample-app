import ui from './ui';

export default function rootReducer(state, action) {
  return {
    ...state,
    ui: ui(state.ui, action, state.entities.books)
  };
};