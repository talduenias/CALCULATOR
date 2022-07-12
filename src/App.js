import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setCalc("");
  }, []);

  const ops = ["/", "+", "-", "*", "."];

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  // const onOff = (event) => {
  //   if (calc !== "") {
  //     setCalc("");
  //     console.log("off");
  //   } else {
  //     setCalc("0");
  //     console.log("on");
  //   }
  //   return;
  // };
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "" && result === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    } else if (value === "=") {
      setResult(eval(calc));
      console.log(result);
      setCalc("");
      return result;
    }
    setCalc(calc + value);

    if (value === "DEL") {
      setCalc(calc.slice(0, -1));
      return;
    }
  };

  const clearButton = (value) => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span className="active">{result}</span> : ""}

          {calc || ""}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>X</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={() => updateCalc("DEL")}>DEL</button>
          <button onClick={() => clearButton("AC")}>AC</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={() => updateCalc("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
