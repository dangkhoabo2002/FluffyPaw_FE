import React, { useState } from "react";

import "../css/login&register.css";

import {
  Input,
  Checkbox,
  Divider,
  Button,
  Steps,
  Typography,
  DatePicker,
  Radio,
} from "antd";
import {
  UserOutlined,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { MapPinIcon } from "@heroicons/react/24/outline";

const { Title } = Typography;

export default function Login() {
  // ------ Step 1
  const [submitGmail, setSubmitGmail] = useState(false);
  const [step, setStep] = useState(0);

  const onChangeRemember = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [isAnimating, setIsAnimating] = useState(false);
  const handleRegisterClick = () => {
    if (isAnimating === false) {
      setIsAnimating(true);
    } else setIsAnimating(false);
  };

  const onChangeOTP = (text) => {
    console.log("onChange:", text);
  };
  const sharedProps = {
    onChangeOTP,
  };
  //------------------

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // ---- DOB
  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  // ---- Sex of User
  const [sex, setSex] = useState(1);
  const onChangeSex = (e) => {
    console.log("radio checked", e.target.value);
    setSex(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="boxLogin bg-white rounded-3xl overflow-hidden relative pl-6">
          <div
            className={
              isAnimating ? "animation absolute" : "non-animation absolute"
            }
          >
            <img
              alt="Login"
              className="object-cover rounded-3xl"
              id="movementImg"
              src="https://i.pinimg.com/564x/5a/c3/6c/5ac36ca9f1faf1211c0ec9d743e835e3.jpg"
            />
          </div>
          <div className="boxGrid pl-20">
            {/* ------------------- LOGIN ----------------------- */}

            <div
              className={
                isAnimating
                  ? "contentLogin flex flex-col py-16 "
                  : "contentLogin flex flex-col py-16 fadeIn"
              }
            >
              <h1 className="text-4xl">Chào mừng trở lại</h1>
              <p>Hãy điền thông tin đăng nhập nhé!</p>
              <div className="content flex flex-col gap-6">
                <div className="username">
                  <Input
                    size="large"
                    placeholder=" Nhập tên đăng nhập của bạn"
                    prefix={<UserOutlined />}
                  />
                </div>
                <div className="password">
                  <Input
                    size="large"
                    placeholder=" Nhập mật khẩu của bạn"
                    prefix={<KeyOutlined />}
                  />
                </div>
                <Checkbox className="items-start" onChange={onChangeRemember}>
                  Ghi nhớ tài khoản.
                </Checkbox>
                <div className="flex flex-col text-left gap-6">
                  <Button type="primary">Đăng nhập</Button>
                </div>
                <div className="divider">
                  <Divider
                    style={{ borderColor: "#7cb305", fontFamily: "Itim" }}
                    plain
                  >
                    Fluffy Paw
                  </Divider>
                </div>
                <Button className="register" onClick={handleRegisterClick}>
                  Đăng ký
                </Button>
              </div>
            </div>

            {/* ------------------- REGISTER ----------------------- */}
            <div
              className={
                isAnimating
                  ? "contentRegister flex flex-col py-10 fadeIn"
                  : "contentRegister flex flex-col py-10 opacity-0"
              }
            >
              <h1 id="h1_register">Chào mừng bạn đến với chúng tôi!</h1>
              <p>Thông tin của bạn sẽ giúp chúng tôi hiểu rõ bạn hơn.</p>

              <div className="content">
                <div className="pb-10">
                  <Steps
                    size="small"
                    current={step}
                    items={[
                      {
                        title: "",
                      },
                      {
                        title: "",
                      },
                      {
                        title: "",
                      },
                      {
                        title: "Hoàn tất",
                      },
                    ]}
                  />
                </div>
                {/* Step 1 */}
                <div
                  className={
                    step === 1 || step === 2 || step === 3 ? "hidden" : ""
                  }
                >
                  <div className="line1">
                    <Title level={5} className="pb-1">
                      Số điện thoại của bạn
                    </Title>
                    <div className="pb-2 flex flex-row gap-5">
                      <Input addonBefore="+84" style={{ width: "100%" }} />
                      <Button
                        type="primary"
                        onClick={() => setSubmitGmail(true)}
                      >
                        Gửi mã xác nhận
                      </Button>
                    </div>
                    {submitGmail === true ? (
                      <>
                        <Title level={5} className="pb-1">
                          Nhập mã xác thực được gửi vào số điện thoại
                        </Title>
                        <Input.OTP
                          formatter={(str) => str.toUpperCase()}
                          {...sharedProps}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="flex flex-col text-left gap-6">
                    <Button type="primary" onClick={() => setStep(1)}>
                      Tiếp tục
                    </Button>
                  </div>
                </div>
                {/* Step 2 */}
                <div
                  className={
                    step === 0 || step === 2 || step === 3 ? "hidden" : ""
                  }
                >
                  <div className="line1">
                    <div className="flex flex-row justify-between items-center">
                      <Title level={5} className="pb-1">
                        Hoàn thành thông tin cơ bản nhé!
                      </Title>
                      <Button
                        className="w-10 mt-[-13px]"
                        type="link"
                        onClick={() => setStep(step - 1)}
                      >
                        <ArrowLeftOutlined /> Trở lại
                      </Button>
                    </div>

                    <Input
                      size="large"
                      placeholder="Tên đăng nhập"
                      prefix={<UserOutlined />}
                    />
                    <Input
                      size="large"
                      placeholder="Mật khẩu"
                      type="password"
                      prefix={<KeyOutlined />}
                    />
                    <Input
                      size="large"
                      placeholder="Xác nhận mật khẩu"
                      type="password"
                      prefix={<KeyOutlined />}
                    />
                  </div>
                  <div className="flex flex-col text-left gap-6">
                    <Button
                      className={
                        step === 1 || step === 2 || step === 3 ? "hidden" : ""
                      }
                      type="primary"
                      onClick={() => setStep(1)}
                    >
                      Tiếp tục
                    </Button>

                    <Button
                      className={
                        step === 0 || step === 2 || step === 3 ? "hidden" : ""
                      }
                      type="primary"
                      onClick={() => setStep(2)}
                    >
                      Tiếp tục
                    </Button>
                  </div>
                </div>
                {/* Step 3 */}
                <div
                  className={
                    step === 0 || step === 1 || step === 3 ? "hidden" : ""
                  }
                >
                  <div className="line1">
                    <div className="flex flex-row justify-between items-center">
                      <Title level={5} className="pb-1">
                        Thông tin có thể bỏ qua.
                      </Title>
                      <Button
                        className="w-10 mt-[-13px]"
                        type="link"
                        onClick={() => setStep(step - 1)}
                      >
                        <ArrowLeftOutlined /> Trở lại
                      </Button>
                    </div>

                    <Input
                      size="medium"
                      placeholder="Họ và tên"
                      prefix={<UserOutlined />}
                    />
                    <Input
                      size="large"
                      placeholder="Email"
                      prefix={<MailOutlined />}
                    />
                    <div className="flex flex-row justify-between items-center">
                      <DatePicker
                        onChange={onChangeDate}
                        placeholder="Ngày sinh"
                      />
                      <Radio.Group onChange={onChangeSex} value={sex}>
                        <Radio value={1}>Nam</Radio>
                        <Radio value={2}>Nữ</Radio>
                        <Radio value={3}>Khác</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <div className="flex flex-col text-left gap-6">
                    <Button
                      className={
                        step === 1 || step === 2 || step === 0 ? "hidden" : ""
                      }
                      type="primary"
                      onClick={() => setStep(1)}
                    >
                      Tiếp tục
                    </Button>
                    <div>
                      <Button
                        className={
                          step === 0 || step === 2 || step === 3 ? "hidden" : ""
                        }
                        type="primary"
                        onClick={() => setStep(2)}
                      >
                        Tiếp tục
                      </Button>
                    </div>

                    <Button
                      className={
                        step === 0 || step === 1 || step === 3 ? "hidden" : ""
                      }
                      type="primary"
                      onClick={() => setStep(3)}
                    >
                      Tiếp tục
                    </Button>
                  </div>
                </div>
                {/* Step 4 */}
                <div
                  className={
                    step === 0 || step === 1 || step === 2 ? "hidden" : ""
                  }
                >
                  <div className="line1">
                    <div className="flex flex-row justify-between items-center">
                      <Title level={5} className="pb-1">
                        Thông tin có thể bỏ qua.
                      </Title>
                      <Button
                        className="w-10 mt-[-13px]"
                        type="link"
                        onClick={() => setStep(step - 1)}
                      >
                        <ArrowLeftOutlined /> Trở lại
                      </Button>
                    </div>

                    <Input
                      size="medium"
                      placeholder="Địa chỉ nơi ở / Nơi thú cưng ở"
                      prefix={<MapPinIcon class="h-5 w-4" />}
                    />
                    <Input
                      size="large"
                      placeholder="Email"
                      prefix={<MailOutlined />}
                    />
                    <div className="flex flex-row justify-between items-center">
                      <DatePicker
                        onChange={onChangeDate}
                        placeholder="Ngày sinh"
                      />
                      <Radio.Group onChange={onChangeSex} value={sex}>
                        <Radio value={1}>Nam</Radio>
                        <Radio value={2}>Nữ</Radio>
                        <Radio value={3}>Khác</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <div className="flex flex-col text-left gap-6">
                    <div>
                      <Button
                        className={
                          step === 0 || step === 2 || step === 3 ? "hidden" : ""
                        }
                        type="primary"
                        onClick={() => setStep(2)}
                      >
                        <ArrowLeftOutlined /> Trở lại
                      </Button>
                    </div>

                    <Button
                      className={
                        step === 0 || step === 1 || step === 2 ? "hidden" : ""
                      }
                      type="primary"
                      onClick={() => setStep(3)}
                    >
                      Hoàn tất
                    </Button>
                  </div>
                </div>

                <div className="divider">
                  <Divider
                    style={{ borderColor: "#7cb305", fontFamily: "Itim" }}
                    plain
                  >
                    Fluffy Paw
                  </Divider>
                </div>
                <div className="">
                  <Button block onClick={handleRegisterClick}>
                    Đăng nhập
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
