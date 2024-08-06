import React, { useState } from "react";

import "../css/login.css";
import { Input, Checkbox, Divider, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

export default function Login() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [isAnimating, setIsAnimating] = useState(false);
  const handleRegisterClick = () => {
    if (isAnimating === false) {
      setIsAnimating(true);
    } else setIsAnimating(false);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="boxLogin bg-white rounded-3xl overflow-hidden relative">
          <div className="boxGrid z-1">
            {/* ------------------- LOGIN ----------------------- */}

            <div className="contentLogin flex flex-col py-16">
              <h1>Chào mừng trở lại</h1>
              <p>Hãy điền thông tin đăng nhập nhé!</p>
              <div className="content">
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
                <div className="flex flex-col text-left gap-6">
                  <Checkbox className="items-start" onChange={onChange}>
                    Ghi nhớ tài khoản này mỗi khi đăng nhập.
                  </Checkbox>
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
            <div className="contentRegister flex flex-col py-10">
              <h1 id="h1_register">Chào mừng bạn đến với chúng tôi!</h1>
              <p>Thông tin của bạn sẽ giúp chúng tôi hiểu rõ bạn hơn.</p>
              <div className="content">
                <div className="username">
                  <Input
                    size="large"
                    placeholder=" Nhập tên đăng nhập của bạn"
                    prefix={<UserOutlined />}
                  />
                </div>
                <div className="username">
                  <Input
                    size="large"
                    placeholder=" Nhập tên đăng nhập của bạn"
                    prefix={<UserOutlined />}
                  />
                </div>
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
                <div className="flex flex-col text-left gap-6">
                  <Checkbox className="items-start" onChange={onChange}>
                    Ghi nhớ tài khoản này mỗi khi đăng nhập.
                  </Checkbox>
                  <Button type="primary">Đăng ký</Button>
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
                  Đăng nhập
                </Button>
              </div>
            </div>
          </div>

          <div
            className={
              isAnimating ? "animation absolute" : "non-animation absolute"
            }
          >
            <img
              alt="Login"
              className="object-cover rounded-3xl z-2"
              src="https://i.pinimg.com/564x/5a/c3/6c/5ac36ca9f1faf1211c0ec9d743e835e3.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
