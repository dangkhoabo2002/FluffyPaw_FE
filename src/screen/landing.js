import React from "react";
import { Carousel, Button } from "antd";

import Navbar from "../component/petowner/navbar";
import "../css/landing.css";
import headImg from "../asset/cat_wall_peeking_150278_1920x1080.jpg";
import carouselImg1 from "../asset/wallhaven-4l823l_3840x1080.png";
export default function landing() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="headImg">
        <img alt="backGroundLanding" src={headImg} />
      </div>
      <div className="container">
        <div className="petMenu">
          <h1 className="titleSection">Thú cưng bạn đang tìm kiếm?</h1>
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
          <h1 className="titleSection">Dịch vụ được sử dụng nhiều nhất!</h1>
          <div className="bestDealService">
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
            <div className="serviceBox"></div>
          </div>
          <div className="bestDealService2">
            <div className="serviceBox"></div>
            <div className="serviceBox"></div>
            <div className="serviceBox"></div>
            <div className="serviceBox"></div>
          </div>
        </div>
      </div>
    </>
  );
}
