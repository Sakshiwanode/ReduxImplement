// src/redux/reducers/CounterReducer.tsx
const initialState = 0;

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
