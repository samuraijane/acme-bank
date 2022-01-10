import { DO_BILL_PAY } from "../actionTypes";

const initialState = {
  transactions: []
};

function billPayReducer(state = initialState, action) {
  switch (action.type) {
    case DO_BILL_PAY: {
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            ...action.payload
          }
        ]
      }
    }
    default:
      return state;
  }
}

export default billPayReducer;
