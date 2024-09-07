import React from "react";
import SpNav from "./support_navbar";
import Menu from "./support_menu";
export default function Term() {
  return (
    <div className="flex flex-col">
      <SpNav title={"Điều khoản và dịch vụ"} />
      <Menu />
      <div></div>
    </div>
  );
}
