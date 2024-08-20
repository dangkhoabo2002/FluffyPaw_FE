import React, { useState } from "react";
import "./Po_pets.css";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Modal, Radio, Input, Form, Button, Select } from "antd";

import UploadImg from "./Component_upload_image";

const { TextArea } = Input;

export default function Po_pets() {
  // --------- Modal --------------
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // -----------------------

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
    <>
      <div className="flex flex-col px-20 ">
        <div className="py-10 flex flex-row justify-between items-center">
          <h1>Chó</h1>
          <div class="flex rounded border-b-2 border-grey-dark overflow-hidden bg-[#FDCEDF] ">
            <div class="bg-[#F2BED1] shadow-border p-3">
              <div class="w-6 h-4">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                </svg>
              </div>
            </div>
            <button
              onClick={showModal}
              class="addPet block text-black text-sm shadow-border bg-blue text-sm py-3 px-4 font-sans tracking-wide font-bold items-center"
            >
              Thêm thú cưng mới
            </button>
          </div>
          {/* --------------- List of pet --------------- */}
        </div>
        <div className="flex flex-wrap justify-between gap-y-12	">
          <Link to={`/po_profile/po_petdetail`}>
            <div className="petCard">
              <div className="petIcon">
                <img
                  className="scale-x-[-1]"
                  alt="dogIcon"
                  src="https://cdn4.vectorstock.com/i/1000x1000/82/13/dog-outline-icon-graphics-vector-47088213.jpg"
                />
                <div id="petName">Labubu</div>
              </div>

              <div className="flex flex-start flex-col">
                <p>Sở thích: Gặm cỏ</p>
                <p>Giống: Cái</p>
                <p>Cân nặng: 5 kg</p>
                <div className="inline-flex gap-2 text-green-600 py-4">
                  <CheckCircleIcon class="h-6 w-6 text-green-600" />
                  Đã tiêm chủng
                </div>
              </div>
            </div>
          </Link>
          <Link to={`/po_profile/po_petdetail`}>
            <div className="petCard">
              <div className="petIcon">
                <img
                  className="scale-x-[-1]"
                  alt="dogIcon"
                  src="https://cdn4.vectorstock.com/i/1000x1000/82/13/dog-outline-icon-graphics-vector-47088213.jpg"
                />
                <div id="petName">Labubu</div>
              </div>

              <div className="flex flex-start flex-col">
                <p>Sở thích: Gặm cỏ</p>
                <p>Giống: Cái</p>
                <p>Cân nặng: 5 kg</p>
                <div className="inline-flex gap-2 text-green-600 py-4">
                  <CheckCircleIcon class="h-6 w-6 text-green-600" />
                  Đã tiêm chủng
                </div>
              </div>
            </div>
          </Link>
        </div>

        <h1 className="py-12">Mèo</h1>
        <div className="flex flex-wrap justify-between gap-y-12	">
          <Link to={`/po_profile/po_petdetail`}>
            <div className="petCard">
              <div className="petIcon">
                <img
                  alt="dogIcon"
                  src="https://logowik.com/content/uploads/images/cat8600.jpg"
                />
                <div id="petName">Labubu</div>
              </div>

              <div className="flex flex-start flex-col">
                <p>Sở thích: Gặm cỏ</p>
                <p>Giống: Cái</p>
                <p>Cân nặng: 5 kg</p>
                <div className="inline-flex gap-2 text-green-600 py-4">
                  <CheckCircleIcon class="h-6 w-6 text-green-600" />
                  Đã tiêm chủng
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* --------------- Add Pet Modal --------------- */}
      <Modal
        title="Thêm thú cưng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
      >
        <Form
          layout={"horizontal"}
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          style={{ maxWidth: 600 }}
        >
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
        </Form>
      </Modal>
    </>
  );
}
