import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const incementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const incrementBy = () => {
    dispatch({ type: "incrementBy" });
  };
  const decrementBy = () => {
    dispatch({ type: "decrementBy" });
  };

  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {
    console.log(counter);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementBy}>incremenntBy5</button>
        <button onClick={decrementBy}>decrementBy5</button>
        <button onClick={incementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
