const reducers = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_STOCK':
      return action.payload;
    default:
      return state;
  }
};

export { reducers };
