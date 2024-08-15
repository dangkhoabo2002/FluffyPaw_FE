import React from "react";

import Navbar from "../component/petowner/navbar";
import { Tabs } from "antd";
import PetProfile from "../screen/tab/Po_petDetail_infomation";
import PetMedical from "../screen/tab/Po_petDetail_medical";
import PetVaccine from "../screen/tab/Po_petDetail_vaccine";
import PetReminder from "../screen/tab/Po_petDetail_reminder";
import "../css/Po_profile.css";

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
          <Tabs size="large" defaultActiveKey="1" tabPosition="left">
            <Tabs.TabPane tab="Thông tin của bé" key="1">
              <PetProfile />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Hồ sơ bệnh lý" key="2">
              <PetMedical />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Hồ sơ tiêm phòng" key="3">
              <PetVaccine />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Thêm nhắc nhở" key="4">
              <PetReminder />
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="profileFooter"></div>
      </div>
    </>
  );
}
