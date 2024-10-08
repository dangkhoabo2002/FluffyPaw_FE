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
  notification,
  Modal,
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
import { jwtDecode } from "jwt-decode";

const { Title } = Typography;

const isValidPhoneNumber = (phoneNumber) => {
  const phoneRegex = /^(03|05|07|08|09)\d{8}$/;
  return phoneRegex.test(phoneNumber);
};

export default function Login() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    if (type === "warning") {
      api.warning({
        message: "Thông tin này không thể trống !",
        description: "Vui lòng nhập đầy đủ thông tin của bạn để tiếp tục.",
        placement: "bottomRight",
      });
    } else if (type === "unvalid_email") {
      api.warning({
        message: "Sai định dạng mail !",
        description: "Vui lòng nhập đúng email của bạn.",
        placement: "bottomRight",
      });
    } else if (type === "unvalid_username") {
      api.warning({
        message: "Sai định dạng tên tài khoản !",
        description: "Vui lòng nhập tối thiểu 8 kí tự và tối đa 100 kí tự.",
        placement: "bottomRight",
      });
    } else if (type === "unvalid_phone") {
      api.warning({
        message: "Sai định dạng số điện thoại !",
        description: "Vui lòng nhập đúng số điện thoại của bạn.",
        placement: "bottomRight",
      });
    } else {
      api.warning({
        message: `${type}`,
        description: "Vui lòng thử lại.",
        placement: "bottomRight",
      });
    }
  };

  const openSuccess = (type) => {
    if (type === "register_success")
      api.success({
        message: "Đăng kí thành công !",
        description:
          "Chào mừng bạn đến với Fluffy Paw, vui lòng đăng nhập để vào hệ thống.",
        placement: "bottomRight",
      });
  };

  const navigate = useNavigate();

  const [blockButton, setBlockButton] = useState(true);

  // Check valid phone
  const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^(03|05|07|08|09)\d{8}$/;
    return regex.test(phoneNumber);
  };

  // Check valid fullname

  const isValidFullName = (fullname) => {
    const nameRegex = /^[a-zA-ZÀ-ỹ\s\-]+(?:\s[a-zA-ZÀ-ỹ\s\-]+)*$/;
    return nameRegex.test(fullname);
  };
  const [afterOtp, setAfterOtp] = useState(true);
  const handleSendOTP = (e) => {
    if (
      register.user_phone === null ||
      register.user_phone === "" ||
      register.user_phone === undefined
    ) {
      openNotificationWithIcon("warning");
    } else if (isValidPhoneNumber(register.user_phone) === false) {
      openNotificationWithIcon("unvalid_phone");
    } else {
      // axios
      //   .post("https://fluffypaw.azurewebsites.net/api/Authentication/Login", {
      //     username: us,
      //     password: pw,
      //   })
      //   .then((response) => {
      //     if (response.status === 200) {
      //       const dataLog = response.data;
      //       console.log(dataLog.data.token);
      //       localStorage.setItem("access_token", dataLog.data.token);
      //       navigate("/");
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      setAfterOtp(false);
      setSubmitGmail(true);
    }
  };

  // ACCEPT POLICY

  const [acceptTerm, setAcceptTerm] = useState(false);
  const onChangeRemember = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeToP = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setAcceptTerm(e.target.checked);
  };

  const [isAnimating, setIsAnimating] = useState(false);
  const handleRegisterClick = () => {
    setStep(0);
    setRegister({
      user_phone: "",
      user_username: "",
      user_password: "",
      user_confirm_password: "",
      user_name: "",
      user_location: "",
      user_email: "",
      user_gender: "",
    });
    setBirthday("");
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

  // NEXT STEP + CHECK VALID  1 - 4
  const [submitGmail, setSubmitGmail] = useState(false);
  const [step, setStep] = useState(0);

  const nextStep = (num) => {
    console.log(step);
    switch (num) {
      case 1:
        setStep(step + 1);
        break;
      case 2:
        if (
          register.user_password.length < 1 ||
          register.user_confirm_password.length < 1 ||
          register.user_username.length < 1
        )
          openNotificationWithIcon("warning");
        else {
          if (register.user_username.length < 8)
            openNotificationWithIcon("Tên tài khoản tối thiểu 8 kí tự");
          else if (register.user_username.length > 100)
            openNotificationWithIcon("Tên tài khoản tối đa 100 kí tự");
          else if (register.user_password.length > 50)
            openNotificationWithIcon("Mật khẩu tối đa 50 kí tự");
          else if (register.user_password.length < 5)
            openNotificationWithIcon("Mật khẩu tối thiểu 5 kí tự");
          else if (register.user_password !== register.user_confirm_password)
            openNotificationWithIcon("Mật khẩu xác nhận không đúng");
          else {
            setStep(step + 1);
          }
        }
        break;
      case 3:
        if (register.user_name.length < 1 || register.user_location.length < 1)
          openNotificationWithIcon("warning");
        else {
          if (isValidFullName(register.user_name) === true) setStep(step + 1);
          else openNotificationWithIcon("Hãy nhập đúng họ và tên của bạn!");
        }
        break;
      case 4:
        if (
          register.user_email.length < 1 ||
          register.user_gender.length < 1 ||
          register.user
        )
          openNotificationWithIcon("warning");
        else {
          if (isValidFullName(register.user_name) === true) setStep(step + 1);
          else openNotificationWithIcon("Hãy nhập đúng họ và tên của bạn!");
        }
        break;
    }
  };
  //------------------

  // ---- Sex of User
  const [sex, setSex] = useState(1);
  const onChangeSex = (e) => {
    console.log("radio checked", e.target.value);
    setSex(e.target.value);
  };

  // ---------- API Login -----------

  const [isLogging, setIsLoggin] = useState(false);
  const [login, setLogin] = useState({
    user_username: "",
    user_password: "",
  });

  const onChangeLogin = (prop) => (event) => {
    setLogin({ ...login, [prop]: event.target.value });
    // console.log("us", login.user_username);
  };

  const handleLogin = (us, pw) => {
    if (
      us === null ||
      us === "" ||
      us === undefined ||
      pw === null ||
      pw === "" ||
      pw === undefined
    ) {
      openNotificationWithIcon("warning");
    } else {
      setIsLoggin(true);
      axios
        .post("https://fluffypaw.azurewebsites.net/api/Authentication/Login", {
          username: us,
          password: pw,
        })
        .then((response) => {
          if (response.status === 200) {
            const dataLog = response.data;
            const myDecodedToken = jwtDecode(dataLog.data);
            localStorage.setItem(
              "access_token",
              JSON.stringify(myDecodedToken)
            );
            localStorage.setItem("undecode_access_token", dataLog.data);
            localStorage.setItem(
              "account_role",
              myDecodedToken[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ]
            );

            if (
              myDecodedToken[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ] === "StoreManager"
            ) {
              navigate("/store_manager/dashboard");
            } else if (
              myDecodedToken[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ] === "PetOwner"
            ) {
              navigate("/");
            } else if (
              myDecodedToken[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ] === "Staff"
            ) {
              navigate("/store/staff_dashboard");
            }
            setIsLoggin(false);
          }
        })

        .catch((error) => {
          const errMessage = error.response.data.message;
          openNotificationWithIcon(errMessage);

          console.error(error);
          setIsLoggin(false);
        });
    }
  };

  // ---------- API Register -----------

  const [isLoading, setIsLoading] = useState(false);
  const [register, setRegister] = useState({
    user_phone: "",
    user_username: "",
    user_password: "",
    user_confirm_password: "",
    user_name: "",
    user_location: "",
    user_email: "",
    user_gender: "",
  });
  const [birthday, setBirthday] = useState();
  // ---- DOB
  const onChangeDate = (date, dateString) => {
    setBirthday(dateString);
  };
  const onChangeRegister = (prop) => (event) => {
    setRegister({ ...register, [prop]: event.target.value });
  };

  // REGISTER API

  const handleRegister = async () => {
    console.log(birthday);
    setIsLoading(true);
    const today = new Date();
    const birthdayDate = new Date(birthday);

    // CHECK DATE
    if (
      birthdayDate.getDate() === today.getDate() &&
      birthdayDate.getMonth() === today.getMonth() &&
      birthdayDate.getFullYear() === today.getFullYear()
    ) {
      openNotificationWithIcon("Ngày sinh không được trùng với ngày hiện tại.");
      setIsLoading(false);
    } else {
      try {
        const response = await axios.post(
          "https://fluffypaw.azurewebsites.net/api/Authentication/RegisterPO",
          {
            phone: register.user_phone,
            userName: register.user_username,
            password: register.user_password,
            comfirmPassword: register.user_confirm_password,
            email: register.user_email,
            fullName: register.user_name,
            address: register.user_location,
            dob: birthday,
            gender: register.user_gender,
          }
        );

        if (response.status === 200) {
          console.log(response.data);
          openSuccess("register_success");
          handleRegisterClick();
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        const errMessage = error.response.data?.message;
        if (errMessage === undefined) {
          openNotificationWithIcon("Lỗi không xác định !");
          console.error(error);
          setIsLoading(false);
        } else {
          openNotificationWithIcon(errMessage);
          setIsLoading(false);
        }

        setIsLoading(false);
      }
    }
  };

  // ---------- API Forgot Password -----------

  const [openForPass, setOpenForPass] = useState(false);
  const [method, setMethod] = useState("phone");
  const [forgot, setForgot] = useState({
    email: "",
    phone: "",
  });

  const [otpForgot, setOtpForgot] = useState(false);
  const [otpForgotMail, setOtpForgotMail] = useState(false);

  const onChangeInputForgot = (prop) => (event) => {
    setForgot({ ...forgot, [prop]: event.target.value });
  };
  const openForgotPass = () => {
    setOpenForPass(true);
  };

  const handleCancel = () => {
    setOpenForPass(false);
  };

  const onChangeMethod = (e) => {
    setMethod(e.target.value);
  };
  const handleSendOTPGmailForgot = () => {
    if (forgot.email.includes("@gmail.com")) {
      setOtpForgotMail(true);
      return;
    } else openNotificationWithIcon("unvalid_email");
  };

  const handleSendOTPPhoneForgot = () => {
    const regex = /^\d+$/;

    if (!regex.test(forgot.phone) && forgot.phone.length < 12) {
      openNotificationWithIcon("unvalid_phone");
      return;
    } else setOtpForgot(true);
  };

  // SEND OTP

  return (
    <>
      {contextHolder}
      <div id="recapcha"></div>
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
              <div className="content flex flex-col gap-5">
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
                  {isLogging === false ? (
                    <Button
                      type="primary"
                      onClick={() =>
                        handleLogin(login.user_username, login.user_password)
                      }
                    >
                      Đăng nhập
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      onClick={() =>
                        handleLogin(login.user_username, login.user_password)
                      }
                      loading
                      disabled
                    >
                      Đăng nhập
                    </Button>
                  )}
                </div>
                <div className="divider">
                  <button
                    onClick={openForgotPass}
                    className="hover:text-pink-400"
                  >
                    Quên mật khẩu.
                  </button>
                  <Divider
                    style={{
                      borderColor: "#7cb305",
                      fontFamily: "Itim",
                      height: "12px",
                    }}
                    plain
                  >
                    Fluffy Paw
                  </Divider>
                </div>
                <Button className="register" onClick={handleRegisterClick}>
                  Đăng ký
                </Button>
                <Link to={`/sm_register`} className="hover:text-pink-400">
                  <Button className="register">Đăng ký cửa hàng</Button>
                </Link>
              </div>
            </div>
            {/* ------------------- Modal Forgot Password ----------------------- */}

            <Modal
              open={openForPass}
              title="Lấy lại mật khẩu"
              onCancel={handleCancel}
              footer={(_, {}) => (
                <>
                  <Button type="primary" onClick={openForPass}>
                    Tiếp tục
                  </Button>
                  <Button onClick={handleCancel}>Thoát</Button>
                </>
              )}
            >
              <div className="flex flex-col gap-2 pt-4">
                <p>Nhận xác thực qua: </p>
                <Radio.Group value={method} onChange={onChangeMethod}>
                  <Radio value={"phone"}>Số điện thoại</Radio>
                  <Radio value={"email"}>Gmail</Radio>
                </Radio.Group>
                {method === "phone" ? (
                  <div className="py-2">
                    <p>Hãy nhập số điện thoại</p>
                    <div className="line1 pt-2">
                      <div className="pb-2 flex flex-row gap-5">
                        <Input
                          addonBefore="+84"
                          value={forgot.phone}
                          onChange={onChangeInputForgot("phone")}
                          style={{ width: "100%" }}
                        />
                        <Button
                          type="primary"
                          onClick={() => handleSendOTPPhoneForgot()}
                        >
                          Gửi mã xác nhận
                        </Button>
                      </div>
                      {otpForgot === true ? (
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
                  </div>
                ) : (
                  <div className="py-2">
                    <p>Hãy nhập email của tài khoản đăng kí:</p>
                    <div className="line1 pt-2">
                      <div className="pb-2 flex flex-row gap-5">
                        <Input
                          value={forgot.email}
                          onChange={onChangeInputForgot("email")}
                          style={{ width: "100%" }}
                        />
                        <Button
                          type="primary"
                          onClick={() => handleSendOTPGmailForgot()}
                        >
                          Gửi mã xác nhận
                        </Button>
                      </div>
                      {otpForgotMail === true ? (
                        <>
                          <Title level={5} className="pb-1">
                            Nhập mã xác thực được gửi vào email của bạn
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
                  </div>
                )}
              </div>
            </Modal>
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
                      <Input
                        addonBefore="+84"
                        value={register.user_phone}
                        onChange={onChangeRegister("user_phone")}
                        style={{ width: "100%" }}
                      />
                      <Button type="primary" onClick={handleSendOTP}>
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
                    <Button
                      type="primary"
                      disabled={afterOtp}
                      onClick={() => nextStep(1)}
                    >
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
                        step === 0 || step === 2 || step === 3 ? "hidden" : ""
                      }
                      type="primary"
                      onClick={() => nextStep(2)}
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
                        step === 0 || step === 1 || step === 3 ? "hidden" : ""
                      }
                      type="primary"
                      onClick={() => nextStep(3)}
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
                      placeholder="Email"
                      value={register.user_email}
                      onChange={onChangeRegister("user_email")}
                      prefix={<MailOutlined />}
                    />
                    <div className="flex flex-row justify-between items-center">
                      <DatePicker
                        onChange={onChangeDate}
                        showNow={false}
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
                      onClick={() => handleRegister()}
                      loading={isLoading}
                      disabled={!acceptTerm}
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
                <div>
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
