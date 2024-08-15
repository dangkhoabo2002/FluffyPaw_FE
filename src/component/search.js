import { useState } from "react";
import React from "react";
import { AutoComplete, notification } from "antd";

export default function Search() {
  const [inputValue, setInputValue] = useState("");

  const options = [
    {
      value: "Burns Bay Road",
    },
    {
      value: "Downing Street",
    },
    {
      value: "Wall Street",
    },
  ];
  const [api, contextHolder] = notification.useNotification();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (
        inputValue === "" ||
        inputValue === undefined ||
        inputValue === null
      ) {
        api.warning({
          message: `Thanh tìm kiếm không được để trống! `,
          duration: 1,
          placement: "bottomLeft",
        });
      } else console.log(inputValue);
    }
  };

  const handleChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      {contextHolder}
      <AutoComplete
        style={{
          width: 300,
        }}
        value={inputValue}
        onChange={handleChange}
        options={options}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        placeholder="Tìm kiếm"
        onKeyDown={handleKeyDown}
      ></AutoComplete>
    </>
  );
}
