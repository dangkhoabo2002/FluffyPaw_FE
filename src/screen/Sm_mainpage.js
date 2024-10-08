import React, { useState } from "react";
import {
  HistoryOutlined,
  HomeOutlined,
  FormOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import {
  WalletIcon,
  BellIcon,
  UserCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { Menu, Alert, Button, Modal } from "antd";
import Logo from "../component/petowner/logo.png";
import { Outlet, useNavigate, Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: "Thống kê tổng quát",
    icon: <LineChartOutlined />,
  },
  {
    key: "sub1",
    label: "Quản lý nhân viên",
    icon: <FormOutlined />,
    children: [
      {
        key: "2",
        label: "Danh sách",
      },
      {
        key: "3",
        label: "Thêm tài khoản",
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
        label: "Tất cả cửa hàng",
      },
      {
        key: "7",
        label: "Tất cả dịch vụ",
      },
      {
        key: "8",
        label: "Thêm chi nhánh",
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

const SmMainPage = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "1":
        navigate("/store_manager/dashboard");
        break;
      case "2":
        navigate("/store_manager/staff_management");
        break;
      case "6":
        navigate("/store_manager/list_of_store");
        break;
      case "7":
        navigate("/store_manager/list_of_service");
        break;
    }
  };

  // LOGOUT
  const handleLogout = () => {
    navigate("/login");
    sessionStorage.clear();
    localStorage.clear();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row sticky top-0 left-0 right-0 h-auto justify-between items-center px-7 py-2 border-b-2 bg-white shadow-md z-10">
        <img src={Logo} alt="Logo" className="w-auto h-16" />
        <div className="flex flex-row gap-4">
          <Alert message="Store Manager" type="error" />
          <BellIcon class="h-7 w-7 text-gray-500" />
          <Link to={`/store_manager/sm_wallet`}>
            <WalletIcon class="h-7 w-7 text-gray-500" />
          </Link>
          <Link to={`/store_manager/sm_profile`}>
            <UserCircleIcon class="h-7 w-7 text-gray-500" />
          </Link>
          <Button className="border-none p-0 mt-[-2px]" onClick={showModal}>
            <ArrowLeftStartOnRectangleIcon class="h-7 w-7 text-gray-500 transform rotate-180" />
          </Button>
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
      <Modal
        title="Đăng xuất"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <>
            <Button
              className="bg-pink-200 hover:bg-pink-300"
              onClick={handleCancel}
            >
              Quay lại
            </Button>
            <Button onClick={handleLogout}>Đăng xuất</Button>
          </>,
        ]}
      >
        <p>Bạn chắn chắn muốn đăng xuất chứ</p>
      </Modal>
    </div>
  );
};
export default SmMainPage;
