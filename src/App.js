import { useState } from "react";
const App = () => {
  const [calc, setCalc] = useState("");
  const [res, setRes] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = value => {
    setCalc(calc + value);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button onClick={() =>updateCalc(i.toString())} key={i}>{i}</button>);
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {res ? <span>(0)</span> : ""}
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() =>updateCalc('/')}>/</button>
          <button onClick={() =>updateCalc('*')}>*</button>
          <button onClick={() =>updateCalc('+')}>+</button>
          <button onClick={() =>updateCalc('-')}>-</button>

          <button>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() =>updateCalc('0')}>0</button>
          <button onClick={() =>updateCalc('.')}>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
