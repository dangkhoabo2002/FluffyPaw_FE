import React from "react";
import { Carousel, Button, Popover } from "antd";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../component/petowner/navbar";
import Footer from "../component/footer";
import { Link } from "react-router-dom";

import "../css/landing.css";
import headImg from "../asset/wallhaven-4vgogl_1920x1080.png";
import carouselImg1 from "../asset/wallhaven-4l823l_3840x1080.png";
import dogIcon from "../asset/dogIcon.png";
import catIcon from "../asset/catIcon.png";
export default function landing() {
  const content = (
    <div className="w-[200px]">
      <p>
        Chấm đen mắt trái đỏ liệm ở mắt phải, màu hồng ngay đuôi, chấm trắng
        ngay bụng.
      </p>
    </div>
  );
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="headImg">
        <img alt="backGroundLanding" src={headImg} />
      </div>
      <div className="container">
        <div className="petMenu py-10">
          {/* Owner Pet */}
          <h1 className="titleSection">Thú cưng của bạn</h1>
          <div className="flex flex-row flex-wrap gap-10 py-10">
            <Link to={`/po_profile/po_petdetail`}>
              <div className="existPet gap-3">
                <img alt="dogIcon" src={dogIcon} />
                <span className="flex flex-col py-6">
                  <h2 className="w-full font-bold text-xl">Labubu</h2>
                  <Popover content={content} title="Đặc điểm:" trigger="hover">
                    <p className="w-[100px] truncate text-[#999999] text-[14px]">
                      Chấm đen mắt trái đỏ liệm ở mắt phải, màu hồng ngay đuôi,
                      chấm trắng ngay bụng.
                    </p>
                  </Popover>
                </span>
              </div>
            </Link>
            <Link to={`/po_profile/po_petdetail`}>
              <div className="existPet">
                <img alt="catIcon" src={catIcon} style={{ width: "120px" }} />
                <span className="flex flex-col py-6">
                  <h2 className="w-full font-bold text-xl">Bingchilling</h2>
                  <p className="w-[100px] truncate text-[#999999] text-[14px]">
                    Chấm đen mắt trái đỏ liệm ở mắt phải, màu hồng ngay đuôi,
                    chấm trắng ngay bụng.
                  </p>
                </span>
              </div>
            </Link>

            <div className="addPetSection">
              <PlusCircleIcon class="h-20 w-20 text-[#F2BDCB] hover:text-[#f7a6bb]" />
              <span className="flex flex-col py-6 pl-4">
                <h2 className="w-full font-bold text-xl">Thêm thú cưng</h2>
                <p className="w-full text-[#999999] font-mono text-[12px]">
                  Hiện sở hữu 2 thú cưng
                </p>
              </span>
            </div>
          </div>

          {/* Carousel */}

          <div className="carouselAds">
            <Carousel autoplay>
              <div>
                <img
                  alt="serviceImg"
                  src={carouselImg1}
                  className="contentStyle"
                />
              </div>
              <div>
                <img
                  alt="serviceImg"
                  src={carouselImg1}
                  className="contentStyle"
                />
              </div>
              <div>
                <img
                  alt="serviceImg"
                  src={carouselImg1}
                  className="contentStyle"
                />
              </div>
              <div>
                <img
                  alt="serviceImg"
                  src={carouselImg1}
                  className="contentStyle"
                />
              </div>
            </Carousel>
          </div>

          {/* Best Service Sale */}
          <h1 className="titleSection py-10">
            Dịch vụ được sử dụng nhiều nhất!
          </h1>
          <div className="bestDealService pb-4">
            <div className="serviceBox">
              <img
                alt="serviceImg"
                src="https://kinhtevadubao.vn/stores/news_dataimages/kinhtevadubaovn/082019/31/17/no-ro-trao-luu-dich-vu-cham-soc-thu-cung-14-.7388.jpg"
              />
              <div className="serviceContent flex flex-col">
                <h2 className="py-10 font-bold">Tắm gội cho cún cưng</h2>
                <h2>168.000 VNĐ</h2>
                <div id="serviceDescription">
                  <p className="truncate">
                    Đến với chúng tôi con của bạn sẽ được chăm sóc từ A-Z chỉ
                    với những bước cơ bản như làm sạch, tắm gội, ủ lông, làm
                    mượt lông.
                  </p>
                </div>

                <div className="contactService flex flex-row gap-4">
                  <Button type="primary" size="large" className="bookingButton">
                    Đặt ngay
                  </Button>
                  <Button size="large">Liên hệ</Button>
                </div>
              </div>
            </div>
            <div className="serviceBox">
              <img
                alt="serviceImg"
                src="https://kinhtevadubao.vn/stores/news_dataimages/kinhtevadubaovn/082019/31/17/no-ro-trao-luu-dich-vu-cham-soc-thu-cung-14-.7388.jpg"
              />
              <div className="serviceContent flex flex-col">
                <h2 className="py-10 font-bold">Tắm gội cho cún cưng</h2>
                <h2>168.000 VNĐ</h2>
                <div id="serviceDescription">
                  <p className="truncate">
                    Đến với chúng tôi con của bạn sẽ được chăm sóc từ A-Z chỉ
                    với những bước cơ bản như làm sạch, tắm gội, ủ lông, làm
                    mượt lông.
                  </p>
                </div>

                <div className="contactService flex flex-row gap-4">
                  <Button type="primary" size="large" className="bookingButton">
                    Đặt ngay
                  </Button>
                  <Button size="large">Liên hệ</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="bestDealService2">
            {/* Title 1 */}
            <div className="e-card playing">
              <div className="image" />

              <div className="wave" />
              <div className="wave" />
              <div className="wave" />

              <div className="infotop">
                <icon></icon>
                <br />
                <h1 className="text-[32px]">Tiêm chủng</h1>
                <br />
                <div className="name">
                  Tiêm Vaccine - Phòng chống bệnh - Điều trị
                </div>
              </div>
            </div>
            {/* Title 2 */}
            <div className="e-card playing">
              <div className="image" />

              <div className="wave" />
              <div className="wave" />
              <div className="wave" />

              <div className="infotop">
                <icon></icon>
                <br />
                <h1 className="text-[32px]">Chăm sóc</h1>
                <br />
                <div className="name">Tắm massage - Cắt tỉa lông</div>
              </div>
            </div>
            {/* Title 3 */}
            <div className="e-card playing">
              <div className="image" />

              <div className="wave" />
              <div className="wave" />
              <div className="wave" />

              <div className="infotop">
                <icon></icon>
                <br />
                <h1 className="text-[32px]">Huấn luyện</h1>
                <br />
                <div className="name">Giao tiếp - Đào tạo - Thể chất</div>
              </div>
            </div>
            {/* Title 4 */}
            <div className="e-card playing">
              <div className="image" />

              <div className="wave" />
              <div className="wave" />
              <div className="wave" />

              <div className="infotop">
                <icon></icon>
                <br />
                <h1 className="text-[32px]">Dịch vụ</h1>
                <br />
                <div className="name">Đi dạo - Trông giữ - Khách sạn</div>
              </div>
            </div>
          </div>

          {/* ......................... */}
          <h1 className="titleSection pt-20">Thú cưng bạn đang tìm kiếm?</h1>
          <div className="flex flex-row gap-10 py-10">
            <div className="dogSection">
              <img
                alt="dogIcon"
                src="https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/h3_dog.png"
              />
              <span className="flex flex-col py-6">
                <h2 className="w-full font-bold text-xl">Chó</h2>
                <p className="w-full text-[#999999]">1.502 mặt hàng</p>
              </span>
            </div>
            <div className="catSection">
              <img
                alt="catIcon"
                src="https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/cat.svg"
              />
              <span className="flex flex-col py-6">
                <h2 className="w-full font-bold text-xl">Mèo</h2>
                <p className="w-full text-[#999999]">270 mặt hàng</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
