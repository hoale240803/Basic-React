import React from "react";

function Child(props) {
  const spreadObject = {
    id: "01",
    name: "hoa",
    date: "12/12/2020",
    address: {
      city: "da nang",
      district: "ngu hanh son",
      street: "191 nguyen duy trinh",
    },
    education: {
      frontEnd: {
        react: {
          basic: {
            es6: {
              defaultParameters: "khong truyen doi so van chay",
              spreadSyntax: "viet ... cho no gon",
            },
          },
        },
      },
    },
  };
  const sendData = () => {
    props.handleFromParent(spreadObject);
  };
  return (
    <div>
      <button onClick={sendData}>Click me!</button>
    </div>
  );
}

export default Child;
