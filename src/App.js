import React, { useState } from "react";
import MyVueComponent from "./MyVueComponent.vue";

export default () => {
  const [value, setValue] = useState();
  const [message, setMessage] = useState("Hello from Vue!!");
  return (
    <div>
      <input
        value={message}
        onChange={e => {
          setMessage(e.target.value);
        }}
      ></input>
      <MyVueComponent message={message} onSubmit={setValue} />
      <p>{value}</p>
    </div>
  );
};
