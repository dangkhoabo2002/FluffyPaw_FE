import React from "react";
import { Checkbox, Rate, Divider, Row } from "antd";
import Navbar from "../component/petowner/navbar";
import { Link } from "react-router-dom";

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

export default function Service_mainpage() {
  return (
    <div>
      <Navbar />

      <Divider
        className="pt-28"
        style={{
          borderColor: "#7cb305",
        }}
      >
        <div className="flex flex-row justify-center rounded-lg bg-cyan-200 px-16 py-6">
          GỢI Ý DÀNH CHO MÈO
        </div>
      </Divider>
      <div className="flex flex-row gap-10 px-32">
        <div className="flex flex-col">
          <Checkbox.Group
            onChange={onChange}
            className="inline-block mr-0 w-72 h-40"
          >
            <Row className="py-10">
              <Checkbox value="Apple">Appleasdad sadas ádasd ádasd</Checkbox>
            </Row>
            <Row>
              <Checkbox value="Pear">Pear asdasd asdasd</Checkbox>
            </Row>
          </Checkbox.Group>
        </div>
        <div className="flex flex-col">
          <h1>Các cửa hàng liên quan</h1>
          <div>
            <div className="w-48 h-36 flex flex-row border border-l-purple-600 overflow-hidden gap-5">
              <img
                className="w-10 h-10 object-cover"
                src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
              />
              <div>
                <p>Tên shop</p> <Divider />
                <p>Content shop</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-start gap-x-[17px] gap-y-6 w-full">
            <Link to={`/service_booking`}>
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
                  <div className="category"> Dành cho mèo </div>
                  <div className="heading flex flex-col justify-between">
                    Dắt mèo đi dạo
                  </div>
                </div>
                <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
                  <p className="font-[Itim] text-[16px]">400 đã đặt</p>
                  <p className="font-[Itim] text-[18px]">300.000 VNĐ</p>
                </div>
              </div>
            </Link>
            <Link to={`/service_booking_type2`}>
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
                  <div className="category"> Dành cho mèo </div>
                  <div className="heading flex flex-col justify-between">
                    Tiêu đề của dịch vụ chỉ giới hạn trong 58 kí tự
                  </div>
                </div>
                <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
                  <p className="font-[Itim] text-[16px]">400 đã đặt</p>
                  <p className="font-[Itim] text-[18px]">200.000 VNĐ</p>
                </div>
              </div>
            </Link>
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
                <div className="category"> Dành cho mèo </div>
                <div className="heading flex flex-col justify-between">
                  Dắt mèo đi dạo
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
                <div className="category"> Dành cho mèo </div>
                <div className="heading flex flex-col justify-between">
                  Dắt mèo đi dạo
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
                <div className="category"> Dành cho mèo </div>
                <div className="heading flex flex-col justify-between">
                  Dắt mèo đi dạo
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
                <div className="category"> Dành cho mèo </div>
                <div className="heading flex flex-col justify-between">
                  Dắt mèo đi dạo
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
                <div className="category"> Dành cho mèo </div>
                <div className="heading flex flex-col justify-between">
                  Dắt mèo đi dạo
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
                <div className="category"> Dành cho mèo </div>
                <div className="heading flex flex-col justify-between">
                  Dắt mèo đi dạo
                </div>
              </div>
              <div className="author w-full flex flex-row justify-between items-center px-[.4em] pb-2">
                <p className="font-[Itim] text-[16px]">400 đã đặt</p>
                <p className="font-[Itim] text-[18px]">300.000 VNĐ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
