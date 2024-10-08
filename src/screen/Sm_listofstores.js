import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DeleteOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  notification,
  Card,
  Modal,
  Rate,
  Image,
  Form,
  Input,
  Button,
  Skeleton,
} from "antd";
export default function Sm_listofstore() {
  // NOTIFICATION
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    if (type === "warning") {
      api.warning({
        message: "Thông tin này không thể trống !",
        description: "Vui lòng nhập đầy đủ thông tin của bạn để tiếp tục.",
        placement: "bottomRight",
      });
    } else if (type === "success_delete") {
      api.success({
        message: "Xóa thông tin thú cưng thành công !",
        description: "Vui lòng đợi trong giây lát.",
        placement: "bottomRight",
      });
    } else if (type === "success_update") {
      api.success({
        message: "Thay đổi thông tin thành công.",
        description: "Vui lòng chờ hệ thống làm mới thông tin.",
        placement: "bottomRight",
      });
    } else {
      api.warning({
        message: `${type}`,
        description: "Vui lòng thử lại.",
        placement: "bottomRight",
      });
    }
  };
  // GET ALL STORE

  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [selectStore, setSelectStore] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (store) => {
    setIsModalOpen(true);
    setSelectStore(store);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleGetStores = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://fluffypaw.azurewebsites.net/api/StoreManager/GetAllStoreBySM`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data.data.result);
        setStores(response.data.data.result);
        setLoading(false);
      }
    } catch (err) {
      openNotificationWithIcon(err.response.data.message);
      setLoading(false);
    }
    setLoading(false);
  };

  // ADD STORE
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const onFinish = (values) => {
    console.log("Form Values: ", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };
  // USE EFFECT

  useEffect(() => {
    handleGetStores();
  }, []);

  return (
    <div className="ml-[300px] mr-12 mt-6 px-6 py-6 flex flex-col shadow-md bg-white rounded-md">
      {contextHolder}
      <h1>Danh sách cửa hàng</h1>
      {loading === true ? (
        <Skeleton active className="pt-6" />
      ) : (
        <>
          <div className="flex flex-row flex-wrap gap-6 py-6">
            {stores &&
              stores?.map((store) => (
                <div key={store.id}>
                  <Card
                    style={{
                      width: 250,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <SettingOutlined key="setting" />,
                      <DeleteOutlined key="edit" />,
                      <EllipsisOutlined
                        key="ellipsis"
                        onClick={() => showModal(store)}
                      />,
                    ]}
                  >
                    <p className="font-semibold text-[16px]">{store.name}</p>
                    <p className="text-[16px] text-gray-400">{store.address}</p>
                  </Card>
                </div>
              ))}
          </div>
          <button
            data-ripple-light="true"
            type="button"
            onClick={showModal}
            className="flex flex-row gap-2 justify-center items-center fixed right-[48px] bottom-6 select-none rounded-3xl bg-[#ff7fa1] py-3 px-4 text-center align-middle font-sans text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <p className="text-[16px] pb-1">Thêm cửa hàng</p>
            {/* <PlusCircleIcon class="h-8 w-8" /> */}
          </button>
        </>
      )}

      {/* MODAL STORE */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <h1>Thông tin cửa hàng</h1>
        <div className="flex flex-col w-full gap-4 py-6">
          <Form
            layout="vertical"
            onFinish={onFinish}
            name="basic"
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {/* Ảnh cửa hàng */}
            <div className="flex flex-row justify-between ">
              <p>Ảnh cửa hàng</p>
              <div className="flex flex-col w-[400px] justify-start">
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  placeholder="Chọn tệp"
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="fileInput"
                  style={{
                    cursor: "pointer",
                    padding: "6px 10px",
                    color: "gray",
                    border: "1px dashed pink",
                    textAlign: "center",
                    borderRadius: "12px",
                    width: "200px",
                  }}
                  className="shadow-md hover:shadow-none bg-[#ffe4f3] hover:bg-pink-200 "
                >
                  Chọn ảnh
                </label>
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      marginTop: "20px",
                      borderRadius: "12px",
                    }}
                  />
                )}
              </div>
            </div>

            {/* Tên cửa hàng */}
            <Form.Item
              label="Tên cửa hàng"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên cửa hàng !",
                },
              ]}
            >
              <Input placeholder="Nhập địa chỉ cửa hàng" />
            </Form.Item>

            {/* Địa chỉ */}
            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập địa chỉ cửa hàng!",
                },
              ]}
            >
              <Input placeholder="Nhập địa chỉ cửa hàng" />
            </Form.Item>

            {/* Số điện thoại */}
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập số điện thoại cửa hàng !",
                },
              ]}
            >
              <Input placeholder="Nhập số điện thoại cửa hàng" />
            </Form.Item>

            {/* Tình trạng */}
            <Form.Item label="Tình trạng" name="status">
              <Input
                value={selectStore?.status ? "Đang hoạt động" : "Tạm đóng cửa"}
              />
            </Form.Item>

            {/* Nút Submit */}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Lưu thay đổi
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
