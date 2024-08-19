import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import Search from "../search";
import Logo from "../petowner/logo.png";
import Logo1 from "../petowner/logo1.png";
import Vaccine from "../petowner/vaccine.png";
import { Link } from "react-router-dom";
import "../petowner/navbar.css";
import { Popover } from "antd";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const content = (
    <div style={{ width: "300px" }}>
      <h1 style={{ fontSize: "24px", paddingBottom: "14px" }}>Thông báo</h1>
      <div className="flex flex-col">
        {/* Thông báo đặt lịch */}
        <div className="flex flex-row gap-4 items-center rounded-lg px-4 py-2 hover:bg-[#F0EBE3]">
          <img alt="Logo" className="rounded-full w-12 h-10" src={Logo1}></img>
          <p style={{ fontSize: "12px" }}>
            Bạn đã thành công đặt lịch tại Pet Store vào lúc 20:43 - Ngày
            16/08/2024
          </p>
        </div>

        {/* Thông báo đặt lịch */}
        <div className="flex flex-row gap-4 items-center rounded-lg px-4 py-2 hover:bg-[#F0EBE3]">
          <img
            alt="vaccine"
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
  return (
    <Disclosure
      as="nav"
      className="bg-transparent fixed top-0 right-0 left-0 z-10 backdrop-blur-3xl"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 justify-start gap-72">
            <Link to={`/`}>
              <div className="flex flex-shrink-0 items-center">
                <img alt="Logo" src={Logo} className="logoNav" />
              </div>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <CalendarDaysIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                <div className="flex justify-center items-center">
                  <Search />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Popover content={content} trigger="click">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </Popover>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="avatar"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <Link to={`/po_profile`}>
                  <MenuItem>
                    <span className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Your Profile
                    </span>
                  </MenuItem>
                </Link>
                <Link to={`/login`}>
                  <MenuItem>
                    <span className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Login
                    </span>
                  </MenuItem>
                </Link>
                <MenuItem>
                  <span className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </span>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
