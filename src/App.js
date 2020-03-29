import React, { useState } from "react";
import Vue from "vue";
// import Antd from "ant-design-vue";
import { Input, List } from "ant-design-vue";
import { Input as AntdInput, ConfigProvider } from "antd";
import MyVueComponent from "./MyVueComponent.vue";
// import "ant-design-vue/dist/antd.css";
// import "antd/dist/antd.css";
Vue.component(Input.name, Input);
Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);
Vue.config.productionTip = false;
// Vue.use(Antd);

export default () => {
  const [value, setValue] = useState();
  const [message, setMessage] = useState("Hello from Vue!!");
  return (
    <ConfigProvider>
      <div>
        <AntdInput
          value={message}
          onChange={e => {
            setMessage(e.target.value);
          }}
        />
        <MyVueComponent message={message} onSubmit={setValue} />
        <p>{value}</p>
      </div>
    </ConfigProvider>
  );
};
