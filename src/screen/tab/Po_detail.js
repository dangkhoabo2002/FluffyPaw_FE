import React, { useState } from "react";

import { Button, DatePicker, Form, Input, Radio, Select, Switch } from "antd";
const { TextArea } = Input;
const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    +84
  </Form.Item>
);
export default function Po_detail(profile) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit === true ? (
        <div>
          <div className="flex flex-row pl-20 items-center gap-4">
            <button className="button-3d" onClick={() => setIsEdit(false)}>
              <div className="button-top">
                <span className="material-icons">&#10094;</span>
              </div>
              <div className="button-bottom" />
              <div className="button-base" />
            </button>
            <h1 className="text-[26px]">Quay lại</h1>
          </div>
          <div className="flex flex-col gap-4 px-20 pt-14">
            <div className="grid grid-cols-2">
              <div className="">
                <Form
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  //   disabled
                  style={{ maxWidth: 800 }}
                >
                  <Form.Item
                    required
                    name="phone"
                    label="Phone Number"
                    rules={[
                      {
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input value={"abc@gmail.com"} />
                  </Form.Item>
                  <Form.Item label="Địa chỉ">
                    <Input
                      value={"Phạm Văn Đồng, phường 2, quận Thủ Đức, tpHCM"}
                    />
                  </Form.Item>
                  <Form.Item label="Tiểu sử">
                    <TextArea rows={4} />
                  </Form.Item>
                </Form>
              </div>
              <div className="flex flex-col justify-left">
                <Form
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 12 }}
                  layout="horizontal"
                  //   disabled
                  style={{ maxWidth: 800 }}
                >
                  <Form.Item label="Giới tính" required>
                    <Radio.Group>
                      <Radio value="name"> Nam </Radio>
                      <Radio value="nu"> Nữ </Radio>
                      <Radio value="khac"> Khác </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="Ngày sinh" required>
                    <DatePicker />
                  </Form.Item>

                  <div className="pl-14 gap-6 flex flex-col">
                    <div className="inline-flex gap-4">
                      <p>Ẩn thông tin cá nhân:</p> <Switch />
                    </div>
                    <div className="flex flex-row gap-10">
                      <button className="Btn" onClick={() => setIsEdit(true)}>
                        Thay đổi mật khẩu
                        <svg className="svg" viewBox="0 0 512 512">
                          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                        </svg>
                      </button>
                      <button className="Btn" onClick={() => setIsEdit(true)}>
                        Thay đổi mật khẩu
                        <svg className="svg" viewBox="0 0 512 512">
                          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-12">
          <div className="flex flex-row px-11 justify-evenly items-center">
            <div className="flex flex-row justify-start items-start gap-4">
              <div className="flex flex-col gap-7">
                <h1 className="text-[20px]">Tài khoản</h1>
                <h1 className="text-[20px]">Số điện thoại</h1>
                <h1 className="text-[20px]">Email</h1>
                <h1 className="text-[20px]">Địa chỉ</h1>
              </div>
              <div className="flex flex-col gap-6 w-[400px] items-left">
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    {profile.profile?.username}
                  </h1>
                </div>

                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]"> 0929281723781</h1>
                </div>

                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    fluffypaw@gmail.com
                  </h1>
                </div>
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    123 Phan xích long, bình thạnh, tp hcmáda asdas sad sdasdasd
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start gap-4">
              <div className="flex flex-col gap-7">
                <h1 className="text-[20px]">Giới tính</h1>
                <h1 className="text-[20px]">Trạng thái thông tin</h1>
                <button className="Btn" onClick={() => setIsEdit(true)}>
                  Thay đổi thông tin
                  <svg className="svg" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-6 w-[200px] items-left">
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">Nam</h1>
                </div>
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">Công khai</h1>
                </div>
                <button className="Btn" onClick={() => setIsEdit(true)}>
                  Thay đổi mật khẩu
                  <svg className="svg" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
