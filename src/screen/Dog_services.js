import React, { useState } from "react";
import { Pagination, Rate, Divider } from "antd";
import Navbar from "../component/petowner/navbar";
import "../css/Dog_service.css";
export default function Dog_service() {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="pt-28 flex flex-col justify-center items-center w-screen px-[10%] gap-14">
        <Divider
          style={{
            borderColor: "#7cb305",
          }}
        >
          <div className="flex flex-row justify-center rounded-lg bg-cyan-200 px-16 py-6">
            GỢI Ý DÀNH CHO CHÓ
          </div>
        </Divider>
        <div className="flex flex-row flex-wrap justify-start gap-x-[17px] gap-y-6 w-full">
          <div className="card">
            <Rate
              disabled
              allowHalf
              defaultValue={2.5}
              style={{
                position: "absolute",
                left: "14px",
                top: "12px",
                color: "yellowgreen",
              }}
            />
            <div>
              <div className="card-image" />
              <div className="category"> Dành cho chó </div>
              <div className="heading flex flex-col justify-between">
                Dắt chó đi dạo
              </div>
            </div>
            <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
              <p className="font-[Itim] text-[16px]">400 đã đặt</p>
              <p className="font-[Itim] text-[18px]">300.000 VNĐ</p>
            </div>
          </div>
          <div className="card">
            <Rate
              disabled
              allowHalf
              defaultValue={4.8}
              style={{
                position: "absolute",
                left: "14px",
                top: "12px",
                color: "yellowgreen",
              }}
            />
            <div>
              <div className="card-image" />
              <div className="category"> Dành cho chó </div>
              <div className="heading flex flex-col justify-between">
                Tiêu đề của dịch vụ chỉ giới hạn trong 58 kí tự
              </div>
            </div>
            <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
              <p className="font-[Itim] text-[16px]">400 đã đặt</p>
              <p className="font-[Itim] text-[18px]">200.000 VNĐ</p>
            </div>
          </div>{" "}
          <div className="card">
            <Rate
              disabled
              allowHalf
              defaultValue={2.5}
              style={{
                position: "absolute",
                left: "14px",
                top: "12px",
                color: "yellowgreen",
              }}
            />
            <div>
              <div className="card-image" />
              <div className="category"> Dành cho chó </div>
              <div className="heading flex flex-col justify-between">
                Dắt chó đi dạo
              </div>
            </div>
            <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
              <p className="font-[Itim] text-[16px]">400 đã đặt</p>
              <p className="font-[Itim] text-[18px]">300.000 VNĐ</p>
            </div>
          </div>{" "}
          <div className="card">
            <Rate
              disabled
              allowHalf
              defaultValue={2.5}
              style={{
                position: "absolute",
                left: "14px",
                top: "12px",
                color: "yellowgreen",
              }}
            />
            <div>
              <div className="card-image" />
              <div className="category"> Dành cho chó </div>
              <div className="heading flex flex-col justify-between">
                Dắt chó đi dạo
              </div>
            </div>
            <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
              <p className="font-[Itim] text-[16px]">400 đã đặt</p>
              <p className="font-[Itim] text-[18px]">300.000 VNĐ</p>
            </div>
          </div>{" "}
          <div className="card">
            <Rate
              disabled
              allowHalf
              defaultValue={2.5}
              style={{
                position: "absolute",
                left: "14px",
                top: "12px",
                color: "yellowgreen",
              }}
            />
            <div>
              <div className="card-image" />
              <div className="category"> Dành cho chó </div>
              <div className="heading flex flex-col justify-between">
                Dắt chó đi dạo
              </div>
            </div>
            <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
              <p className="font-[Itim] text-[16px]">400 đã đặt</p>
              <p className="font-[Itim] text-[18px]">300.000 VNĐ</p>
            </div>
          </div>{" "}
          <div className="card">
            <Rate
              disabled
              allowHalf
              defaultValue={2.5}
              style={{
                position: "absolute",
                left: "14px",
                top: "12px",
                color: "yellowgreen",
              }}
            />
            <div>
              <div className="card-image" />
              <div className="category"> Dành cho chó </div>
              <div className="heading flex flex-col justify-between">
                Dắt chó đi dạo
              </div>
            </div>
            <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
              <p className="font-[Itim] text-[16px]">400 đã đặt</p>
              <p className="font-[Itim] text-[18px]">300.000 VNĐ</p>
            </div>
          </div>{" "}
          <div className="card">
            <Rate
              disabled
              allowHalf
              defaultValue={2.5}
              style={{
                position: "absolute",
                left: "14px",
                top: "12px",
                color: "yellowgreen",
              }}
            />
            <div>
              <div className="card-image" />
              <div className="category"> Dành cho chó </div>
              <div className="heading flex flex-col justify-between">
                Dắt chó đi dạo
              </div>
            </div>
            <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
              <p className="font-[Itim] text-[16px]">400 đã đặt</p>
              <p className="font-[Itim] text-[18px]">300.000 VNĐ</p>
            </div>
          </div>{" "}
          <div className="card">
            <Rate
              disabled
              allowHalf
              defaultValue={2.5}
              style={{
                position: "absolute",
                left: "14px",
                top: "12px",
                color: "yellowgreen",
              }}
            />
            <div>
              <div className="card-image" />
              <div className="category"> Dành cho chó </div>
              <div className="heading flex flex-col justify-between">
                Dắt chó đi dạo
              </div>
            </div>
            <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
              <p className="font-[Itim] text-[16px]">400 đã đặt</p>
              <p className="font-[Itim] text-[18px]">300.000 VNĐ</p>
            </div>
          </div>
        </div>
        <Pagination current={current} onChange={onChange} total={50} />
      </div>
    </div>
  );
}
