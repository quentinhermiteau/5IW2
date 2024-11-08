"use client";

import { useReducer } from "react";

const initialState = {
  past: [],
  count: 0,
  future: [],
};

function reducer(state, action) {
  const { past, count, future } = state;

  switch (action) {
    case "increment":
      return {
        past: [...past, count],
        count: count + 1,
        future,
      };
    case "decrement":
      return {
        past: [...past, count],
        count: count - 1,
        future,
      };
    case "undo":
      return {
        past: past.slice(0, -1),
        count: past[past.length - 1],
        future: [...future, count],
      };
    case "redo":
      return {
        past: [...past, count],
        count: future[future.length - 1],
        future: future.slice(0, -1),
      };
  }
}

export default function CounterWithUndoRedo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch("increment");
  const handleDecrement = () => dispatch("decrement");
  const handleUndo = () => dispatch("undo");
  const handleRedo = () => dispatch("redo");

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button className="link" onClick={handleIncrement}>
        Increment
      </button>
      <button className="link" onClick={handleDecrement}>
        Decrement
      </button>
      <button
        className="link"
        onClick={handleUndo}
        disabled={!state.past.length}
      >
        Undo
      </button>
      <button
        className="link"
        onClick={handleRedo}
        disabled={!state.future.length}
      >
        Redo
      </button>
    </div>
  );
}
