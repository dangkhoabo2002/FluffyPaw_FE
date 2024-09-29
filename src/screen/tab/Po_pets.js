import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Modal, Button, Skeleton } from "antd";

import FormModal from "./Po_addPet_modal";
import "./Po_pets.css";

export default function Po_pets(petList) {
  const dogs = petList.petList?.filter((item) => item.petCategory === "Dog");
  const cats = petList.petList?.filter((item) => item.petCategory === "Cat");
  // --------- Modal --------------
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    console.log(petList.petList);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (petList) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);
  return (
    <>
      <div className="flex flex-col px-20 pt-12">
        <div className="py-10 flex flex-row justify-between items-center">
          {dogs?.length > 0 && <h1>Chó</h1>}
          {petList.petList?.length > 0 && (
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
              {petList && petList?.length < 5 ? (
                <button
                  onClick={showModal}
                  class="addPet block text-black shadow-border bg-blue text-sm py-3 px-4 font-sans tracking-wide font-bold items-center"
                >
                  Thêm thú cưng mới
                </button>
              ) : (
                <p className="text-gray-400">
                  Bạn đã sỡ hữu số lượng thú cưng tối đa
                </p>
              )}
            </div>
          )}

          {/* --------------- List of pet --------------- */}
        </div>
        <div className="flex flex-wrap justify-between gap-y-12	">
          {dogs &&
            dogs?.map((dog) => (
              <Link to={`/po_profile/po_petdetail/${dog.id}`} key={dog.id}>
                <div className="petCard">
                  <div className="petIcon">
                    <img
                      className="scale-x-[-1]"
                      alt="dogIcon"
                      src="https://cdn4.vectorstock.com/i/1000x1000/82/13/dog-outline-icon-graphics-vector-47088213.jpg"
                    />
                    <div id="petName" className="text-black">
                      {dog.name}
                    </div>
                  </div>

                  <div className="flex flex-start flex-col">
                    <p>Sở thích: Gặm cỏ</p>
                    <p>Giống: {dog.sex === "Male" ? "Đực" : "Cái"}</p>
                    <p>Cân nặng: {dog.weight}kg</p>
                    {dog.isNeuter === true ? (
                      <div className="inline-flex gap-2 text-green-600 py-4">
                        <CheckCircleIcon class="h-6 w-6 text-green-600" />
                        Đã tiêm chủng
                      </div>
                    ) : (
                      <div className="inline-flex gap-2 text-gray-600 py-4">
                        <XCircleIcon class="h-6 w-6 text-gray-600" />
                        Chưa tiêm chủng
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>
        {cats?.length > 0 && <h1 className="py-12">Mèo</h1>}
        <div className="flex flex-wrap justify-between gap-y-12	">
          {cats &&
            cats?.map((cat) => (
              <Link to={`/po_profile/po_petdetail/${cat.id}`} key={cat.id}>
                <div className="petCard">
                  <div className="petIcon">
                    <img
                      alt="dogIcon"
                      src="https://logowik.com/content/uploads/images/cat8600.jpg"
                    />
                    <div id="petName" className="text-black">
                      {cat.name}
                    </div>
                  </div>

                  <div className="flex flex-start flex-col">
                    <p>Sở thích: Gặm cỏ</p>
                    <p>Giống: {cat.sex === "Male" ? "Đực" : "Cái"}</p>
                    <p>Cân nặng: {cat.weight}kg</p>
                    {cat.isNeuter === true ? (
                      <div className="inline-flex gap-2 text-green-600 py-4">
                        <CheckCircleIcon class="h-6 w-6 text-green-600" />
                        Đã tiêm chủng
                      </div>
                    ) : (
                      <div className="inline-flex gap-2 text-gray-600 py-4">
                        <XCircleIcon class="h-6 w-6 text-gray-600" />
                        Chưa tiêm chủng
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      {/* --------------- Add Pet Modal --------------- */}
      <Modal
        title="Thêm thú cưng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={(_, {}) => (
          <>
            <Button type="primary">Thêm thú cưng</Button>
            <Button onClick={handleCancel}>Hủy bỏ</Button>
          </>
        )}
      >
        <FormModal />
      </Modal>
    </>
  );
}
