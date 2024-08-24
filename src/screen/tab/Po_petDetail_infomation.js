import React, { useState } from "react";
import "./Po_petDetail_information.css";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

export default function Po_petDetail_infomation() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="flex flex-col px-11 gap-12">
        <div className="flex flex-row justify-center">
          <img
            alt="petImg"
            style={{
              width: "400px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg"
          />
        </div>
        <div className="flex flex-row">
          <div className="">
            <div className="grid grid-cols-2 items-center">
              <div className="flex flex-row justify-start items-start gap-4">
                <div className="flex flex-col gap-7">
                  <h1 className="text-[20px]">Tên</h1>
                  <h1 className="text-[20px]">Sở thích</h1>
                  <h1 className="text-[20px]">Giới tính</h1>
                  <h1 className="text-[20px]">Giống loài</h1>
                  <h1 className="text-[20px]">Cân nặng</h1>
                  <h1 className="text-[20px]">Tuổi</h1>
                  <h1 className="text-[20px]">Tính cách</h1>
                </div>
                <div className="flex flex-col gap-6 w-[200px] items-left">
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">Labubu</h1>
                  </div>

                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">Gặm cỏ</h1>
                  </div>

                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">Cái </h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">Mèo tam thể</h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">5kg</h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">4</h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">Hiếu khách </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-start gap-4">
                <div className="flex flex-col gap-7">
                  <h1 className="text-[20px]">Ngày sinh</h1>
                  <h1 className="text-[20px]">Ngày nhận nuôi</h1>
                  <h1 className="text-[20px]">Mã số chip</h1>
                  <h1 className="text-[20px]">Đã triệt sản hay chưa</h1>
                  <h1 className="text-[20px]">Chế độ ăn uống</h1>
                  <h1 className="text-[20px]">Hành vi đặc biệt</h1>
                  <h1 className="text-[20px]">Trạng thái thông tin</h1>
                  {/* <h1 className="text-[20px]">Ghi chú</h1> */}
                </div>
                <div className="flex flex-col gap-6 w-[200px] items-left">
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">24/05/2022</h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">24/05/2022</h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">Không có</h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">Rồi</h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">Bình thường</h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">
                      Hay đe dọa người lạ
                    </h1>
                  </div>
                  <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                    <h1 className="text-pink-600 text-[16px]">Ẩn </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row pr-16 gap-6">
          <h1 className="text-[20px] w-[200px]">Ghi chú</h1>

          <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
            <h1 className="text-pink-600 text-[16px]">
              Rất ghét các con mèo khác Rất ghét các con mèo khác Rất ghét các
              con mèo khác Rất ghét các con mèo khác Rất ghét các con mèo khác
              Rất ghét các con mèo khác Rất ghét các con mèo khácRất ghét các
              con mèo khác Rất ghét các con mèo khác.
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-between pr-16">
          <button className="Btn" onClick={() => setIsEdit(true)}>
            Thay đổi thông tin
            <svg className="svg" viewBox="0 0 512 512">
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
            </svg>
          </button>
          <button className="Btn" onClick={() => setIsEdit(true)}>
            Thay đổi chủ nhân
            <svg className="svg" viewBox="0 0 512 512">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                  clip-rule="evenodd"
                />
              </svg>
            </svg>
          </button>
          <button
            className="Btn"
            style={{
              width: "150px",
            }}
            onClick={() => setIsEdit(true)}
          >
            Ẩn thông tin
            <svg className="svg" viewBox="0 0 512 512">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="svg"
              >
                <path d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
              </svg>
            </svg>
          </button>
          <button
            className="Btn"
            style={{
              width: "136px",
              backgroundColor: "#B2BEB5",
              boxShadow: "5px 5px 0px #808080",
            }}
            onClick={() => setIsEdit(true)}
          >
            Xóa hồ sơ
            <svg className="svg" viewBox="0 0 512 512">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clip-rule="evenodd"
                />
              </svg>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
