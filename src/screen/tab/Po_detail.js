import React from "react";

import { Button, DatePicker, Form, Input, Radio, Select, Switch } from "antd";
const { TextArea } = Input;
const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    +84
  </Form.Item>
);
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
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="Email">
                <Input value={"abc@gmail.com"} />
              </Form.Item>
              <Form.Item label="Địa chỉ">
                <Input value={"Phạm Văn Đồng, phường 2, quận Thủ Đức, tpHCM"} />
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
                <Button>Thay đổi mật khẩu</Button>
                <Button>Rút tiền</Button>
                <Button>Thay đổi thông tin</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
