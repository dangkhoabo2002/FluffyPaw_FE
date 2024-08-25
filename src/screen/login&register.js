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
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const { Title } = Typography;

export default function Login() {
  const navigate = useNavigate();

  // ------ Step 1
  const [submitGmail, setSubmitGmail] = useState(false);
  const [step, setStep] = useState(0);

  const onChangeRemember = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeToP = (e) => {
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

  // ---------- API Login -----------

  const [login, setLogin] = useState({
    user_username: "",
    user_password: "",
  });

  const onChangeLogin = (prop) => (event) => {
    setLogin({ ...login, [prop]: event.target.value });
    // console.log("us", login.user_username);
  };

  const handleLogin = (us, pw) => {
    axios
      .post("https://fluffypaw.azurewebsites.net/api/Authentication/Login", {
        username: us,
        password: pw,
      })
      .then((response) => {
        if (response.status === 200) {
          const dataLog = response.data;
          console.log(dataLog.data.token);
          localStorage.setItem("access_token", dataLog.data.token);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // ---------- API Register -----------

  const [register, setRegister] = useState({
    user_username: "",
    user_password: "",
    user_confirm_password: "",
    user_name: "",
    user_location: "",
    user_email: "",
    user_gender: "",
  });

  const onChangeRegister = (prop) => (event) => {
    setRegister({ ...register, [prop]: event.target.value });
  };

  const handleRegister = (registerData) => {
    axios
      .post(
        "https://fluffypaw.azurewebsites.net/api/Authentication/RegisterPO",
        {
          phone: "string",
          userName: register.user_username,
          password: register.user_username,
          email: register.user_email,
          fullName: register.user_name,
          address: register.user_location,
          dob: "2024-08-25",
          gender: register.user_gender,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const dataLog = response.data;
          console.log(dataLog.data.token);
          localStorage.setItem("access_token", dataLog.data.token);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log("usasdasd", registerData.user_email);
  };
  return (
    <>
      <div className="flex justify-center pt-12">
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
                    value={login.user_username}
                    onChange={onChangeLogin("user_username")}
                    prefix={<UserOutlined />}
                  />
                </div>
                <div className="password">
                  <Input
                    size="large"
                    placeholder=" Nhập mật khẩu của bạn"
                    type="password"
                    value={login.user_password}
                    onChange={onChangeLogin("user_password")}
                    prefix={<KeyOutlined />}
                  />
                </div>
                <Checkbox className="items-start" onChange={onChangeRemember}>
                  Ghi nhớ tài khoản.
                </Checkbox>
                <div className="flex flex-col text-left gap-6">
                  <Button
                    type="primary"
                    onClick={() =>
                      handleLogin(login.user_username, login.user_password)
                    }
                  >
                    Đăng nhập
                  </Button>
                </div>
                <div className="divider">
                  <Link to={`/`} className="hover:text-pink-400">
                    Quên mật khẩu.
                  </Link>
                  <Divider
                    style={{ borderColor: "#7cb305", fontFamily: "Itim" }}
                    plain
                  >
                    <Link to={`/`} className="hover:text-pink-400">
                      Fluffy Paw
                    </Link>{" "}
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
                        Thiết lập tài khoản.
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
                      value={register.user_username}
                      onChange={onChangeRegister("user_username")}
                      prefix={<UserOutlined />}
                    />
                    <Input
                      size="large"
                      placeholder="Mật khẩu"
                      type="password"
                      value={register.user_password}
                      onChange={onChangeRegister("user_password")}
                      prefix={<KeyOutlined />}
                    />
                    <Input
                      size="large"
                      placeholder="Xác nhận mật khẩu"
                      type="password"
                      value={register.user_confirm_password}
                      onChange={onChangeRegister("user_confirm_password")}
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
                        Thông tin của bạn.
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
                      placeholder="Họ và tên"
                      value={register.user_name}
                      onChange={onChangeRegister("user_name")}
                      prefix={<UserOutlined />}
                    />
                    <Input
                      size="large"
                      placeholder="Địa chỉ nơi ở / Nơi thú cưng ở"
                      value={register.user_location}
                      onChange={onChangeRegister("user_location")}
                      prefix={<MapPinIcon class="h-5 w-4" />}
                    />
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
                      size="large"
                      placeholder="Email"
                      value={register.user_email}
                      onChange={onChangeRegister("user_email")}
                      prefix={<MailOutlined />}
                    />
                    <div className="flex flex-row justify-between items-center">
                      <DatePicker
                        onChange={onChangeDate}
                        placeholder="Ngày sinh"
                      />
                      <Radio.Group
                        value={register.user_gender}
                        onChange={onChangeRegister("user_gender")}
                      >
                        <Radio value={"Male"}>Nam</Radio>
                        <Radio value={"Female"}>Nữ</Radio>
                        <Radio value={"Others"}>Khác</Radio>
                      </Radio.Group>
                    </div>
                    <Checkbox className="items-start" onChange={onChangeToP}>
                      Tôi đồng ý với những{" "}
                      <Link
                        to={`/`}
                        className="text-blue-400 font-semibold pr-1"
                      >
                        điều khoản
                      </Link>
                      và
                      <Link
                        to={`/`}
                        className="text-blue-400 font-semibold px-1"
                      >
                        thỏa thuận
                      </Link>
                      của ứng dụng Fluffy Paw.
                    </Checkbox>
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
                      onClick={() => handleRegister(register)}
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
                    <Link to={`/`} className="hover:text-pink-400">
                      Fluffy Paw
                    </Link>
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
