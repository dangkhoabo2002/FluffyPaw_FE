import React, { useState, useEffect } from "react";
import { Carousel, Button, Popover, Modal } from "antd";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../component/petowner/navbar";
import Footer from "../component/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

import "../css/landing.css";
import headImg from "../asset/wallhaven-4vgogl_1920x1080.png";
import dogIcon from "../asset/dogIcon.png";
import catIcon from "../asset/catIcon.png";
import FormModal from "../screen/tab/Po_addPet_modal";

export default function Landing() {
  const accountRole = localStorage.getItem("account_role");
  // Ask add pet after login
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancelAddPet = () => {
    setIsModalOpen(false);
  };

  // Tooltips
  const content = (
    <div className="w-[200px]">
      <p>
        Chấm đen mắt trái đỏ liệm ở mắt phải, màu hồng ngay đuôi, chấm trắng
        ngay bụng.
      </p>
    </div>
  );

  // GET PET LIST
  const [petList, setPetList] = useState([]);
  const [loadingApi, setLoadingApi] = useState();
  const handleGetPetList = async () => {
    try {
      const response = await axios.get(
        "https://fluffypaw.azurewebsites.net/api/Pet/GetAllPets",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );

      if (response.status === 200) {
        const petData = response.data.data;
        setPetList(petData);

        setLoadingApi(false);
      }
    } catch (err) {
      console.log(err.response.request.status);
      if (err.response.request.status === 404) setOpen(true);
      setLoadingApi(true);
      console.log(err);
    }
  };
  const openAddPet = () => {
    setOpen(false);
    setIsModalOpen(true);
  };
  useEffect(() => {
    handleGetPetList();
  }, []);

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
          {accountRole === "PetOwner" && (
            <>
              {" "}
              <h1 className="titleSection">Thú cưng của bạn</h1>
              <div className="flex flex-row flex-wrap gap-8 py-10">
                {petList &&
                  petList?.map((pet) => (
                    <Link
                      to={`/po_profile/po_petdetail/${pet.id}`}
                      key={pet.id}
                    >
                      <div className="existPet gap-3">
                        <img
                          alt="dogIcon"
                          src={pet.petCategoryId === 1 ? dogIcon : catIcon}
                        />
                        <span className="flex flex-col py-6">
                          <h2 className="w-full font-bold text-xl">
                            {pet?.name}
                          </h2>
                          <Popover
                            content={content}
                            title="Đặc điểm:"
                            trigger="hover"
                          >
                            <p className="w-[100px] truncate text-[#999999] text-[14px]">
                              {pet.behaviorCategory}
                            </p>
                          </Popover>
                        </span>
                      </div>
                    </Link>
                  ))}

                {petList && petList?.length < 5 ? (
                  <button onClick={openAddPet}>
                    <div className="addPetSection">
                      <PlusCircleIcon class="h-20 w-20 text-[#F2BDCB] hover:text-[#f7a6bb]" />
                      <span className="flex flex-col py-6 pl-4">
                        <h2 className="w-full font-bold text-xl">
                          Thêm thú cưng
                        </h2>
                        <p className="w-full text-[#999999]  text-[12px]">
                          Hiện sở hữu {petList?.length} thú cưng
                        </p>
                      </span>
                    </div>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}

          {/* Carousel */}

          <div className="carouselAds">
            <Carousel autoplay className="-z-10">
              <div>
                <img
                  alt="serviceImg"
                  src="https://plus.unsplash.com/premium_photo-1661674514856-17f29bd480b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="contentStyle"
                />
              </div>
              <div>
                <img
                  alt="serviceImg"
                  src="https://media.istockphoto.com/id/1370365587/vi/anh/m%C3%A8o-b%C3%A9o-ph%C3%AC-ngh%E1%BB%8Bch-ng%E1%BB%A3m-m%E1%BA%AFt-to-nh%C3%ACn-v%C3%A0o-m%E1%BB%A5c-ti%C3%AAu.jpg?s=2048x2048&w=is&k=20&c=mnFu9eFesvNfTMTkbhzjJIxF0m0DdJr2iMzCYbrELxM="
                  className="contentStyle"
                />
              </div>
              <div>
                <img
                  alt="serviceImg"
                  src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0fGVufDB8fDB8fHww"
                  className="contentStyle"
                />
              </div>
              <div>
                <img
                  alt="serviceImg"
                  src="https://hd.wallpaperswide.com/thumbs/funny_lazy_cat-t2.jpg"
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
              <div className="serviceContent flex flex-col h-full">
                <h2 className="py-10 font-bold text-[1.4rem] truncate w-[240px]">
                  Tắm gội cho cún cưng ad
                </h2>
                <p className="font-[itim] text-[1.2rem]">168.000 VNĐ</p>
                <div id="serviceDescription">
                  <p className="truncate">
                    Đến với chúng tôi con của bạn sẽ được chăm sóc từ A-Z chỉ
                    với những bước cơ bản như làm sạch, tắm gội, ủ lông, làm
                    mượt lông.
                  </p>
                </div>

                <div className="contactService flex flex-row gap-4 pt-4">
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
            <Link to={`/services`}>
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
            </Link>
            <Link to={`/services`}>
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
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Add Pet */}
      <Modal
        open={open}
        title="Bạn có muốn lưu trữ hồ sơ thú cưng?"
        onCancel={handleCancel}
        footer={(_, {}) => (
          <>
            <Button type="primary" onClick={openAddPet}>
              Thêm thú cưng
            </Button>
            <Button onClick={handleCancel}>Chưa phải lúc</Button>
          </>
        )}
      >
        <p>
          Hiện bạn chưa có thông tin của thú cưng, bạn có muốn thêm vào hồ sơ
          không?
        </p>
      </Modal>

      {/* Add pet Modal */}
      <Modal
        title="Thêm thú cưng"
        open={isModalOpen}
        onCancel={handleCancelAddPet}
        width={1200}
        footer={(_, {}) => (
          <>
            <div className="pr-40">
              <Button onClick={handleCancelAddPet}>Hủy bỏ</Button>
            </div>
          </>
        )}
      >
        <FormModal />
      </Modal>
      <Footer />
    </>
  );
}
