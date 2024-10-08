import React, { useState } from "react";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Radio,
  Result,
  Form,
  Input,
  Steps,
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
        <div className="boxLogin w-[60%] h-auto bg-white rounded-3xl overflow-hidden relative pl-6  pt-6">
          <div className="px-16 w-full">
            <Steps
              size="small"
              current={current}
              items={[
                {
                  title: <p className="font-semibold">Tạo tài khoản</p>,
                },
                {
                  title: <p className="font-semibold">Tạo cửa hàng</p>,
                },
                {
                  title: <p className="font-semibold">Xác thực danh tính</p>,
                },
                {
                  title: <p className="font-semibold">Hoàn tất</p>,
                },
              ]}
            />
          </div>

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
                    <UploadImg limit={1} type={"card"} name={"smAddAvatar"}/>
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
                  label="Tên thương hiệu"
                  name="sm_store_name"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập tên thương hiệu!",
                    },
                  ]}
                >
                  <Input maxLength={40} showCount />
                </Form.Item>

                <Form.Item
                  label="Đường dây nóng"
                  name="sm_phone"
                  rules={[
                    {
                      required: true,
                      message: "Nhập số điện thoại Hotline.",
                    },
                  ]}
                >
                  <Input placeholder="Số điện thoại" maxLength={12} showCount />
                </Form.Item>
                <Form.Item
                  label="Email cửa hàng"
                  name="sm_email"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập email của bạn.",
                    },
                  ]}
                >
                  <Input
                    placeholder="Có thể dùng chung email cá nhân"
                    maxLength={50}
                    showCount
                  />
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
                  <Input
                    placeholder="Địa chỉ trong giấy phép kinh doanh"
                    maxLength={150}
                    showCount
                  />
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

                <div className="flex flex-row justify-start gap-3 w-full pl-[180px]">
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                  >
                    Tiếp tục
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {current === 2 && (
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
                  label="Hình thức định danh"
                  name="sm_type_identification"
                  rules={[
                    {
                      required: true,
                      message: "Hãy chọn hình thức định danh!",
                    },
                  ]}
                >
                  <Radio.Group>
                    <Radio value={"CMND"}>Chứng minh nhân dân (CMND)</Radio>
                    <Radio value={"CCCD"}>Căn cước công dân (CCCD)</Radio>
                  </Radio.Group>
                </Form.Item>

                {/* <Form.Item
                  label="Số CCCD / CMND"
                  name="sm_fullname"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập số cccd / cmnd!",
                    },
                  ]}
                >
                  <Input placeholder="CCCD / CMND" maxLength={12} showCount />
                </Form.Item> */}
                <Form.Item
                  label="Họ và tên"
                  name="sm_name"
                  rules={[
                    {
                      required: true,
                      message: "Hãy chọn hình thức định danh!",
                    },
                  ]}
                >
                  <Input placeholder="Họ và tên" />
                </Form.Item>

                <Form.Item
                  label="Hình chụp của thẻ"
                  name="sm_iden_pictures"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <div>
                    <UploadImg limit={2} type={"card"} />
                    <p className="text-gray-400">
                      * Vui lòng chụp rõ mặt trước và sau của thẻ cccd/cmnd.
                    </p>
                  </div>
                </Form.Item>

                <Form.Item
                  label="Hình chụp đang cầm thẻ"
                  name="sm_iden_pictures"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <div>
                    <UploadImg limit={2} type={"card"} />
                    <p className="text-gray-400">
                      * Vui lòng chụp rõ khuôn mặt bạn cùng với thẻ cccd/cmnd
                      đang cầm trên tay.
                    </p>
                  </div>
                </Form.Item>

                <div className="flex flex-row justify-start gap-3 w-full pl-[180px]">
                  <Button iconPosition="end" onClick={prev}>
                    Quay lại
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                  >
                    Tiếp tục
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {current === 3 && (
            <div className=" pb-8 px-36 flex flex-col justify-center items-center">
              <Result
                status="success"
                title="Thiết lập tài khoản cửa hàng thành công!"
                subTitle="Chúng tôi rất vui khi có sự hiện diện của bạn, vui lòng đăng nhập lại để cùng đồng hành với Fluffy Paw nhé."
              />
              <Link to={`/login`}>
                <Button type="primary" icon={<UserSwitchOutlined />}>
                  Đăng nhập
                </Button>
              </Link>
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
