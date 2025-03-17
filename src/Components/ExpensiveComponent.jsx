import React, { memo, useMemo } from "react";

const ExpensiveComponent = ({ number }) => {
  const squaredValue = useMemo(() => {
    console.log("🔥 Expensive Computation...");
    return number * number;
  }, [number]);

  return <div>Square: {squaredValue}</div>;
};

export default memo(ExpensiveComponent);
