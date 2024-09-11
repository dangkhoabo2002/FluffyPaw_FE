import React, { useState } from "react";
import {
  HistoryOutlined,
  UserOutlined,
  HomeOutlined,
  FormOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import {
  WalletIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { Menu, Dropdown } from "antd";
import Logo from "../component/petowner/logo.png";
import { Outlet, useNavigate } from "react-router-dom";

const items = [
  {
    key: "1",
    label: "Thống kê dịch vụ",
    icon: <LineChartOutlined />,
  },
  {
    key: "sub1",
    label: "Quản lý đơn hàng",
    icon: <FormOutlined />,
    children: [
      {
        key: "2",
        label: "Đang chờ duyệt",
      },
      {
        key: "3",
        label: "Đang xử lý - Tracking",
      },
      {
        key: "4",
        label: "Đơn hủy",
      },
      {
        key: "5",
        label: "Lịch trình",
      },
    ],
  },
  {
    key: "sub2",
    label: "Quản lý cửa hàng",
    icon: <HomeOutlined />,
    children: [
      {
        key: "6",
        label: "Thông tin cửa hàng",
      },
      {
        key: "7",
        label: "Tất cả dịch vụ",
      },
      {
        key: "8",
        label: "Thêm dịch vụ",
      },
    ],
  },
  {
    key: "sub3",
    label: "Chăm sóc khách hàng",
    icon: <UserOutlined />,
    children: [
      {
        key: "9",
        label: "Quản lí Chat",
      },
      {
        key: "10",
        label: "Quản lí đánh giá",
      },
    ],
  },
  {
    key: "sub4",
    label: "Lịch sử",
    icon: <HistoryOutlined />,
    children: [
      {
        key: "11",
        label: "Lịch sử giao dịch",
      },
      {
        key: "12",
        label: "Lịch sử rút tiền",
      },
    ],
  },
];

const MainPage = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "1":
        navigate("/store/staff_dashboard");
        break;
      case "2":
        navigate("/store/staff_service_approval");
        break;
      case "6":
        navigate("/store/staff_store_detail");
        break;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row sticky top-0 left-0 right-0 h-auto justify-between items-center px-7 py-2 border-b-2 bg-white shadow-md z-10">
        <img src={Logo} alt="Logo" className="w-auto h-16" />
        <div className="flex flex-row gap-4">
          <BellIcon class="h-7 w-7 text-gray-500" />
          <WalletIcon class="h-7 w-7 text-gray-500" />
          <UserCircleIcon class="h-7 w-7 text-gray-500" />
        </div>
      </div>
      <div className="flex flex-row h-screen fixed top-[82px] left-0 bottom-0 z-10">
        <Menu
          style={{
            width: 256,
            backgroundColor: "white",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={"inline"}
          theme={"light"}
          items={items}
          onClick={onClick}
        />
      </div>
      <Outlet />
    </div>
  );
};
export default MainPage;
