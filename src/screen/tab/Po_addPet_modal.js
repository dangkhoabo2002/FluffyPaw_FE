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

  const [dob, setDob] = useState();
  const onChangeDate = (date, dateString) => {
    setDob(dateString);
  };
  // --------- Pet Type --------------

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [form] = Form.useForm();

  // ------ADD MORE PET-----------
  const [loading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    setIsLoading(true);
    console.log(values);
    try {
      const response = await axios.post(
        `https://fluffypaw.azurewebsites.net/api/Pet/AddPet`,
        {
          image: "string",
          petCategoryId: values?.petCategoryId,
          petTypeId: values?.petTypeId,
          behaviorCategoryId: values?.behaviorCategoryId,
          name: values?.name,
          sex: values?.sex,
          weight: values?.weight,
          dob: dob,
          allergy: values?.allergy,
          microchipNumber: values?.microchipNumber,
          decription: values?.decription,
          isNeuter: value?.isNeuter,
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
        openNotificationWithIcon("success");
        setTimeout(() => {
          setIsLoading(false);
          navigate(0);
        }, 2000);
      }
    } catch (err) {
      console.log(err.message);
      openNotificationWithIcon(err.message);
      setIsLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // GET BEHAVIORS
  useEffect(() => {
    handleGetBehaviorList();
  }, []);

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
  return (
    <>
      {contextHolder}
      <Form
        layout={"horizontal"}
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        style={{ width: "100%" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="flex flex-row ">
          <div className="flex flex-col w-full gap-2">
            <Form.Item label="Hình ảnh thú cưng" name="image">
              <UploadImg limit={2} type={"card"} />
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
                <Radio value={"Felmale"}>Cái</Radio>
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
              <InputNumber min={1} max={30} />
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
              {value === 2 ? (
                <>
                  <Select
                    options={[
                      { value: "1", label: "Mèo Xiêm" },
                      { value: "2", label: "Mèo Anh lông ngắn" },
                      { value: "3", label: "Mèo Anh lông dài" },
                      { value: "4", label: "Mèo Ai Cập" },
                      { value: "5", label: "Mèo Ba Tư" },
                      { value: "6", label: "Mèo Bali" },
                      { value: "7", label: "Mèo Bengal" },
                      { value: "8", label: "Mèo Scottish Fold" },
                      { value: "9", label: "Mèo Munchkin" },
                      { value: "10", label: "Mèo mướp" },
                      { value: "11", label: "Mèo Ragdoll" },
                      { value: "12", label: "Mèo Maine Coon" },
                      { value: "13", label: "Mèo Angora" },
                      { value: "14", label: "Mèo Laperm" },
                      { value: "15", label: "Mèo Somali" },
                      { value: "16", label: "Mèo Toyger" },
                      { value: "17", label: "Mèo Turkish Van" },
                      { value: "18", label: "Mèo Miến Điện" },
                      { value: "20", label: "Mèo Exotic" },
                    ]}
                  />
                </>
              ) : (
                <>
                  <Select
                    options={[
                      { value: "21", label: "Chó Chihuahua" },
                      { value: "22", label: "Chó Bắc Kinh" },
                      { value: "23", label: "Chó Bắc Kinh lai Nhật" },
                      {
                        value: "24",
                        label: "Chó Dachshund (Lạp Xưởng/Xúc Xích)",
                      },
                      { value: "25", label: "Chó Phú Quốc" },
                      { value: "26", label: "Chó Poodle" },
                      { value: "27", label: "Chó Pug" },
                      { value: "28", label: "Chó Alaska" },
                      { value: "29", label: "Chó Husky" },
                      { value: "30", label: "Chó Samoyed" },
                      { value: "31", label: "Chó Pomeranian (Phốc sóc)" },
                      { value: "32", label: "Chó Beagle" },
                      { value: "33", label: "Chó Shiba Inu" },
                      { value: "34", label: "Chó Golden Retriever" },
                      { value: "35", label: "Chó Becgie" },
                      { value: "36", label: "Chó Corgi" },
                      { value: "37", label: "Chó Mông Cộc" },
                    ]}
                  />
                </>
              )}
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
              name="dob"
              rules={[
                {
                  required: true,
                  message: "Hãy chọn ngày sinh của thú cưng!",
                },
              ]}
            >
              <DatePicker onChange={onChangeDate} />
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
