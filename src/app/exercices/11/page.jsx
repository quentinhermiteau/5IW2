"use client";

import { useReducer } from "react";
import Slider from "./Slider";

const reducer = (state, { type, stepValue }) => {
  switch (type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return { count: 0, step: 1 };
    case "updateStep":
      return { ...state, step: stepValue };
  }
};

export default function Counter() {
  const [countStep, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleReset = () => dispatch({ type: "reset" });
  const handleUpdateStep = (step) =>
    dispatch({ type: "updateStep", stepValue: step });

  return (
    <main>
      <div id="notice">
        À l'aide de useEffect et setInterval, faire en sorte que le compteur
        s'incrémente automatiquement toutes les secondes.
      </div>
      <h1>{countStep.count}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
      </div>
      <Slider
        min={1}
        max={10}
        onChange={handleUpdateStep}
        value={countStep.step}
      />
    </main>
  );
}
