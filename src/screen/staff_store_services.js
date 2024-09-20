import React from "react";
import { TrashIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Staff_store_services() {
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

      <button
        data-ripple-light="true"
        type="button"
        className="flex flex-row gap-2 justify-center items-center fixed right-[48px] bottom-6 select-none rounded-3xl bg-[#ff7fa1] py-3 px-4 text-center align-middle font-sans text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <p className="text-[16px] pb-1">Thêm dịch vụ</p>
        <PlusCircleIcon class="h-8 w-8" />
      </button>
    </div>
  );
}
