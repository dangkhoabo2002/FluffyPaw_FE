import React, { useState } from "react";
import { Radio, Input, Select, Form } from "antd";
import UploadImg from "./Component_upload_image";

const { TextArea } = Input;

export default function AddPet_modal() {
  // --------- Pet Type --------------

  const [value, setValue] = useState(1);
  const [valueSex, setvalueSex] = useState(1);

  const onChange = (e: RadioChangeEventEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangeSex = (e: RadioChangeEventEvent) => {
    console.log("radio checked", e.target.value);
    setvalueSex(e.target.value);
  };

  const [form] = Form.useForm();

  // -----------------------

  // Select value
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form
      layout={"horizontal"}
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      style={{ width: "100%" }}
    >
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <Form.Item label="Hình ảnh thú cưng">
            <UploadImg />
          </Form.Item>
          <Form.Item label="Giống loài">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={"dog"}>Chó</Radio>
              <Radio value={"cat"}>Mèo</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Tên của thú cưng">
            <Input placeholder="Nhập vào đây" />
          </Form.Item>
          <Form.Item label="Giới tính">
            <Radio.Group onChange={onChangeSex} value={valueSex}>
              <Radio value={"male"}>Đực</Radio>
              <Radio value={"felmale"}>Cái</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Giống">
            {value === "cat" ? (
              <>
                <Select
                  defaultValue="Mèo tam thể"
                  onChange={handleChange}
                  options={[
                    { value: "mx", label: "Mèo Xiêm" },
                    { value: "maln", label: "Mèo Anh lông ngắn" },
                    { value: "mald", label: "Mèo Anh lông dài" },
                    { value: "mac", label: "Mèo Ai Cập" },
                    { value: "mbt", label: "Mèo Ba Tư" },
                    { value: "mbali", label: "Mèo Bali" },
                    { value: "mbengal", label: "Mèo Bengal" },
                    { value: "msf", label: "Mèo Scottish Fold" },
                    { value: "mmk", label: "Mèo Munchkin" },
                    { value: "mm", label: "Mèo mướp" },
                    { value: "mr", label: "Mèo Ragdoll" },
                    { value: "mmc", label: "Mèo Maine Coon" },
                    { value: "ma", label: "Mèo Angora" },
                    { value: "ml", label: "Mèo Laperm" },
                    { value: "ms", label: "Mèo Somali" },
                    { value: "mt", label: "Mèo Toyger" },
                    { value: "mtv", label: "Mèo Turkish Van" },
                    { value: "mmd", label: "Mèo Miến Điện" },
                    { value: "me", label: "Mèo Exotic" },
                  ]}
                />
              </>
            ) : (
              <>
                <Select
                  defaultValue="Chó ta"
                  onChange={handleChange}
                  options={[
                    { value: "cc", label: "Chó Chihuahua" },
                    { value: "cbc", label: "Chó Bắc Kinh" },
                    { value: "cbcln", label: "Chó Bắc Kinh lai Nhật" },
                    {
                      value: "cxx",
                      label: "Chó Dachshund (Lạp Xưởng/Xúc Xích)",
                    },
                    { value: "cpq", label: "Chó Phú Quốc" },
                    { value: "cpoodle", label: "Chó Poodle" },
                    { value: "cpug", label: "Chó Pug" },
                    { value: "calaska", label: "Chó Alaska" },
                    { value: "chusky", label: "Chó Husky" },
                    { value: "cs", label: "Chó Samoyed" },
                    { value: "cp", label: "Chó Pomeranian (Phốc sóc)" },
                    { value: "cb", label: "Chó Beagle" },
                    { value: "cshiba", label: "Chó Shiba Inu" },
                    { value: "cgr", label: "Chó Golden Retriever" },
                    { value: "cbegie", label: "Chó Becgie" },
                    { value: "ccorgi", label: "Chó Corgi" },
                    { value: "cmc", label: "Chó Mông Cộc" },
                  ]}
                />
              </>
            )}
          </Form.Item>
          <Form.Item label="Cân nặng">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Tuổi">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
        </div>
        <div className="flex flex-col w-full">
          <Form.Item label="Đã triệt sản chưa">
            <Radio.Group onChange={onChangeSex} value={valueSex}>
              <Radio value={"st"}>Rồi</Radio>
              <Radio value={"unSt"}>Chưa</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Ngày sinh">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Mã số chip">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Chế độ ăn uống">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Hành vi đặc biệt">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Tính cách">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Ghi chú">
            <TextArea rows={4} />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}
