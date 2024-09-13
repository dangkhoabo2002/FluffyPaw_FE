import React from "react";
import { Rate } from "antd";

export default function staff_profile() {
  return (
    <div className="ml-[300px] mr-12 mt-6 px-6 py-6 flex flex-col shadow-md bg-white rounded-md">
      <h1 className="pl-[30px]">Thông tin nhân viên</h1>

      <div className="flex flex-row px-11 justify-start items-center">
        <div className="flex flex-row justify-start items-start gap-28">
          <div className="flex flex-col gap-7">
            <h1 className="text-[20px] pt-[20px]">Họ và tên</h1>
            <h1 className="text-[20px]">Số điện thoại</h1>
            <h1 className="text-[20px]">Email cá nhân</h1>
            <h1 className="text-[20px]">Mức độ tin cậy</h1>
            <h1 className="text-[20px]">Điểm chuyên cần</h1>
          </div>
          <div className="flex flex-col gap-6 w-[500px] items-left pt-[20px]">
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px] "> Wanpy</h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]"> 0929281723781</h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]">fluffypaw@gmail.com</h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]">
                123 Phan xích long, bình thạnh, tp hcmáda asdas sad sdasdasd
              </h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]">
                123 Phan xích long, bình thạnh, tp hcmáda asdas sad sdasdasd
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
