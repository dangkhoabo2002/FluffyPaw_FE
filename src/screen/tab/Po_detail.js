import React from "react";

import { Button, DatePicker, Form, Input, Radio, Select, Switch } from "antd";
const { TextArea } = Input;

export default function Po_detail() {
  return (
    <>
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
              <Form.Item label="Số điện thoại">
                <Input value={"0192301930"} />
              </Form.Item>
              <Form.Item label="Email">
                <Input value={"abc@gmail.com"} />
              </Form.Item>
              <Form.Item label="Địa chỉ">
                <Input value={"Phạm Văn Đồng, phường 2, quận Thủ Đức, tpHCM"} />
              </Form.Item>
              <Form.Item label="Select">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
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
              <Form.Item label="Giới tính">
                <Radio.Group>
                  <Radio value="apple"> Nam </Radio>
                  <Radio value="pear"> Nữ </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Ngày sinh">
                <DatePicker />
              </Form.Item>

              <div className="pl-14 gap-6 flex flex-col">
                <div className="inline-flex gap-4">
                  <p>Ẩn thông tin cá nhân:</p> <Switch />
                </div>
                <p>Là thành viên từ ngày 20/09/2024</p>
                <Button>Thay đổi mật khẩu</Button>
                <Button>Rút tiền</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
