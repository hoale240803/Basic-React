import React, { useState } from "react";
import Child from "./Child.component";

let param = 0;

function Parent() {
  const [addResult, setAddResult] = useState(0);

  function handleClick(data) {
    console.log(data);
    param += 1;
    setAddResult(param);
  }

  return (
    <div>
      <h1> xử lý click</h1>
      <Child handleFromParent={handleClick} />
      <h3> {addResult}</h3>
    </div>
  );
}

export default Parent;
