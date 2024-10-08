import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  DatePicker,
  InputNumber,
  Checkbox,
  message,
  Modal,
  Skeleton,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

export default function Po_petDetail_vaccine(petData) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // GET ALL VACCINE
  const [vaccineList, setVaccineList] = useState([]);
  const handleGetVaccineList = async () => {
    console.log(petData.petData?.id);
    setIsLoading(true);
    const url = `https://fluffypaw.azurewebsites.net/api/Vaccine/GetAllVaccineHistories/${petData.petData?.id}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "undecode_access_token"
          )}`,
        },
      });

      // Xử lý thành công
      if (response.status === 200) {
        setVaccineList(response.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    } catch (error) {
      if (error.response.data.statusCode === 404) setVaccineList(null);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  // DATE FORMAT
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  // GET VACCINE DETAIL
  const [vaccineDetail, setVaccineDetail] = useState();

  const handleGetVaccineDetail = async (id) => {
    console.log(petData.petData?.id);
    setIsLoading(true);
    const url = `https://fluffypaw.azurewebsites.net/api/Vaccine/GetVaccineDetail/${id}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "undecode_access_token"
          )}`,
        },
      });

      // Xử lý thành công
      if (response.status === 200) {
        console.log("vaccine:", response.data.data);
        setVaccineDetail(response.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const showModal = (id) => {
    handleGetVaccineDetail(id);
    setIsModalOpen(true);
  };

  // ADD VACCINE
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [vaccineDate, setVaccineDate] = useState();
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleOkAdd = () => {
    form.submit(); // Submit form khi bấm OK
  };

  const handleCancelAdd = () => {
    setIsModalVisible(false);
  };

  const onChangeVaccineDate = (date, dateString) => {
    console.log(dateString);
    setVaccineDate(dateString);
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
  const onFinish = async (values) => {
    try {
      console.log(values);
      console.log(petData.petData?.id);
      const formData = new FormData();
      formData.append("petId", petData.petData?.id);
      formData.append("petCurrentWeight", values.PetCurrentWeight);
      formData.append("vaccineDate", vaccineDate);
      formData.append("nextVaccineDate", "Không có");
      formData.append("description", values.Description || "Không có");
      if (file) {
        formData.append("image", file);
      }

      // Gửi API với multipart/form-data
      const response = await axios.post(
        "https://fluffypaw.azurewebsites.net/api/Vaccine/AddVaccine",
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
      message.success("Form submitted successfully!");
      setIsModalVisible(false); // Ẩn modal khi submit thành công
    } catch (error) {
      console.error(error);
      message.error("Failed to submit form!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // USE EFFECT
  useEffect(() => {
    handleGetVaccineList();
  }, []);
  return (
    <div>
      <div className="flex flex-col pl-20 gap-12">
        <div className="flex flex-row justify-between items-center pr-48">
          <h1 className="text-3xl">Lịch sử tiêm chủng</h1>
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size="medium"
            onClick={() => setIsModalVisible(true)}
          >
            Thêm vaccine đã tiêm
          </Button>
        </div>
        {isLoading === true ? (
          <Skeleton active className="pr-48" />
        ) : (
          <>
            {Array.isArray(vaccineList) &&
              vaccineList.length > 0 &&
              vaccineList?.map((vaccine) => (
                <div className="flex flex-col gap-6" key={vaccine.id}>
                  <div
                    className=" border-2 rounded-2xl overflow-hidden"
                    style={{
                      width: "80%",
                      height: "200px",
                      display: "grid",
                      gridTemplateColumns: "1fr 2fr 1fr",
                    }}
                  >
                    <div>
                      <img
                        style={{
                          width: "280px",
                          height: "220px",
                          objectFit: "cover",
                        }}
                        alt="vaccine"
                        src="https://product.hstatic.net/200000101597/product/2_f077878252fa4a41a320986ca15e9c3e_master.png"
                      />
                    </div>
                    <div className=" pl-6 py-4">
                      <p className="font-bold text-lg">
                        Tên nhãn vắc-xin: Feline Rhinotrcheitis
                      </p>
                      <p className="text-[#808080]">
                        Loại bệnh: 4 bệnh ở mèo FCV{" "}
                      </p>
                      <p className="pt-12">
                        {vaccine?.status === "Incomplete" ? (
                          <p className="font-semibold text-red-600">
                            Chưa hoàn thành
                          </p>
                        ) : (
                          <p className="font-semibold text-green-600">
                            Đã hoàn thành
                          </p>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between pt-4 pb-10 pl-6 items-center">
                      <p className="text-[#808080]">
                        {formatDate(vaccine?.vaccineDate)}
                      </p>
                      <Button onClick={() => showModal(vaccine?.id)}>
                        Chi tiết
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}

        {/* ---------- Modal Detail ----------------*/}
        <Modal
          title="Thông tin tiêm chủng"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={620}
          okText="Đóng"
          cancelText="Xóa thông tin"
        >
          <div className="flex flex-row pt-4 px-4">
            <div className="flex flex-col justify-left pt-10">
              <ul class="list-disc ">
                <p className="font-bold">
                  Tên nhãn vắc-xin: Feline Rhinotrcheitis
                </p>
                <p className="text-[#808080]">Loại bệnh: 4 bệnh ở mèo</p>
                <div className="pl-10 pt-4">
                  <li>FCV (Feline Calicici Virus)</li>
                  <li>FRV (Feline Rhinotrachetis Viral)</li>
                  <li>FPV (Feline Panleucopenia Virus)</li>
                  <li>Chlamydia psittaci</li>
                </div>
              </ul>
            </div>
            <div className="ml-10">
              <div className="flex flex-col pt-10">
                <h2 className="font-bold pb-1">Hình ảnh minh chứng:</h2>
                <img
                  alt="evidence"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeELX4RfSJDmFhOX-fNJNt7spTK1m6XTxVA&s"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-4">
            <div className="flex flex-row">
              <div className="flex flex-col pt-10 font-bold gap-2">
                <p>Cân nặng :</p>
                <p>Nhiệt độ : </p>
                <p>Ngày tiêm : </p>
                <p>Ngày tái chủng: </p>
                <p>Tình trạng: </p>
                <p>Ghi chú: </p>
              </div>

              <div className="flex flex-col pl-7 pt-10 w-[200px] gap-2">
                <p> {vaccineDetail?.petCurrentWeight}kg </p>
                <p>38,2 *C</p>
                <p> {formatDate(vaccineDetail?.vaccineDate)}</p>
                <p> {formatDate(vaccineDetail?.nextVaccineDate)}</p>
                {vaccineDetail?.status === "Incomplete" ? (
                  <p className="text-red-600 font-semibold">Chưa hoàn thành</p>
                ) : (
                  <p className="text-red-600 font-semibold"> Đã hoàn thành </p>
                )}
                <p> {vaccineDetail?.description}</p>
              </div>
            </div>
          </div>
        </Modal>

        {/* ---------- Modal Add Vaccine ----------------*/}

        <Modal
          title="Pet Information"
          open={isModalVisible}
          onOk={handleOkAdd}
          onCancel={handleCancelAdd}
          okText="Submit"
          cancelText="Cancel"
        >
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Cân nặng khi tiêm"
              name="petCurrentWeight"
              rules={[
                { required: true, message: "Hãy nhập cân nặng lúc tiêm." },
              ]}
            >
              <InputNumber min={0} addonAfter="kg" width={100} />
            </Form.Item>

            <p>Ngày tiêm</p>
            <DatePicker onChange={onChangeVaccineDate} />

            <Form.Item label="Ngày tái chủng" name="nextVaccineDate">
              <DatePicker />
            </Form.Item>

            <Form.Item label="Ghi chú" name="description">
              <Input />
            </Form.Item>

            <Form.Item label="Hình ảnh" name="image" valuePropName="file">
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
          </Form>
        </Modal>
      </div>
    </div>
  );
}
