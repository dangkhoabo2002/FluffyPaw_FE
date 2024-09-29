import React, { useEffect, useState } from "react";

import Navbar from "../component/petowner/navbar";
import { Tabs, Skeleton } from "antd";
import ProfileTab from "../screen/tab/Po_detail";
import PetTab from "../screen/tab/Po_pets";
import axios from "axios";

import "../css/Po_profile.css";

export default function Po_profile() {
  const [loadingApi, setLoadingApi] = useState(true);
  const [poProfile, setPoProfile] = useState();
  useEffect(() => {
    handleGetPoInformation();
    handleGetPetList();
  }, []);

  const test = () => {
    console.log(poProfile);
  };

  // Load information
  const handleGetPoInformation = async () => {
    setLoadingApi(true);
    try {
      const response = await axios.get(
        "https://fluffypaw.azurewebsites.net/api/PetOwner/GetPetOwnerDetail",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );
      setPoProfile(response.data.data);

      setLoadingApi(false);
    } catch (err) {
      console.log(err.message);
      setLoadingApi(false);
    }
  };

  // Load pet list
  const [petList, setPetList] = useState();
  const handleGetPetList = async () => {
    try {
      const response = await axios.get(
        "https://fluffypaw.azurewebsites.net/api/Pet/GetAllPets",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );
      setPetList(response.data.data);
      console.log(response.data.data);
      setLoadingApi(false);
    } catch (err) {
      console.log(err.message);
      setLoadingApi(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className="profileContainer">
        <div className="profileHeader">
          <img
            alt="profileBackground"
            src="https://wallpapercave.com/wp/wp5134857.png"
          />
          <div className="flex flex-row justify-between pr-10 items-center">
            <div className="profileAvatar flex flex-row">
              {loadingApi === true ? (
                <div className="pl-40">
                  <Skeleton.Avatar
                    active
                    size="large"
                    style={{
                      width: "220px",
                      height: "220px",
                    }}
                  />
                </div>
              ) : (
                <img
                  alt="avatar"
                  src={
                    poProfile?.account.avatar
                      ? poProfile?.account.avatar
                      : "https://www.usatoday.com/gcdn/presto/2023/07/10/USAT/aee85bb0-b58f-4d28-bc08-f0e68d79a230-cat_years.png?crop=2949,1922,x432,y212"
                  }
                />
              )}

              <div className="flex flex-col pl-10 pt-8">
                {loadingApi === true ? (
                  <>
                    <Skeleton.Input active size="large" />
                  </>
                ) : (
                  <>
                    <h1>{poProfile?.fullName}</h1>
                    <p className="text-gray-400">Người sở hữu thú cưng</p>
                  </>
                )}
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
              {loadingApi === true ? (
                <div className="px-20 pt-12">
                  <Skeleton active />
                </div>
              ) : (
                <PetTab
                  petList={
                    loadingApi === true &&
                    petList !== null &&
                    petList !== undefined
                      ? ""
                      : petList
                  }
                />
              )}
            </Tabs.TabPane>
            <Tabs.TabPane tab="Thông tin cá nhân" key="tab2">
              {loadingApi === true ? (
                <div className="px-20">
                  <Skeleton active />
                </div>
              ) : (
                <ProfileTab profile={poProfile} />
              )}
            </Tabs.TabPane>
            <Tabs.TabPane tab="Lịch sử" key="tab3">
              {loadingApi === true ? <Skeleton active /> : <>asad</>}
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="profileFooter"></div>
      </div>
    </>
  );
}
