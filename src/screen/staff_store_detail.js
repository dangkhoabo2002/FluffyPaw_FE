import React from "react";
import { Checkbox, Image, Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
export default function staff_store_detail() {
  return (
    <div className="ml-[300px] mr-12 mt-6 px-6 py-6 flex flex-col shadow-md bg-white rounded-md">
      <div className="flex flex-row px-11 justify-start items-center">
        <div className="flex flex-row justify-start items-start gap-28">
          <div className="flex flex-col gap-7">
            <h1 className="text-[20px]">Logo cửa hàng</h1>
            <h1 className="text-[20px] pt-[170px]">Tên cửa hàng</h1>
            <h1 className="text-[20px]">Số điện thoại</h1>
            <h1 className="text-[20px]">Email cửa hàng</h1>
            <h1 className="text-[20px]">Địa chỉ</h1>
            <h1 className="text-[20px]">Phương thức thanh toán</h1>
            <h1 className="text-[20px]">Cơ sở kinh doanh là</h1>
            <h1 className="text-[20px]">Trụ sở chính/ Thương hiệu</h1>
            <h1 className="text-[20px]">Đánh giá</h1>
            <h1 className="text-[20px]">Lượt yêu thích</h1>
            <h1 className="text-[20px]">Số dịch vụ hiện có</h1>
            <h1 className="text-[20px]">Giấy phép kinh doanh</h1>
          </div>
          <div className="flex flex-col gap-6 w-[500px] items-left">
            <Image
              className="object-cover"
              width={200}
              height={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbz49jfzelLcn17vVACrpwjD7lDBCGriaggg&s"
            />
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]"> Wanpy</h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]"> 0929281723781</h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]">fluffypaw@gmail.com</h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]">
                123 Phan xích long, bình thạnh, tp hcmáda asdas sad sdasdasd
              </h1>
            </div>
            <Checkbox.Group className="pt-1" value={["A", "D"]} disabled>
              <Checkbox value="A">
                <h1 className="text-pink-600 text-[16px]">COD</h1>
              </Checkbox>
              <Checkbox value="D">
                <h1 className="text-pink-600 text-[16px]">Fluffy Pay</h1>
              </Checkbox>
            </Checkbox.Group>
            <Checkbox.Group className="pt-2 pb-2" value={["1", "2"]} disabled>
              <Checkbox value="1">
                <h1 className="text-pink-600 text-[16px]">Chi nhánh</h1>
              </Checkbox>
              <Checkbox value="2">
                <h1 className="text-pink-600 text-[16px]">Cơ sở chính</h1>
              </Checkbox>
            </Checkbox.Group>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]">Mister Donut</h1>
            </div>
            <div className="rounded-lg w-auto px-6 pt-1 border border-gray-300">
              <Rate allowHalf defaultValue={2.5} disabled />
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]">
                1.000.000 <HeartOutlined className="pl-2" />
              </h1>
            </div>
            <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
              <h1 className="text-pink-600 text-[16px]">12</h1>
            </div>
            <div className="pt-1 flex flex-row gap-10">
              <Image
                width={200}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsymFZboYoVyPSsjpGNx2GVc1Ihp7l8e03wA&s"
              />
              <Image
                width={200}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsymFZboYoVyPSsjpGNx2GVc1Ihp7l8e03wA&s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
