import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function Po_petDetail_vaccine() {
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
  return (
    <div>
      <div className="flex flex-col pl-20 gap-12">
        <div className="flex flex-row justify-between items-center pr-48">
          <h1 className="text-3xl">Lịch sử tiêm chủng</h1>
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size="medium"
          >
            Thêm vaccine đã tiêm
          </Button>
        </div>
        <div
          className="border border-2 rounded-2xl overflow-hidden"
          style={{
            width: "80%",
            height: "200px",
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
          }}
        >
          <div>
            <img
              style={{ width: "280px", height: "220px", objectFit: "cover" }}
              alt="vaccine"
              src="https://product.hstatic.net/200000101597/product/2_f077878252fa4a41a320986ca15e9c3e_master.png"
            />
          </div>
          <div className=" pl-6 py-4">
            <p className="font-bold text-lg">
              Tên nhãn vắc-xin: Feline Rhinotrcheitis
            </p>
            <p className="text-[#808080]">Loại bệnh: 4 bệnh ở mèo FCV </p>
            <p className="pt-12">Nơi tiêm chủng: Phòng khám</p>
            <p>Tên Phòng Khám: Pet Land</p>
            <p>Địa chỉ: 613 Điện Biên Phủ, P.25 Q.Bình Thạnh, HCM.</p>
          </div>
          <div className="flex flex-col justify-between pt-4 pb-10 pl-6 items-center">
            <p className="text-[#808080]">24/02/2002</p>
            <Button onClick={showModal}>Chi tiết</Button>
          </div>
        </div>
        <div
          className="border border-2 rounded-2xl overflow-hidden "
          style={{
            width: "80%",
            height: "200px",
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
          }}
        >
          <div>
            <img
              style={{ width: "280px", height: "220px", objectFit: "cover" }}
              alt="vaccine"
              src="https://product.hstatic.net/200000101597/product/2_f077878252fa4a41a320986ca15e9c3e_master.png"
            />
          </div>
          <div className=" pl-6 py-4 f">
            <p className="font-bold text-lg">
              Tên nhãn vắc-xin: Feline Rhinotrcheitis
            </p>
            <p className="text-[#808080]">Loại bệnh: 4 bệnh ở mèo FCV </p>
            <p className="pt-12">Nơi tiêm chủng: Phòng Khám</p>
            <p>Tên Phòng Khám: Pet Land</p>
            <p>Địa chỉ: 613 Điện Biên Phủ, P.25 Q.Bình Thạnh, HCM.</p>
          </div>
          <div className="flex flex-col justify-between pt-4 pb-10 pl-6 items-center">
            <p className="text-[#808080]">24/02/2002</p>
            <Button onClick={showModal}>Chi tiết</Button>
          </div>
        </div>

        {/* ---------- Modal ----------------*/}
        <Modal
          title="Thông tin tiêm chủng"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={620}
          okText="Đóng"
          cancelText="Xóa thông tin"
        >
          <div className="flex flex-row pt-4">
            <div className="flex flex-col justify-left pt-10">
              <ul class="list-disc ">
                <p className="font-bold">
                  Tên nhãn vắc-xin: Feline Rhinotrcheitis
                </p>
                <p className="text-[#808080]">Loại bệnh: 4 bệnh ở mèo</p>
                <div className="pl-10 pt-4">
                  <li>FCV (Feline Calicici Virus)</li>
                  <li>FRV (Feline Rhinotrachetis Viral)</li>
                  <li>FPV (Feline Panleucopenia Virus)</li>
                  <li>Chlamydia psittaci</li>
                </div>
              </ul>
            </div>
            <div className="ml-14">
              <img
                style={{ width: "200px", height: "200px" }}
                alt="vaccineDetailImg"
                src="https://product.hstatic.net/200000101597/product/2_f077878252fa4a41a320986ca15e9c3e_master.png"
              />
            </div>
          </div>
          <div className="flex flex-col pt-10">
            <p>Cân nặng : 5kg </p>
            <p>Nhiệt độ : 38,2 *C</p>
            <p>Ngày tiêm chủng: 29/02/2023</p>
            <p>Ngày tái chủng: 29/02/2024</p>
            <p>Nơi tiêm chủng: Phòng Khám</p>
            <p>Tên Phòng Khám: Pet Land</p>
            <p>Địa chỉ: 613 Điện Biên Phủ, P.25 Q.Bình Thạnh, HCM.</p>
          </div>
        </Modal>
      </div>
    </div>
  );
}
