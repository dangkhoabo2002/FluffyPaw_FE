import React from "react";
import { Image } from "antd";
import { hover } from "@testing-library/user-event/dist/hover";
import { backdropClasses } from "@mui/material";

export default function Sm_wallet() {
  return (
    <div className="ml-[300px] mr-12 mt-6 px-6 py-6 flex flex-col shadow-md bg-white rounded-md">
      <div className="flex flex-row justify-between px-[40px]">
        <h1 className="pb-10">Ví tiền</h1>
        <h1 className="text-[20px] pt-[20px]">Số dư: 200.000 VNĐ</h1>
      </div>

      <div className="flex flex-row px-11 justify-start items-center">
        <div className="flex flex-row justify-start items-start gap-28">
          <div className="flex flex-col gap-7">
            <h1 className="text-[20px] pt-[20px]">Họ và tên</h1>

            <h1 className="text-[20px]">Số tài khoản</h1>
            <h1 className="text-[20px]">Ngân hàng</h1>
            <h1 className="text-[20px]">QR code (nếu có)</h1>
          </div>
          <div className="flex flex-col gap-6 w-[500px] items-left pt-[20px]">
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px] ">
                NGUYEN THI BICH PHUONG
              </h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]"> 092-928-0123</h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]">Shinhan Bank</h1>
            </div>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <div className="flex flex-row gap-8">
              <button
                className="hover:shadow-[5px_5px_0px_#289c47] duration-300 text-white font-semibold bg-[#37d461] px-4 py-2"
                style={{
                  width: "136px",
                  borderRadius: "12px",
                }}
              >
                Rút tiền
              </button>
              <button
                className="hover:shadow-[5px_5px_0px_#808080] duration-300 text-white font-semibold bg-[#b8b4b4] w-[200px] py-2"
                style={{
                  borderRadius: "12px",
                  padding: "6px 12px",
                }}
              >
                Thay đổi tài khoản
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
