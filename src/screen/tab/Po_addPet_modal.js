import React, { useState, useEffect } from "react";
import {
  Radio,
  Input,
  InputNumber,
  Select,
  Form,
  DatePicker,
  notification,
  Button,
} from "antd";
import UploadImg from "./Component_upload_image";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

export default function AddPet_modal() {
  const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    if (type === "warning") {
      api.warning({
        message: "Thông tin này không thể trống !",
        description: "Vui lòng nhập đầy đủ thông tin của bạn để tiếp tục.",
        placement: "bottomRight",
      });
    } else if (type === "success") {
      api.success({
        message: "Thêm thú cưng thành công!",
        description: "Vui lòng đợi trong giây lát.",
        placement: "bottomRight",
      });
    } else if (type === "unvalid_username") {
      api.warning({
        message: "Sai định dạng tên tài khoản !",
        description: "Vui lòng nhập tối thiểu 8 kí tự và tối đa 100 kí tự.",
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

  const [behaviors, setBehaviors] = useState();

  const options = behaviors?.map((item) => ({
    value: item?.id,
    label: item?.name,
  }));

  const handleGetBehaviorList = async () => {
    try {
      const response = await axios.get(
        `https://fluffypaw.azurewebsites.net/api/Pet/GetAllBehavior`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );
      setBehaviors(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // --------- Pet Type --------------

  const [value, setValue] = useState();
  const [catTypes, setCatTypes] = useState();
  const [dogTypes, setDogTypes] = useState();
  const petOptions =
    value === 1
      ? dogTypes?.map((item) => ({
          value: item?.id,
          label: item?.name,
        }))
      : value === 2
      ? catTypes?.map((item) => ({
          value: item?.id,
          label: item?.name,
        }))
      : [];

  const onChange = async (e) => {
    setValue(e.target.value);
  };

  const handleGetDogType = async (pet) => {
    try {
      const response = await axios.get(
        `https://fluffypaw.azurewebsites.net/api/Pet/GetAllPetTypeByPetCategory/${pet}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );

      // Xử lý phản hồi nếu cần
      if (response.status === 200) {
        const typeList = response.data.data;

        if (pet === 1) {
          setDogTypes(typeList);
        } else {
          setCatTypes(typeList);
        }
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  // ------ADD MORE PET-----------
  const [dobString, setDob] = useState();
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
  const onChangeDate = (date, dateString) => {
    setDob(dateString);
  };
  const [loading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("petTypeId", values.petTypeId);
      formData.append("behaviorCategoryId", values.behaviorCategoryId);
      formData.append("name", values.name);
      formData.append("sex", values.sex);
      formData.append("weight", values.weight);
      formData.append("dob", dobString);
      formData.append("allergy", values.allergy);
      formData.append("microchipNumber", values.microchipNumber || "none");
      formData.append("decription", values.decription || "none");
      formData.append("isNeuter", values.isNeuter);

      if (file) {
        formData.append("petImage", file);
      }
      const response = await axios.post(
        "https://fluffypaw.azurewebsites.net/api/Pet/AddPet",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        openNotificationWithIcon("success");
        setTimeout(() => {
          setIsLoading(false);
          navigate(0);
        }, 2000);
      }
    } catch (err) {
      openNotificationWithIcon(err.response.data.message);
      setIsLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // GET BEHAVIORS
  useEffect(() => {
    handleGetBehaviorList();
    handleGetDogType(1);
    handleGetDogType(2);
  }, []);

  return (
    <>
      {contextHolder}
      <Form
        layout={"horizontal"}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        style={{ width: "100%" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="flex flex-row ">
          <div className="flex flex-col w-full gap-2">
            <Form.Item label="Hình ảnh thú cưng">
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
            </Form.Item>
            <Form.Item
              label="Chủng loài"
              name="petCategoryId"
              rules={[
                {
                  required: true,
                  message: "Hãy chọn loại thú cưng!",
                },
              ]}
            >
              <Radio.Group name="petCategoryId" onChange={onChange}>
                <Radio value={1}>Chó</Radio>
                <Radio value={2}>Mèo</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Tên của thú cưng"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Hãy điền tên của thú cưng!",
                },
              ]}
            >
              <Input placeholder="Nhập vào đây" />
            </Form.Item>
            <Form.Item
              label="Giới tính"
              name="sex"
              rules={[
                {
                  required: true,
                  message: "Hãy chọn giới tính của thú cưng!",
                },
              ]}
            >
              <Radio.Group name="sex">
                <Radio value={"Male"}>Đực</Radio>
                <Radio value={"Female"}>Cái</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Cân nặng"
              name="weight"
              rules={[
                {
                  required: true,
                  message: "Hãy điền cân nặng của thú cưng!",
                },
              ]}
            >
              <InputNumber
                min={1}
                max={30}
                addonAfter="kg"
                style={{ width: "100px" }}
              />
            </Form.Item>
            <Form.Item
              label="Giống loài"
              name="petTypeId"
              rules={[
                {
                  required: true,
                  message: "Hãy chọn giống loài của thú cưng!",
                },
              ]}
            >
              <>
                <Select options={petOptions} />
              </>
            </Form.Item>
          </div>
          <div className="flex flex-col w-full gap-2">
            <Form.Item
              label="Triệt sản"
              name="isNeuter"
              rules={[
                {
                  required: true,
                  message: "Hãy cho biết thú cưng đã triệt sản chưa!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value={true}>Đã triệt sản</Radio>
                <Radio value={false}>Chưa triệt sản</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Ngày sinh"
              rules={[
                {
                  required: true,
                  message: "Hãy chọn ngày sinh của thú cưng!",
                },
              ]}
            >
              <DatePicker onChange={onChangeDate} showNow={false} />
            </Form.Item>
            <Form.Item label="Mã số chip" name="microchipNumber">
              <Input placeholder="Nhập tại đây" />
            </Form.Item>
            <Form.Item
              label="Dị ứng"
              name="allergy"
              rules={[
                {
                  required: true,
                  message: "Thú cưng của bạn có bị dị ứng gì không ?",
                },
              ]}
            >
              <Input placeholder="Nhập tại đây" />
            </Form.Item>
            <Form.Item
              label="Hành vi đặc biệt"
              name="behaviorCategoryId"
              rules={[
                {
                  required: true,
                  message: "Thú cưng của bạn có hành vi đặc biệt gì không ?",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Chọn một hành vi"
                optionFilterProp="label"
                options={options}
              />
            </Form.Item>

            <Form.Item label="Ghi chú">
              <TextArea rows={4} maxLength={3000} className="max-h-96" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-row w-full justify-end mb-[-44px] pr-1">
          <Button type="primary" htmlType="submit" loading={loading}>
            Thêm thú cưng
          </Button>
        </div>
      </Form>
    </>
  );
}
