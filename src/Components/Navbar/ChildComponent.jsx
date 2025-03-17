import React, { memo } from "react";

const ChildComponent = ({ onClick }) => {
  console.log("✅ ChildComponent Render हुआ!");
  return <button onClick={onClick}>Click Me</button>;
};

export default memo(ChildComponent);
