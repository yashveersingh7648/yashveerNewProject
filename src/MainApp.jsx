import React, { useState, useCallback } from "react";

import ExpensiveComponent from "./Components/ExpensiveComponent";
import ChildComponent from "./Components/Navbar/ChildComponent";

function MainApp() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(2);

  const handleClick = useCallback(() => {
    console.log("✅ Button Clicked!");
    
  }, []);

  return (
    <div className="App">
      <h1>React.memo, useMemo & useCallback Example</h1>
      
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <button onClick={() => setNumber(number + 1)}>Change Number: {number}</button>
      
      <ExpensiveComponent number={number} />
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default MainApp;
