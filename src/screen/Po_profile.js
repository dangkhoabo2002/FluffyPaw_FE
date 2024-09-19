import React from "react";

import Navbar from "../component/petowner/navbar";
import { Tabs } from "antd";
import ProfileTab from "../screen/tab/Po_detail";
import PetTab from "../screen/tab/Po_pets";
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
          <div className="flex flex-row justify-between pr-10 items-center">
            <div className="profileAvatar flex flex-row">
              <img
                alt="avatar"
                src="https://www.usatoday.com/gcdn/presto/2023/07/10/USAT/aee85bb0-b58f-4d28-bc08-f0e68d79a230-cat_years.png?crop=2949,1922,x432,y212"
              />
              <div className="flex flex-col pl-10 pt-8">
                <h1>Tên người dùng</h1>
                <p className="text-gray-400">Người sở hữu thú cưng</p>
              </div>
            </div>
            <div>
              <p className="card1">
                <p>Mỗi người đều có hạnh phúc riêng, thú cưng cũng thế.</p>
              </p>
            </div>
          </div>
        </div>
        <div className="profileContent">
          <Tabs size="large" defaultActiveKey="1" centered>
            <Tabs.TabPane tab="Thông tin thú cưng" key="tab1">
              <PetTab />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Thông tin cá nhân" key="tab2">
              <ProfileTab />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Lịch sử" key="tab3">
              <div>Thiss isss</div>
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="profileFooter"></div>
      </div>
    </>
  );
}
