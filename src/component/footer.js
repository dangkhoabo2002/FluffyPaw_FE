import React from "react";
import { Divider } from "antd";
import Logo from "./petowner/logo.png";
export default function Footer() {
  return (
    <div className="flex flex-col py-10 bg-[#F3D0D7] ">
      <div className="flex flex-row px-40 justify-between w-full">
        <img
          alt="Logo"
          src={Logo}
          style={{ width: "440px", height: "160px" }}
        />
        <div className="flex flex-col">
          <h1 className="text-3xl pb-4">Chăm sóc khách hàng</h1>
          <div className="flex flex-col gap-2">
            <p>Trung tâm trợ giúp</p>
            <p>Hướng dẫn đặt dịch vụ</p>
            <p>Thanh toán</p>
            <p>Báo cáo & Hoàn tiền</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl pb-4">Đối với Fluffy Paw</h1>
          <div className="flex flex-col gap-2">
            <a href="https://shopee.vn/">Điều khoản & Dịch vụ</a>
            <p>Phiên bản trên điện thoại</p>
            <p>Bảo mật thông tin</p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-center">
        <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đăng Khoa</p>
        <div className="inline-flex justify-center items-center">
          © 2024 Copyright:
          <h1 style={{ fontSize: "18px", paddingLeft: "6px" }}>Fluffy Paw</h1>
        </div>
      </div>
    </div>
  );
}
