import React from "react";
import { Divider } from "antd";
import Logo from "./petowner/logo.png";
export default function Footer() {
  return (
    <div className="flex flex-col py-10 bg-[#F3D0D7] ">
      <div className="flex flex-row px-40 justify-between w-full">
        <img alt="Logo" src={Logo} style={{ width: "400px" }} />
        <div className="flex flex-col">Contact</div>
        <div className="flex flex-col">Contact</div>
        <div className="flex flex-col">Contact</div>
      </div>
      <Divider />
      <div className="inline-flex justify-center items-center">
        © 2021 Copyright:
        <h1 style={{ fontSize: "18px", paddingLeft: "6px" }}>Fluffy Paw</h1>
      </div>
    </div>
  );
}
