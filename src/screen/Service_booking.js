import React, { useState } from "react";
import Navbar from "../component/petowner/navbar";
import { Rate, Row, Col, Button, Radio } from "antd";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import Footer from "../component/footer";
import { Link } from "react-router-dom";

export default function Service_booking() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [isBooking, setIsBooking] = useState(false);
  const handleBooking = () => {
    if (isBooking === false) setIsBooking(true);
    else setIsBooking(false);
  };

  const [payment, setPayment] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setPayment(e.target.value);
  };
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col px-40 py-36">
        <div>breadcrumb</div>
        <div className="bg-white w-full h-16">
          <Row>
            <Col flex={2}>
              <img
                className="h-[500px] w-[500px] object-cover"
                alt="service image"
                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/455824707_122122249214366191_6385265677655508304_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE7PhzVBE1rgjwQVKaZepyLwvU3XZvztpDC9Tddm_O2kL8MHck98oLdJ4uv2cAviV7WUmspMg6Dy8Rh4HC7PIRy&_nc_ohc=hbnCCKYdjNMQ7kNvgFC-pog&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=AhBM0KDUGkiLpBeinMfc9eh&oh=00_AYBke-ABc1yy7zoJpuN_VX8f90DmOkEr6JWbJObtkxh4Hg&oe=66F01B90"
              />
            </Col>
            <Col flex={10}>
              <div className="flex flex-col justify-start">
                <h1 className="text-[26px]">
                  Combo 10 bước dành cho Chó & Mèo
                </h1>
                <div className="flex flex-row justify-center items-start">
                  <p className="font-[Itim] text-[20px]">2.5/5</p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    className="text-red-800 pl-2"
                    disabled
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="pt-[500px] flex flex-row gap-10">
          <div className="bg-[#f3d0d7] rounded-lg px-4 py-4 h-[370px]">
            <div className="border border-gray-400 rounded-xl">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                  <DateCalendar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoItem>
              </LocalizationProvider>
            </div>

            <Button type="primary" onClick={handleBooking}>
              Fill booking info
            </Button>
          </div>
          <div className="w-full border border-gray-400 rounded-xl flex flex-col px-8 py-8 gap-4">
            {isBooking === false ? (
              <>
                <h1 className="text-[28px]">Sáng</h1>
                <div className="flex flex-row gap-6">
                  <div className="bg-gray-400 px-8 py-2 font-mono border border-gray-400 rounded-lg hover:border-black">
                    8:15
                  </div>
                  <div className="px-8 py-2 font-mono border border-gray-400 rounded-lg hover:border-black">
                    9:15
                  </div>
                  <div className="px-8 py-2 font-mono border border-gray-400 rounded-lg hover:border-black">
                    10:15
                  </div>
                </div>
                <h1 className="text-[28px]">Trưa</h1>
                <div className="flex flex-row">
                  <div className="px-8 py-2 font-mono border border-gray-400 rounded-lg hover:border-black">
                    12:15
                  </div>
                </div>
                <h1 className="text-[28px]">Chiều</h1>
                <div className="flex flex-row">
                  <div className="px-8 py-2 font-mono border border-gray-400 rounded-lg hover:border-black">
                    15:20
                  </div>
                </div>
                <h1 className="text-[28px]">Tối</h1>
                <div className="flex flex-row">
                  <div className="px-8 py-2 font-mono border border-gray-400 rounded-lg hover:border-black">
                    20:15
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-[28px]">Thông tin đặt hẹn</h1>
                <div className="flex flex-row px-11 justify-start items-center">
                  <div className="flex flex-row justify-start items-start gap-28">
                    <div className="flex flex-col gap-7">
                      <h1 className="text-[20px] pt-[20px]">Tên người đặt</h1>
                      <h1 className="text-[20px]">Tên dịch vụ</h1>
                      <h1 className="text-[20px]">Khung giờ</h1>
                      <h1 className="text-[20px]">Địa điểm</h1>
                      <h1 className="text-[20px] pt-5">Đặt cho thú cưng</h1>
                      <h1 className="text-[20px] pt-7">Thanh toán</h1>
                    </div>
                    <div className="flex flex-col gap-6 w-[500px] items-left pt-[20px]">
                      <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                        <h1 className="text-pink-600 text-[16px] "> Wanpy</h1>
                      </div>
                      <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                        <h1 className="text-pink-600 text-[16px]">
                          Combo 10 bước cho chó & mèo
                        </h1>
                      </div>
                      <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                        <h1 className="text-pink-600 text-[16px]">
                          12:45 Trưa - Ngày 18/09/2024
                        </h1>
                      </div>
                      <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                        <h1 className="text-pink-600 text-[16px]">
                          123 Phan xích long, bình thạnh, tp hcmáda asdas sad
                          sdasdasd
                        </h1>
                      </div>

                      <div className="flex flex-row gap-4">
                        <Link to={`/po_profile/po_petdetail`}>
                          <div className="hover:scale-105 border border-gray-300 w-28 h-24 overflow-hidden rounded-lg">
                            <img
                              className="scale-x-[-1]"
                              alt="dogIcon"
                              src="https://cdn4.vectorstock.com/i/1000x1000/82/13/dog-outline-icon-graphics-vector-47088213.jpg"
                            />
                            <div id="petName2">Labubu</div>
                          </div>
                        </Link>
                        <Link to={`/po_profile/po_petdetail`}>
                          <div className="hover:scale-105 border border-gray-300 w-28 h-24 overflow-hidden rounded-lg">
                            <img
                              className="scale-x-[-1]"
                              alt="dogIcon"
                              src="https://cdn4.vectorstock.com/i/1000x1000/82/13/dog-outline-icon-graphics-vector-47088213.jpg"
                            />
                            <div
                              id="petName2"
                              className="text-ellipsis overflow-hidden"
                            >
                              Nguyễn Dưa Hấu
                            </div>
                          </div>
                        </Link>
                      </div>
                      <Radio.Group onChange={onChange} value={payment}>
                        <Radio value={1}>COD - Trả tiền mặt</Radio>
                        <Radio value={2}>Fluffy Pay</Radio>
                      </Radio.Group>

                      <button className="Btn">
                        Xác nhận đặt 
                        <svg className="svg" viewBox="0 0 512 512">
                          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
