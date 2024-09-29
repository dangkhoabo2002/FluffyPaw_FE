import React, { useState } from "react";
import { TrashIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Steps, Modal, Input, Select, Button } from "antd";
const { TextArea } = Input;

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
export default function Staff_store_services() {
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

  // Next modal
  const [step, setStep] = useState(1);
  const handleStep = (action) => {
    if (action === "next") setStep(step + 1);
    else setStep(step - 1);
  };

  return (
    <div className="ml-[300px] mr-12 mt-6 px-6 py-6 flex flex-col shadow-md bg-white rounded-md">
      <div className="flex flex-col px-11 justify-start ">
        <h1>Danh sách các dịch vụ</h1>
        <div className="py-14">
          <div className="relative flex w-60 flex-col rounded-xl bg-[#f7d9ea] bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <img
                alt="serviceImg"
                className="w-full h-full object-cover"
                src="https://phongkhamthuytenlua.vn/wp-content/uploads/2022/11/dich-vu-cham-soc-thu-cung-1.png"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-1 block font-sans text-[18px] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Combo 10 bước dành cho Chó & Mèo
              </h5>
            </div>
            <div className="p-6 pt-0 flex flex-row justify-between">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-[#ff7fa1] py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Chi tiết dịch vụ
              </button>

              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-white py-2 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <TrashIcon class="h-6 w-6 text-red-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON ADD SERVICE */}

      <button
        data-ripple-light="true"
        type="button"
        onClick={showModal}
        className="flex flex-row gap-2 justify-center items-center fixed right-[48px] bottom-6 select-none rounded-3xl bg-[#ff7fa1] py-3 px-4 text-center align-middle font-sans text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <p className="text-[16px] pb-1">Thêm dịch vụ</p>
        <PlusCircleIcon class="h-8 w-8" />
      </button>

      {/* MODAL ADD SERVICE */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        footer={
          <>
            <Button onClick={() => handleStep("previous")}>Hủy</Button>
            <Button type="primary" onClick={() => handleStep("next")}>
              Tiếp tục
            </Button>
          </>
        }
      >
        <h1>Thêm dịch vụ</h1>
        <div className="flex flex-row justify-between items-center gap-20 py-7">
          {step === 1 && (
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-row justify-center items-center">
                <h1 className="text-[20px] w-[300px] text-right pr-10">
                  Tên dịch vụ
                </h1>
                <Input placeholder="Basic usage" size="large" />
              </div>
              <div className="flex flex-row justify-start items-start">
                <h1 className="text-[20px] w-[300px] text-right pr-10">
                  Mô tả dịch vụ
                </h1>
                <TextArea
                  showCount
                  maxLength={250}
                  placeholder="disable resize"
                  style={{
                    height: 120,
                    resize: "none",
                  }}
                />
              </div>
              <div className="flex flex-row justify-center items-center pt-3">
                <h1 className="text-[20px] w-[300px] text-right pr-10">
                  Loại dịch vụ
                </h1>
                <Select
                  mode="tags"
                  size={"large"}
                  placeholder="Please select"
                  onChange={handleChange}
                  style={{
                    width: "100%",
                  }}
                  options={[
                    {
                      value: "1",
                      label: "Dành cho chó",
                    },
                    {
                      value: "2",
                      label: "Dành cho mèo",
                    },
                    {
                      value: "3",
                      label: "Dành cho chó & mèo",
                    },
                    {
                      value: "4",
                      label: "Tiêm chủng",
                    },
                    {
                      value: "5",
                      label: "Chăm sóc",
                    },
                    {
                      value: "6",
                      label: "Huấn luyện & hỗ trợ",
                    },
                    {
                      value: "7",
                      label: "Dịch vụ",
                    },
                  ]}
                />
              </div>
            </div>
          )}

          <div>
            <Steps
              progressDot
              current={3}
              direction="vertical"
              items={[
                {
                  title: "Thông tin cơ bản",
                },
                {
                  title: "Khung thời gian",
                },
                {
                  title: "Thông tin thêm",
                },
                {
                  title: "Hoàn tất",
                },
              ]}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
