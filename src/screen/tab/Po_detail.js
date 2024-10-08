import React, { useState } from "react";
import UploadImg from "./Component_upload_image";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  DatePicker,
  Form,
  Input,
  Radio,
  notification,
  Modal,
  Button,
} from "antd";

export default function Po_detail(profile) {
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);

  const [datePart] = profile.profile?.dob.split("T");
  const [year, month, day] = datePart.split("-");

  // NOTIFICATION
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    if (type === "unsame_password") {
      api.warning({
        message: "Mật khẩu xác nhận và mật khẩu mới không trùng khớp !",
        description: "Vui lòng nhập lại.",
        placement: "bottomRight",
      });
    } else if (type === "success_update") {
      api.success({
        message: "Cập nhật thành công !",
        description: "Vui lòng đợi trong giây lát để làm mới dữ liệu",
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
  // UPDATE PO_PROFILE

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

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
  // CHECK EMPTY
  const checkEmptyFields = (obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (!value) {
        return true;
      } else {
        return false;
      }
    });
  };

  const handleUpdate = async (values) => {
    setLoading(true);
    let formattedDate;
    const stringDate = values.dob?.$d;
    if (stringDate) {
      const year = stringDate.getFullYear();
      const month = String(stringDate.getMonth() + 1).padStart(2, "0");
      const date = String(stringDate.getDate()).padStart(2, "0");
      formattedDate = `${year}-${month}-${date}`;
    } else formattedDate = datePart;

    if (checkEmptyFields(values) === true) {
      openNotificationWithIcon("warning");
      return; // Dừng xử lý nếu có trường trống
    }

    // Tạo form data
    const formData = new FormData();
    formData.append("fullName", values?.fullname || profile.profile?.fullName);
    formData.append("gender", values?.gender || profile.profile?.gender);
    formData.append("dob", formattedDate);
    formData.append("phone", values?.phone || profile.profile?.phone);
    formData.append("address", values?.address || profile.profile?.address);
    formData.append("email", values?.email || profile.profile.account?.email);
    if (file) {
      formData.append("avatar", file); // Image là trường để add trên Swagger API
    }
    try {
      setLoading(true);

      const response = await axios.patch(
        "https://fluffypaw.azurewebsites.net/api/PetOwner/UpdatePetOwnerAccount",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );

      if (response.status === 200) {
        openNotificationWithIcon("success_update");

        setTimeout(() => {
          setIsEdit(false);
          navigate(0);
        }, 2000);
      }
    } catch (error) {
      const errMessage = error.response?.data?.message;
      if (!errMessage) {
        openNotificationWithIcon("Lỗi không xác định !");
      } else {
        openNotificationWithIcon(errMessage);
      }
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // Change Password
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

  const [changePassData, setChangePassData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const onChangeInputChangePassword = (prop) => (event) => {
    setChangePassData({ ...changePassData, [prop]: event.target.value });
  };

  const handleChangePassword = async () => {
    setLoading(true);

    if (changePassData.newPassword !== changePassData.confirmPassword) {
      openNotificationWithIcon("unsame_password");
    } else if (
      changePassData.oldPassword === "" ||
      changePassData.confirmPassword === "" ||
      changePassData.newPassword === ""
    ) {
      openNotificationWithIcon("Vui lòng nhập mật khẩu cũ & mật khẩu mới !");
    } else {
      console.log(changePassData);
      try {
        setLoading(true);

        const response = await axios.patch(
          "https://fluffypaw.azurewebsites.net/api/Account/UpdatePassword",
          {
            oldPassword: changePassData.oldPassword,
            newPassword: changePassData.newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "undecode_access_token"
              )}`,
            },
          }
        );

        if (response.status === 200) {
          openNotificationWithIcon("success_update");

          setTimeout(() => {
            setIsEdit(false);
            navigate(0);
          }, 2000);
        }
      } catch (error) {
        const errMessage = error.response?.data?.message;
        if (!errMessage) {
          openNotificationWithIcon("Lỗi không xác định !");
        } else {
          openNotificationWithIcon(errMessage);
        }
        console.error(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {contextHolder}

      {isEdit === false ? (
        <div className="py-12">
          <div className="flex flex-row px-11 justify-evenly items-center">
            <div className="flex flex-row justify-start items-start gap-4">
              <div className="flex flex-col gap-7">
                <h1 className="text-[20px]">Tài khoản</h1>
                <h1 className="text-[20px]">Số điện thoại</h1>
                <h1 className="text-[20px]">Email</h1>
                <h1 className="text-[20px]">Địa chỉ</h1>
              </div>
              <div className="flex flex-col gap-6 w-[400px] items-left">
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    {profile.profile?.username}
                  </h1>
                </div>
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    {profile.profile?.phone}
                  </h1>
                </div>

                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    {profile.profile?.email}
                  </h1>
                </div>
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    {profile.profile?.address}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start gap-4">
              <div className="flex flex-col gap-7">
                <h1 className="text-[20px]">Ngày sinh</h1>
                <h1 className="text-[20px]">Giới tính</h1>
                <h1 className="text-[20px]">Trạng thái thông tin</h1>
                <button className="Btn" onClick={() => setIsEdit(true)}>
                  Cập nhật thông tin
                  <svg className="svg" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-6 w-[200px] items-left">
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    {day}/{month}/{year}
                  </h1>
                </div>
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    {profile.profile?.gender === "male"
                      ? "Nam"
                      : profile.profile?.gender === "female"
                      ? "Nữ"
                      : "Khác"}
                  </h1>
                </div>
                <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                  <h1 className="text-pink-600 text-[16px]">
                    {profile.profile?.status === "Active" ? "Tốt" : "Vi phạm"}
                  </h1>
                </div>
                <button className="low_Btn" onClick={() => showModal()}>
                  Thay đổi mật khẩu
                  <svg className="low_svg" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-row pl-20 items-center gap-4">
            <button className="button-3d" onClick={() => setIsEdit(false)}>
              <div className="button-top">
                <span className="material-icons">&#10094;</span>
              </div>
              <div className="button-bottom" />
              <div className="button-base" />
            </button>
            <h1 className="text-[26px]">Quay lại</h1>
          </div>
          <div className="flex flex-col px-20 pt-14 justify-center items-center">
            <div className="flex justify-center items-center flex-row gap-4 pb-9  ">
              <p className="pr-24">Hình đại diện</p>
              <div className="flex flex-col">
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
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              //   disabled
              style={{ maxWidth: 800 }}
              onFinish={handleUpdate}
            >
              <Form.Item label="Họ và tên" name="fullname">
                <Input placeholder={profile.profile?.fullName} />
              </Form.Item>
              <Form.Item name="phone" label="Số điện thoại">
                <Input
                  addonBefore={+84}
                  style={{ width: "100%" }}
                  placeholder={profile.profile?.phone}
                />
              </Form.Item>
              <Form.Item label="Email cá nhân" name="email">
                <Input placeholder={profile.profile.account?.email} />
              </Form.Item>
              <Form.Item label="Địa chỉ" name="address">
                <Input placeholder={profile.profile?.address} />
              </Form.Item>

              <Form.Item label="Giới tính" name="gender">
                <Radio.Group>
                  <Radio value="male"> Nam </Radio>
                  <Radio value="female"> Nữ </Radio>
                  <Radio value="others"> Khác </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Ngày sinh" name="dob">
                <DatePicker value={profile.profile.account?.dob} />
              </Form.Item>

              <div className="pl-14 gap-6 flex flex-col">
                <div className="flex flex-row gap-10">
                  <button className="Btn" onClick={() => showModal()}>
                    Thay đổi mật khẩu
                    <svg className="svg" viewBox="0 0 512 512">
                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                    </svg>
                  </button>
                  {loading === true ? (
                    <div className="un_Btn">
                      Xác nhận thay đổi
                      <svg className="svg" viewBox="0 0 512 512">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                      </svg>
                    </div>
                  ) : (
                    <button
                      className="Btn"
                      onClick={() => setIsEdit(true)}
                      htmlType="submit"
                    >
                      Xác nhận thay đổi
                      <svg className="svg" viewBox="0 0 512 512">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </Form>
          </div>
        </div>
      )}

      {/* CHANGE PASSWORD MODAL */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <>
            <Button onClick={handleCancel}>Hủy bỏ</Button>

            <Button onClick={handleChangePassword} type={"primary"}>
              Thay đổi
            </Button>
          </>,
        ]}
      >
        <h1>Thay đổi mật khẩu</h1>
        <div className="flex flex-col gap-4 px-8 py-8">
          <div className="flex flex-row gap-4">
            <p className="w-40">Mật khẩu cũ</p>
            <Input.Password
              placeholder="Nhập mật khẩu cũ"
              value={changePassData.oldPassword}
              onChange={onChangeInputChangePassword("oldPassword")}
            />
          </div>
          <div className="flex flex-row gap-4">
            <p className="w-40">Mật khẩu mới</p>
            <Input.Password
              placeholder="Nhập mật khẩu mới"
              value={changePassData.newPassword}
              onChange={onChangeInputChangePassword("newPassword")}
            />
          </div>
          <div className="flex flex-row gap-4">
            <p className="w-40">Xác nhận mật khẩu mới</p>
            <Input.Password
              placeholder="Nhập mật khẩu mới"
              value={changePassData.confirmPassword}
              onChange={onChangeInputChangePassword("confirmPassword")}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
