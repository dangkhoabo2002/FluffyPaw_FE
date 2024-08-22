import React, { useState } from "react";
import {
  Carousel,
  Button,
  Popover,
  Modal,
  Radio,
  Input,
  Form,
  Select,
} from "antd";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../component/petowner/navbar";
import Footer from "../component/footer";
import { Link } from "react-router-dom";

import "../css/landing.css";
import headImg from "../asset/wallhaven-4vgogl_1920x1080.png";
import carouselImg1 from "../asset/wallhaven-4l823l_3840x1080.png";
import dogIcon from "../asset/dogIcon.png";
import catIcon from "../asset/catIcon.png";
import UploadImg from "../screen/tab/Component_upload_image";

const { TextArea } = Input;

export default function Landing() {
  // Ask add pet after login
  const [open, setOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAddPet = () => {
    setOpen(false);
    setIsModalOpen(true);
  };
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const showModalForm = () => {
    setIsModalOpen(true);
  };
  const handleOkForm = () => {
    setIsModalOpen(false);
  };
  const handleCancelForm = () => {
    setIsModalOpen(false);
  };

  const [value, setValue] = useState(1);
  const [valueSex, setvalueSex] = useState(1);

  const onChange = (e: RadioChangeEventEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangeSex = (e: RadioChangeEventEvent) => {
    console.log("radio checked", e.target.value);
    setvalueSex(e.target.value);
  };

  const [form] = Form.useForm();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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

            <Link to={`/po_profile`}>
              <div className="addPetSection">
                <PlusCircleIcon class="h-20 w-20 text-[#F2BDCB] hover:text-[#f7a6bb]" />
                <span className="flex flex-col py-6 pl-4">
                  <h2 className="w-full font-bold text-xl">Thêm thú cưng</h2>
                  <p className="w-full text-[#999999] font-mono text-[12px]">
                    Hiện sở hữu 2 thú cưng
                  </p>
                </span>
              </div>
            </Link>
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

      {/* Modal Add Pet */}
      <Modal
        open={open}
        title="Bạn có muốn lưu trữ hồ sơ thú cưng?"
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
        width={500}
        footer={(_, {}) => (
          <>
            <Button onClick={handleCancelForm}>Hủy bỏ</Button>
            <Button type="primary" onClick={handleOkForm}>
              Thêm thú cưng
            </Button>
          </>
        )}
      >
        <Form
          layout={"horizontal"}
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Hình ảnh thú cưng">
            <UploadImg />
          </Form.Item>
          <Form.Item label="Giống loài">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={"dog"}>Chó</Radio>
              <Radio value={"cat"}>Mèo</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Tên của thú cưng">
            <Input placeholder="Nhập vào đây" />
          </Form.Item>
          <Form.Item label="Giới tính">
            <Radio.Group onChange={onChangeSex} value={valueSex}>
              <Radio value={"male"}>Đực</Radio>
              <Radio value={"felmale"}>Cái</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Giống">
            {value === "cat" ? (
              <>
                <Select
                  defaultValue="Mèo tam thể"
                  onChange={handleChange}
                  options={[
                    { value: "mx", label: "Mèo Xiêm" },
                    { value: "maln", label: "Mèo Anh lông ngắn" },
                    { value: "mald", label: "Mèo Anh lông dài" },
                    { value: "mac", label: "Mèo Ai Cập" },
                    { value: "mbt", label: "Mèo Ba Tư" },
                    { value: "mbali", label: "Mèo Bali" },
                    { value: "mbengal", label: "Mèo Bengal" },
                    { value: "msf", label: "Mèo Scottish Fold" },
                    { value: "mmk", label: "Mèo Munchkin" },
                    { value: "mm", label: "Mèo mướp" },
                    { value: "mr", label: "Mèo Ragdoll" },
                    { value: "mmc", label: "Mèo Maine Coon" },
                    { value: "ma", label: "Mèo Angora" },
                    { value: "ml", label: "Mèo Laperm" },
                    { value: "ms", label: "Mèo Somali" },
                    { value: "mt", label: "Mèo Toyger" },
                    { value: "mtv", label: "Mèo Turkish Van" },
                    { value: "mmd", label: "Mèo Miến Điện" },
                    { value: "me", label: "Mèo Exotic" },
                  ]}
                />
              </>
            ) : (
              <>
                <Select
                  defaultValue="Chó ta"
                  onChange={handleChange}
                  options={[
                    { value: "cc", label: "Chó Chihuahua" },
                    { value: "cbc", label: "Chó Bắc Kinh" },
                    { value: "cbcln", label: "Chó Bắc Kinh lai Nhật" },
                    {
                      value: "cxx",
                      label: "Chó Dachshund (Lạp Xưởng/Xúc Xích)",
                    },
                    { value: "cpq", label: "Chó Phú Quốc" },
                    { value: "cpoodle", label: "Chó Poodle" },
                    { value: "cpug", label: "Chó Pug" },
                    { value: "calaska", label: "Chó Alaska" },
                    { value: "chusky", label: "Chó Husky" },
                    { value: "cs", label: "Chó Samoyed" },
                    { value: "cp", label: "Chó Pomeranian (Phốc sóc)" },
                    { value: "cb", label: "Chó Beagle" },
                    { value: "cshiba", label: "Chó Shiba Inu" },
                    { value: "cgr", label: "Chó Golden Retriever" },
                    { value: "cbegie", label: "Chó Becgie" },
                    { value: "ccorgi", label: "Chó Corgi" },
                    { value: "cmc", label: "Chó Mông Cộc" },
                  ]}
                />
              </>
            )}
          </Form.Item>
          <Form.Item label="Cân nặng">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Tuổi">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Ngày sinh">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Mã số chip">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Chế độ ăn uống">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Hành vi đặc biệt">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Tính cách">
            <Input placeholder="Nhập tại đây" />
          </Form.Item>
          <Form.Item label="Ghi chú">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
      <Footer />
    </>
  );
}
