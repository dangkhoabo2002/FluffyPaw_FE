import React from "react";

import Navbar from "../component/petowner/navbar";
import { Tabs, Button } from "antd";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import PetProfile from "../screen/tab/Po_petDetail_infomation";
import PetHistory from "../screen/tab/Po_petDetail_history";
import PetVaccine from "../screen/tab/Po_petDetail_vaccine";
import PetReminder from "../screen/tab/Po_petDetail_reminder";
import "../css/Po_profile.css";
import { Link } from "react-router-dom";

export default function profile() {
  return (
    <>
      <Navbar />
      <div className="profileContainer">
        <div className="profileHeader">
          <img
            alt="profileBackground"
            src="https://w.wallhaven.cc/full/zy/wallhaven-zyj8gw.jpg"
          />
          <div className="profileAvatar flex flex-row ">
            <img
              alt="avatar"
              src="https://www.usatoday.com/gcdn/presto/2023/07/10/USAT/aee85bb0-b58f-4d28-bc08-f0e68d79a230-cat_years.png?crop=2949,1922,x432,y212"
            />
            <div className="flex flex-col pl-10 pt-8">
              <h1>Tên người dùng</h1>
              <p className="text-gray-400">Người sở hữu thú cưng</p>
            </div>
          </div>
        </div>
        <div className="profileContent py-10">
          <div className="pb-10 pl-6">
            <Link to={`/po_profile`}>
              <Button
                size="large"
                shape="round"
                icon={<ArrowLeftIcon class="h-4 w-4 text-gray-500" />}
                className="text-gray-500"
              >
                Quay lại
              </Button>
            </Link>
          </div>
          <Tabs size="large" defaultActiveKey="1" tabPosition="left">
            <Tabs.TabPane
              tab={<h1 className="text-[20px]">Thông tin của bé</h1>}
              key="1"
            >
              <PetProfile />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<h1 className="text-[20px]">Hồ sơ bệnh lý - Đã nhập</h1>}
              key="3"
            >
              <PetVaccine />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<h1 className="text-[20px]">Nhắc nhở</h1>}
              key="4"
            >
              <PetReminder />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<h1 className="text-[20px]">Lịch sử</h1>}
              key="2"
            >
              <PetHistory />
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="profileFooter"></div>
      </div>
    </>
  );
}
