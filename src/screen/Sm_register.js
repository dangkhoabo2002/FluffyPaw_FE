import React, { useState } from "react";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  Segmented,
  Modal,
  notification,
  Divider,
} from "antd";
import {
  ReloadOutlined,
  ArrowRightOutlined,
  UserSwitchOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import UploadImg from "./tab/Component_upload_image";
import { Link } from "react-router-dom";

const { RangePicker } = DatePicker;

export default function Sm_register() {
  const [current, setCurrent] = useState(0);
  const [register1, setRegister1] = useState();
  const [register2, setRegister2] = useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  // NOTICE
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    switch (type) {
      case "invalid_password":
        api.warning({
          message: "Số điện thoại không hợp lệ!",
          description: "Vui lòng nhập lại số điện thoại của bạn",
          placement: "bottomRight",
        });
        break;

      case "empty_field":
        {
          api.warning({
            message: "Thông tin không được bỏ trống!",
            description: "Vui lòng điền đầy đủ thông tin.",
            placement: "bottomRight",
          });
        }
        break;

      default:
        break;
    }
  };
  // PHONE CONFIRMATION

  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  // Thông tin của cửa hàng
  const onFinish1 = (values) => {
    console.log("Success:", register1);
    setRegister1(values);
    next();
  };
  const onFinish2 = (values) => {
    console.log("Success:", register2);
    setRegister2(values);
    next();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // OTP VERIFY
  const [sm_phone, set_sm_phone] = useState();
  const [otpSent, setOtpSent] = useState(false);

  const handleChangePhone = (e) => {
    set_sm_phone(e.target.value);
    console.log(sm_phone);
  };

  const handleSendOtp = () => {
    if (sm_phone === null || sm_phone === "" || sm_phone === undefined) {
      openNotificationWithIcon("empty_field");
    } else {
      const phonePattern = /^[0-9]{10,15}$/;
      if (sm_phone && !phonePattern.test(sm_phone)) {
        openNotificationWithIcon("invalid_password");
      } else {
        if (otpSent === false) setOtpSent(true);
        else setOtpSent(false);
      }
    }
  };
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const sharedProps = {
    onChange,
  };
  return (
    <div>
      {contextHolder}

      <div id="recapcha"></div>
      <div className="flex justify-center pt-12 w-screen">
        <div className="boxLogin w-[60%] h-auto bg-white rounded-3xl overflow-hidden relative pl-6 px-16 pt-6">
          <Steps
            current={current}
            items={[
              {
                title: "Thiết lập tài khoản",
                icon: <UserOutlined />,
              },
              {
                title: "Thông tin cửa hàng chính",
                icon: <SolutionOutlined />,
              },
              {
                title: "Pay",
                icon: <LoadingOutlined />,
              },
              {
                title: "Done",
                icon: <SmileOutlined />,
              },
            ]}
          />
          <Divider />

          {current === 0 && (
            <>
              <div className="flex flex-col gap-6 pb-8 px-36">
                <div className="flex flex-row gap-6 w-full px-16">
                  <p className="w-[300px]">Tên đăng nhập</p>
                  <Input />
                </div>
                <div className="flex flex-row gap-6 w-full px-16">
                  <p className="w-[300px]">Mật khẩu</p>
                  <Input.Password
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                  />
                </div>
                <div className="flex flex-row gap-6 w-full px-16">
                  <p className="w-[300px]">Xác nhận mật khẩu</p>
                  <Input.Password
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                  />
                </div>
                <div className="flex flex-row gap-6 w-full px-16">
                  <p className="w-[300px]">Email cá nhân</p>
                  <Input />
                </div>

                <div className="flex flex-row gap-6 w-full px-16">
                  <p className="w-[300px]">Hình ảnh đại diện</p>
                  <div className="ml-[-140px]">
                    <UploadImg limit={1} type={"card"} />
                  </div>
                </div>

                <div className="flex flex-row justify-end gap-6 w-full px-16">
                  <Link to={`/login`}>
                    <Button icon={<UserSwitchOutlined />}>Đăng nhập</Button>
                  </Link>
                  <Button
                    type="primary"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    onClick={() => next()}
                  >
                    Tiếp tục
                  </Button>
                </div>
              </div>
            </>
          )}
          {current === 1 && (
            <div className="gap-6 pb-8 px-36">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish1}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Tên cửa hàng"
                  name="sm_store_name"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập tên cửa hàng!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Đường dây nóng"
                  name="sm_phone"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input.Password placeholder="Số điện thoại" />
                </Form.Item>
                <Form.Item
                  label="Email cửa hàng"
                  name="sm_email"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input placeholder="Có thể dùng chung email cá nhân" />
                </Form.Item>

                <Form.Item
                  label="Địa chỉ cửa hàng chính"
                  name="sm_store_address"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập địa chỉ của cửa hàng!",
                    },
                  ]}
                >
                  <Input placeholder="Địa chỉ" />
                </Form.Item>

                <Form.Item
                  label="Mã số thuế"
                  name="sm_store_taxcode"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập mã số thuế!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Logo thương hiệu"
                  name="brand_logo"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <UploadImg limit={1} type={"card"} />
                </Form.Item>

                <div className="flex flex-row justify-start gap-8 w-full pl-[156px] ">
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<ArrowRightOutlined />}
                      iconPosition="end"
                    >
                      Tiếp tục
                    </Button>
                  </Form.Item>
                  <Button
                    type="primary"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    onClick={next}
                  >
                    Bỏ qua
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {current === 2 && (
            <div className="flex flex-col gap-6 pb-8 px-36">
              <div className="flex flex-row gap-6 w-full px-16">
                <p className="w-[300px]">Tên đăng nhập</p>
                <Input />
              </div>
              <div className="flex flex-row gap-6 w-full px-16">
                <p className="w-[300px]">Mật khẩu</p>
                <Input.Password
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </div>
              <div className="flex flex-row gap-6 w-full px-16">
                <p className="w-[300px]">Xác nhận mật khẩu</p>
                <Input.Password
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </div>
              <div className="flex flex-row gap-6 w-full px-16">
                <p className="w-[300px]">Email cá nhân</p>
                <Input />
              </div>

              <div className="flex flex-row gap-6 w-full px-16">
                <p className="w-[300px]">Hình ảnh đại diện</p>
                <div className="ml-[-140px]">
                  <UploadImg limit={1} type={"circle"} />
                </div>
              </div>

              <div className="flex flex-row justify-end gap-6 w-full px-16">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  onClick={() => next()}
                >
                  Tiếp tục
                </Button>
              </div>
              <div className="gap-6 pb-8 px-36">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  onClick={() => prev()}
                >
                  Quay lại
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL VERIFY OTP */}
      <Modal open={isModalOpen} width={500} height={800} footer={[<></>]}>
        <div className="flex flex-col gap-6 w-full px-20 items-center justify-center">
          <h1 className="text-[30px]">Đăng ký cửa hàng</h1>
          <p className="w-full text-center">
            Bạn hãy điền số điện thoại của bạn vào đây, chúng tôi sẽ gửi mã xác
            thực sau ít phút
          </p>
          <Input
            addonBefore="+84"
            onChange={handleChangePhone}
            placeholder="Số điện thoại"
          />
          <Button type="primary" className="w-full" onClick={handleSendOtp}>
            Xác nhận số điện thoại
          </Button>

          {otpSent === true && (
            <div className="rounded-md flex flex-col gap-4 py-5 px-6 border border-gray-300">
              <p>Nhập mã OTP tại đây</p>
              <Input.OTP {...sharedProps} />
              <div className="flex flex-row justify-between">
                <Button icon={<ReloadOutlined />}>Gửi lại mã</Button>
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  onClick={handleCancel}
                >
                  Xác nhận
                </Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
