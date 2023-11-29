import { createStore } from "redux";

const counterReudcer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "incrementBy") {
    return {
      counter: state.counter + 5,
    };
  }
  if (action.type === "decrementBy") {
    return {
      counter: state.counter - 5,
    };
  }
  return state;
};

const store = createStore(counterReudcer);

export default store;
