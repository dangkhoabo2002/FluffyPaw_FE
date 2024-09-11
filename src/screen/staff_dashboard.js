import React from "react";
import { Divider } from "antd";

export default function staff_dashboard() {
  return (
    <div className="ml-[300px] mr-12 mt-6 px-6 py-6 flex flex-col shadow-md bg-white rounded-md">
      <div className="flex flex-col">
        <h1 className="text-3xl pb-6">Tổng quát</h1>
        <div className="flex flex-row justify-between items-center ">
          <div className="text-center w-[200px]">
            <p className="font-sans">0</p>
            <p>Đơn chờ duyệt</p>
          </div>
          <div className="h-[60px] w-[2px] bg-slate-300"></div>
          <div className="text-center w-[200px]">
            <p className="font-sans">0</p>
            <p>Đơn đang xử lý</p>
          </div>
          <div className="h-[60px] w-[2px] bg-slate-300"></div>
          <div className="text-center w-[200px]">
            <p className="font-sans">0</p>
            <p>Đơn hủy</p>
          </div>
          <div className="h-[60px] w-[2px] bg-slate-300"></div>
          <div className="text-center w-[200px]">
            <p className="font-sans">0</p>
            <p>Dịch vụ tạm khóa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
