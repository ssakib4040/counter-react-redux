import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [byNumber, setByNumber] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        <input
          type="number"
          value={byNumber}
          onChange={(e) => setByNumber(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(Number(byNumber)))}>
          Add
        </button>
        <button onClick={() => dispatch(decrementByAmount(Number(byNumber)))}>
          Substract
        </button>
      </div>
    </div>
  );
}

export default App;
