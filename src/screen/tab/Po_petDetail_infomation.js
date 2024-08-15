import React from "react";
import "./Po_petDetail_information.css";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Po_petDetail_infomation() {
  return (
    <div className="grid grid-cols-2 pr-12">
      <div className="flex flex-col justify-around items-center gap-4 ">
        <div className="flex flex-col gap-4">
          <img
            alt="petImg"
            style={{
              width: "400px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg"
          />
        </div>
        <Button type="primary" icon={<SearchOutlined />}>
          Thay đổi ảnh
        </Button>
        <div>
          <img
            alt="petImg"
            style={{
              width: "400px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
            src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          />
        </div>
        <Button type="primary" icon={<SearchOutlined />}>
          Thay đổi ảnh
        </Button>
      </div>
      <div className="flex flex-col justify-center items-start gap-y-4">
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Tên</h1>
          </div>
          <div className="contentInfo">Labubu</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Sở thích</h1>
          </div>
          <div className="contentInfo">Gặm cỏ</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Giới tính</h1>
          </div>
          <div className="contentInfo">Cái</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Giống loài</h1>
          </div>
          <div className="contentInfo">Mèo tam thể</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Cân nặng</h1>
          </div>
          <div className="contentInfo">5kg</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Tuổi</h1>
          </div>
          <div className="contentInfo">2 năm</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Ngày sinh/ Ngày nhận nuôi</h1>
          </div>
          <div className="contentInfo">24/05/2022</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Mã số chip</h1>
          </div>
          <div className="contentInfo">Không có</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Chế độ ăn uống</h1>
          </div>
          <div className="contentInfo">Bình thường</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Tính cách</h1>
          </div>
          <div className="contentInfo">Hiếu khách</div>
        </div>
        <div className="lineInfo">
          <div className="iconInfo">
            <h1>Ghi chú</h1>
          </div>
          <div className="contentInfo">
            Rất ghét các con mèo khác Rất ghét các con mèo khác Rất ghét các con
            mèo khác Rất ghét các con mèo khác Rất ghét các con mèo khác Rất
            ghét các con mèo khác Rất ghét các con mèo khácRất ghét các con mèo
            khác Rất ghét các con mèo khác{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
