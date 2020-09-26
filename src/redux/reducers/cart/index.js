import produce from 'immer';

const reducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.payload.id);

        productIndex >= 0
          ? (draft[productIndex].amount += 1)
          : draft.push({
              ...action.payload,
              amount: 1,
            });
      });

    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.payload);

        if (productIndex >= 0) draft.splice(productIndex, 1);
      });

    case 'CART_UPDATE_AMOUNT': {
      if (action.payload.amount <= 0) {
        return state;
      }

      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.payload.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.payload.amount);
        }
      });
    }

    default:
      return state;
  }
};

export { reducers };
