import React from "react";
import { Button, Typography } from "antd";

export default function Po_petDetail_medical() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img
        alt="imgEmpty"
        className="w-60"
        src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      />
      <Typography.Text>
        Hồ sơ bệnh lý của bé nhà chưa được ghi nhận.
      </Typography.Text>
      <Button type="primary">Tạo hồ sơ ngay !</Button>
    </div>
  );
}
