import React from "react";
import { AutoComplete, Input } from "antd";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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
const Search = () => (
  <AutoComplete
    style={{
      width: 300,
    }}
    options={options}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  >
    <Input.Search size="large" placeholder="input here" enterButton />
  </AutoComplete>
);
export default Search;
