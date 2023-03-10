const defaultState = {
  page: 'friends',
  filter: 'online'
};

export const friendsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
