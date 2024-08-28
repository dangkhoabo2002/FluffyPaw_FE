import { Disclosure } from "@headlessui/react";
import {
  BellIcon,
  CalendarDaysIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import SearchNav from "../search";
import Logo from "../petowner/logo.png";
import Logo1 from "../petowner/logo1.png";
import Vaccine from "../petowner/vaccine.png";
import Wallet from "../petowner/wallet.png";
import Logout from "../petowner/logout.png";
import Info from "../petowner/information.png";
import { Link, useNavigate } from "react-router-dom";
import { Popover, Button } from "antd";

export default function Navbar() {
  const navigate = useNavigate();
  const isLogged = sessionStorage.getItem("access_token");
  console.log(isLogged);
  const notification = (
    <div style={{ width: "300px" }}>
      <h1
        style={{ fontSize: "24px", paddingBottom: "14px", paddingLeft: "18px" }}
      >
        Thông báo
      </h1>
      <div className="flex flex-col">
        {/* Thông báo đặt lịch */}
        <div className="flex flex-row gap-4 items-center rounded-lg px-4 py-2 hover:bg-[#F0EBE3]">
          <img alt="Logo" className="rounded-full w-12 h-10" src={Logo1}></img>
          <p style={{ fontSize: "12px" }}>
            Bạn đã thành công đặt lịch tại Pet Store vào lúc 20:43 - Ngày
            16/08/2024
          </p>
        </div>

        {/* Thông báo nhắc tiêm vaccine */}
        <div className="flex flex-row gap-4 items-center rounded-lg px-4 py-2 hover:bg-[#F0EBE3]">
          <img
            alt="Vaccine"
            className="rounded-full w-14 h-12 pl-1"
            src={Vaccine}
          ></img>
          <p style={{ fontSize: "12px" }}>
            Bé cún Labubu sẽ có lịch tiêm vaccine vào ngày 16/08/2024
          </p>
        </div>
        <p></p>
      </div>
    </div>
  );

  const handleLogout = () => {
    navigate("/login");
    sessionStorage.clear();
  };
  const content = (
    <div style={{ width: "240px" }}>
      <div className="flex flex-col">
        {/* Thông tin cá nhân */}
        <Link to={"/po_profile"} className="hover:text-pink-500">
          <div className="flex flex-row gap-4 items-center rounded-lg px-2 py-2 hover:bg-[#F0EBE3]">
            <img
              alt="Info"
              className="rounded-full w-7 h-5 pl-2"
              src={Info}
            ></img>
            <h1 style={{ fontSize: "16px", paddingLeft: "6px" }}>
              Thông tin cá nhân
            </h1>
          </div>
        </Link>

        {/* Ví tiền */}
        <Link to={"/po_wallet"} className="hover:text-pink-500">
          <div className="flex flex-row gap-4 items-center rounded-lg px-2 py-2 hover:bg-[#F0EBE3]">
            <img
              alt="Wallet"
              className="rounded-full w-8 h-6 pl-1"
              src={Wallet}
            ></img>
            <h1 style={{ fontSize: "16px", paddingLeft: "6px" }}>Ví tiền</h1>
          </div>
        </Link>

        {/* Đăng xuất */}
        <button onClick={handleLogout}>
          <div className="flex flex-row gap-4 items-center rounded-lg px-2 py-2 hover:bg-[#F0EBE3] hover:text-pink-500">
            <img
              alt="Logout"
              className="rounded-full w-9 h-8 pl-1"
              src={Logout}
            ></img>
            <h1 style={{ fontSize: "16px" }}>Đăng xuất</h1>
          </div>
        </button>
      </div>
    </div>
  );

  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <Disclosure
      as="nav"
      className="bg-transparent fixed top-0 right-0 left-0 z-10 backdrop-blur-3xl"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="flex flex-1 justify-start gap-72">
            <Link to={`/`}>
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Logo"
                  src={Logo}
                  className="logoNav"
                  style={{
                    height: "80px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Link>
            <div className="absolute inset-y-0 left-[450px] flex justify-left items-center">
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={
                    isLogged
                      ? "relative rounded-full shadow-lg p-1 text-gray-400 hover:text-pink-400 hover:bg-white focus:bg-white "
                      : "hidden"
                  }
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <CalendarDaysIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                <div className=" r">
                  <SearchNav />
                </div>
              </div>
            </div>
          </div>
          {isLogged ? (
            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
              <Popover content={notification} trigger="click">
                <button
                  type="button"
                  className="relative rounded-full shadow-lg p-1 text-gray-400 hover:text-pink-400 hover:bg-white focus:bg-white "
                >
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </Popover>
              {/* Profile dropdown */}
              <Popover content={content} trigger="click">
                <button
                  type="button"
                  className="relative rounded-full shadow-lg p-1 hover:text-pink-400 hover:bg-white focus:bg-white "
                >
                  <UserIcon class="h-6 w-6 text-gray-400" />
                </button>
              </Popover>
            </div>
          ) : (
            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
              <Button
                type="primary"
                size="large"
                style={{ backgroundColor: "pink", color: "black" }}
                shape="round"
                onClick={navigateLogin}
              >
                Đăng nhập
              </Button>
            </div>
          )}
        </div>
      </div>
    </Disclosure>
  );
}
