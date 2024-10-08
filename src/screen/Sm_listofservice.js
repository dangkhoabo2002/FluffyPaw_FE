import React, { useEffect, useState } from "react";
import {
  TrashIcon,
  PlusCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  Steps,
  Modal,
  Input,
  Select,
  Button,
  Image,
  Form,
  Skeleton,
  notification,
  Result,
  TimePicker,
  InputNumber,
  Spin,
} from "antd";
import UploadImg from "./tab/Component_upload_image";
import { LoadingOutlined, ExclamationCircleFilled } from "@ant-design/icons";

import axios from "axios";
import { duration } from "@mui/material";

const { TextArea } = Input;
const { confirm } = Modal;

export default function Sm_listofservic() {
  // NOTIFICATION
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    if (type === "warning") {
      api.warning({
        message: "Thông tin này không thể trống !",
        description: "Vui lòng nhập đầy đủ thông tin của bạn để tiếp tục.",
        placement: "bottomRight",
      });
    } else if (type === "success_add_service") {
      api.success({
        message: "Thêm dịch vụ thành công!",
        description: "Vui lòng đợi trong giây lát.",
        placement: "bottomRight",
      });
    } else if (type === "success_delete_service") {
      api.success({
        message: "Xóa dịch vụ thành công!",
        description: "Vui lòng đợi trong giây lát.",
        placement: "bottomRight",
      });
    } else if (type === "success_update_service") {
      api.success({
        message: "Chỉnh sửa dịch vụ thành công!",
        description: "Vui lòng đợi trong giây lát.",
        placement: "bottomRight",
      });
    } else if (type === "409_existed") {
      api.warning({
        message: "Dịch vụ cùng tên đã tồn tại ! ",
        description: "Vui lòng tạo lại dịch vụ khác.",
        placement: "bottomRight",
      });
    } else if (type === "unvalid_phone") {
      api.warning({
        message: "Sai định dạng số điện thoại !",
        description: "Vui lòng nhập đúng số điện thoại của bạn.",
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setServiceModal(false);
    setIsModalOpen(false);
    setStep(0);
    setAddData({
      name: "",
      serviceTypeId: 0,
      serviceTypeName: "",
      duration: "",
      durationRawDate: "",

      cost: 0,
      description: "",
      certificateDtos: "",
      isServiceImage: "",
    });
    setFileList(null);
    setFile(null);
    setPreviewUrl(null);
  };

  // GET LIST OF TYPE SERVICE
  const [listTypeService, setListTypeService] = useState();

  const optionTypeService = listTypeService?.map((item) => ({
    value: item?.id,
    label: item?.name,
  }));

  const handleGetTypeService = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://fluffypaw.azurewebsites.net/api/ServiceType/GetAllServiceType",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );
      if (response.status === 200) {
        setListTypeService(response.data.data);
        setLoading(false);
      }
    } catch (err) {
      openNotificationWithIcon(err.message);
      setLoading(false);
    }
  };
  // GET LIST SERVICE
  const [services, setServices] = useState([]);
  const [noService, setNoService] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleGetServices = async () => {
    try {
      const response = await axios.get(
        "https://fluffypaw.azurewebsites.net/api/Service/GetAllServiceBySM",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );
      if (response.status === 200) {
        setServices(response.data.data);
        setLoading(false);
      }
    } catch (err) {
      if (err.response.status === 404) setNoService(true);
      else openNotificationWithIcon(err.message);
      setLoading(false);
    }
  };

  // ADD SERVICE

  const [addData, setAddData] = useState({
    name: "",
    serviceTypeId: 0,
    serviceTypeName: "",
    duration: "",
    durationRawDate: "",
    cost: 0,
    description: "",
    certificateDtos: "",
    isServiceImage: "",
  });

  const handleChange = (value) => {
    setAddData((prevData) => ({
      ...prevData,
      serviceTypeId: value,
      serviceTypeName: listTypeService[value - 1].name,
    }));
  };

  const onChangeCost = (value) => {
    setAddData((prevData) => ({
      ...prevData,
      cost: value,
    }));
  };
  const onChangeAddData = (prop) => (event) => {
    setAddData({ ...addData, [prop]: event.target.value });
  };

  const onChangeDuration = (time, timeString) => {
    setAddData((prevData) => ({
      ...prevData,
      duration: timeString,
      durationRawDate: time,
    }));
  };

  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewUrls, setPreviewUrls] = useState([]);

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
  const handleFileListChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFileList(selectedFiles);
  };

  const resetAddCertImg = () => {
    setPreviewUrls(null);
    setFileList(null);
  };
  // API ADD SERVICE
  const [btnLoading, setBtnLoading] = useState(false);
  const handleAddServiceAPI = async () => {
    console.log(addData);
    setBtnLoading(true);
    const formData = new FormData();

    for (const key in addData) {
      formData.append(key, addData[key]);
    }

    // fileList?.forEach((file) => {
    //   formData.append("CertificateDtos", file);
    // });

    try {
      const response = await axios.post(
        "https://fluffypaw.azurewebsites.net/api/Service/CreateService",
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
        openNotificationWithIcon("success_add_service");
        handleGetServices();
        handleCancel();
        setBtnLoading(false);
      }
    } catch (error) {
      console.log(error);
      setBtnLoading(false);

      if (error.response.data.statusCode === 409)
        openNotificationWithIcon(error.response.data.message);
      else {
        openNotificationWithIcon(error.message);
      }
      console.error("Error creating service:", error.response.data);
    }
    setBtnLoading(false);
  };
  // SERVICE DETAIL
  const [serviceDetail, setServiceDetail] = useState();
  const [serviceModal, setServiceModal] = useState(false);

  const showServiceDetail = (service) => {
    setServiceDetail(service);
    setServiceModal(true);
  };

  const cancelServiceDetail = () => {
    setServiceModal(false);
    setServiceDetail();
  };

  // UPDATE SERVICE
  const [isUpdate, setUpdate] = useState(false);
  const [updateData, setUpdateData] = useState();

  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    setIsModalUpdateOpen(true);
    setUpdateData(values);
  };

  const cancelUpdateConfirm = () => {
    setIsModalUpdateOpen(false);
  };
  const [updateDuration, setUpdateDuration] = useState();
  const onChangeDurationUpdate = (time, timeString) => {
    setUpdateDuration(timeString);
  };

  const handleUpdateService = async () => {
    setDeleteService(true);

    // Tạo đối tượng FormData
    const formData = new FormData();
    formData.append(
      "serviceTypeId",
      updateData?.serviceTypeId || serviceDetail.serviceTypeId
    );
    formData.append("cost", updateData?.cost || serviceDetail.cost);
    formData.append("name", updateData?.name || serviceDetail.name);
    formData.append(
      "image",
      "https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png"
    );
    formData.append("duration", updateDuration || serviceDetail.duration);
    formData.append(
      "description",
      updateData?.description || serviceDetail.description
    );

    try {
      const response = await axios.patch(
        `https://fluffypaw.azurewebsites.net/api/Service/UpdateService/${serviceDetail.id}`,
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
        handleGetServices();
        openNotificationWithIcon("success_update_service");
        handleCancel();
        setUpdate(false);
        cancelUpdateConfirm();
        setDeleteService(false);
      }
    } catch (error) {
      openNotificationWithIcon(error.response.data.message);
      setDeleteService(false);
    }
  };

  // DELETE SERVICE
  const [deleteService, setDeleteService] = useState(false);
  const handleDeleteServiceAPI = async (serviceId) => {
    setDeleteService(true);
    try {
      const response = await axios.delete(
        `https://fluffypaw.azurewebsites.net/api/Service/DeleteService/${serviceId}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "undecode_access_token"
            )}`,
          },
        }
      );
      if (response.status === 200) {
        handleGetServices();
        openNotificationWithIcon("success_delete_service");
        handleCancel();
        setDeleteService(false);
      }
    } catch (error) {
      openNotificationWithIcon(error.response.data.message);
      setDeleteService(false);
    }
  };

  const showConfirm = (service) => {
    confirm({
      title: `Bạn có muốn xóa ${service.name}?`,
      icon: <ExclamationCircleFilled />,
      content:
        "Dịch vụ sẽ bị xóa khỏi thương hiệu và tất cả các cửa hàng của bạn.",
      okText: "Tôi chắc chắn",
      cancelText: "Hủy bỏ",
      onOk() {
        handleDeleteServiceAPI(service.id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // USE EFFECT
  useEffect(() => {
    handleGetServices();
    handleGetTypeService();
  }, []);

  // Next modal
  const [step, setStep] = useState(0);
  const handleStep = (action) => {
    if (action === "next") {
      // Step 1
      if (step === 0) {
        if (addData.name !== "" && addData.description !== "")
          setStep(step + 1);
        else openNotificationWithIcon("warning");
      }
      // Step 2
      else if (step === 1) {
        const [hours, minutes, seconds] = addData.duration
          ?.split(":")
          ?.map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const minAllowedSeconds = 15 * 60;
        if (totalSeconds < minAllowedSeconds) {
          openNotificationWithIcon(
            "Thời lượng của dịch vụ không được dưới 15 phút !"
          );
        } else if (addData.duration === "") {
          openNotificationWithIcon("Hãy nhập thời lượng dịch vụ !");
        } else if (addData.cost === 0) {
          openNotificationWithIcon("Hãy nhập giá tiền của dịch vụ !");
        } else if (addData.serviceTypeId === 0) {
          openNotificationWithIcon("Hãy chọn loại hình dịch vụ !");
        } else {
          setStep(step + 1);
        }
      }
      // Step 3
      else if (step === 2) {
        handleAddServiceAPI();
      }
    } else if (action === "previous") if (step !== 0) setStep(step - 1);
  };
  return (
    <div className="ml-[300px] mr-12 mt-6 px-6 pt-12 pb-24 flex flex-col shadow-md bg-white rounded-md">
      {contextHolder}
      <div className="flex flex-col px-11 justify-start ">
        <h1 className="pb-6">Danh sách các dịch vụ</h1>
        {loading === true ? (
          <Skeleton active />
        ) : (
          <div className="flex flex-row flex-wrap gap-6">
            {noService === true && (
              <>
                <div className="flex flex-row w-full justify-center">
                  <Result
                    status="404"
                    title="Bạn chưa có dịch vụ nào"
                    subTitle="Hiện tại thương hiệu của bạn chưa có dịch vụ nào, hãy chia sẻ thêm cho nhiều người biết đến nhé!"
                    extra={
                      <div className="w-full flex flex-row justify-center">
                        <button
                          data-ripple-light="true"
                          type="button"
                          onClick={showModal}
                          className="flex flex-row gap-2 px-3 py-2 justify-center items-center bg-[#f7d9ea] rounded-lg"
                        >
                          <PlusCircleIcon class="h-5 w-5" />
                          <p className="text-[16px] pb-1 font-semibold">
                            Thêm dịch vụ
                          </p>
                        </button>
                      </div>
                    }
                  />
                </div>
              </>
            )}
            {services?.map((service) => (
              <div className="pt-10" key={service.id}>
                <div className="relative flex w-60 flex-col rounded-xl bg-[#f7d9ea] bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    <img
                      alt="serviceImg"
                      className="w-full h-full object-cover"
                      src="https://phongkhamthuytenlua.vn/wp-content/uploads/2022/11/dich-vu-cham-soc-thu-cung-1.png"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-1 block font-sans text-[18px] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {service.name}
                    </h5>
                    <div className="flex flex-row justify-start gap-1 items-center font-[Itim] text-gray-500 text-[16px]">
                      <ClockIcon class="h-5 w-5 text-gray-500" />
                      {service.duration}
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex flex-row justify-between">
                    <button
                      data-ripple-light="true"
                      type="button"
                      className="select-none rounded-lg bg-[#ff7fa1] py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      onClick={() => showServiceDetail(service)}
                    >
                      Chi tiết dịch vụ
                    </button>
                    <button
                      onClick={() => showConfirm(service)}
                      data-ripple-light="true"
                      type="button"
                      className="select-none rounded-lg bg-white py-2 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      {deleteService === false ? (
                        <TrashIcon class="h-6 w-6 text-red-400" />
                      ) : (
                        <Spin size="small" class="h-6 w-6 text-red-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BUTTON ADD SERVICE */}

      {loading === true || noService === true ? (
        <></>
      ) : (
        <button
          data-ripple-light="true"
          type="button"
          onClick={showModal}
          className="flex flex-row gap-2 justify-center items-center fixed right-[126px] bottom-6 select-none rounded-3xl bg-[#ff7fa1] py-3 px-4 text-center align-middle font-sans text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <p className="text-[16px] pb-1">Thêm dịch vụ</p>
          <PlusCircleIcon class="h-8 w-8" />
        </button>
      )}

      {/* MODAL DETAIL SERVICE */}
      <Modal
        open={serviceModal}
        width={1200}
        onCancel={cancelServiceDetail}
        footer={[
          <>
            {isUpdate === false ? (
              <div className="flex flex-row gap-4 justify-end w-full">
                <button
                  disabled={deleteService}
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg border border-pink-200 bg-[#ffffff] py-[6px] px-3 text-center align-middle font-sans text-xs font-semibold text-black shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  onClick={() => setUpdate(!isUpdate)}
                >
                  Thay đổi thông tin
                </button>
                <button
                  disabled={deleteService}
                  onClick={() => showConfirm(serviceDetail)}
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg border border-pink-200 bg-[#ffffff] py-[6px] px-3 text-center align-middle font-sans text-xs font-semibold  text-black shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  {deleteService === true ? (
                    <Spin
                      indicator={<LoadingOutlined spin />}
                      size="small"
                      className="pr-2 text-gray-300"
                    />
                  ) : (
                    <></>
                  )}
                  Xóa dịch vụ
                </button>
                <button
                  disabled={deleteService}
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg border border-pink-200 bg-[#ffffff] py-[6px] px-3  text-center align-middle font-sans text-xs font-semibold  text-black shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Ẩn dịch vụ
                </button>
                <button
                  disabled={deleteService}
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg border border-pink-200 bg-[#f8e5e5] py-[6px] px-3  text-center align-middle font-sans text-xs font-semibold  text-black shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setUpdate(!isUpdate)}
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg border border-pink-200 bg-[#f8e5e5] py-[6px] px-3  text-center align-middle font-sans text-xs font-semibold  text-black shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Hủy
                </button>
              </>
            )}
          </>,
        ]}
      >
        {isUpdate === false ? (
          <>
            <h1 className="pl-10 pb-8">Chi tiết dịch vụ</h1>
            <div className="pb-12">
              <div className="px-11 w-full"></div>
              <div className="flex flex-row px-11 justify-evenly items-center">
                <div className="flex flex-row justify-start items-start gap-4">
                  <div className="flex flex-col gap-7">
                    <h1 className="text-[20px]">Dịch vụ</h1>
                    <h1 className="text-[20px]">Thời lượng</h1>
                    <h1 className="text-[20px]">Giá tiền</h1>
                    <h1 className="text-[20px]">Loại hình dịch vụ</h1>
                    <h1 className="text-[20px]">Số lượt đã đặt</h1>
                    <h1 className="text-[20px]">Đánh giá</h1>
                  </div>
                  <div className="flex flex-col gap-6 w-[200px] items-left">
                    <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                      <h1 className="text-pink-600 text-[16px]">
                        {serviceDetail?.name}
                      </h1>
                    </div>
                    <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                      <h1 className="text-pink-600 text-[16px]">
                        {serviceDetail?.duration}
                      </h1>
                    </div>

                    <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                      <h1 className="text-pink-600 text-[16px] flex flex-row gap-2">
                        {serviceDetail?.cost
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        <p>VNĐ</p>
                      </h1>
                    </div>
                    <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                      <h1 className="text-pink-600 text-[16px]">
                        {serviceDetail?.serviceTypeName}
                      </h1>
                    </div>
                    <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                      <h1 className="text-pink-600 text-[16px]">
                        {serviceDetail?.bookingCount}
                      </h1>
                    </div>
                    <div className="rounded-lg w-auto px-6 py-1 border border-gray-300">
                      <h1 className="text-pink-600 text-[16px]">
                        {serviceDetail?.totalRating}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-start gap-4">
                  <div className="flex flex-col gap-7">
                    <h1 className="text-[20px] pb-16">Hình ảnh dịch vụ</h1>
                    <h1 className="text-[20px] pb-8">Chứng nhận</h1>
                    <h1 className="text-[20px]">Mô tả</h1>
                  </div>
                  <div className="flex flex-col gap-6 w-[400px] items-left">
                    <Image
                      alt="ServiceImg"
                      width={150}
                      height={80}
                      src={serviceDetail?.image}
                    />
                    <div className="flex flex-row gap-2">
                      {/* {serviceDetail.certificate?.map((cer) => ( */}
                      <Image alt="CertImg" width={100} height={80} />
                      {/* ))} */}
                    </div>

                    <div
                      className="rounded-lg w-auto px-6 py-1 border border-gray-300 h-32"
                      style={{ overflow: "auto" }}
                    >
                      <h1 className="text-pink-600 text-[16px] ">
                        {serviceDetail?.description}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="pl-10 pb-8">Thay đổi thông tin dịch vụ</h1>
            <div className="pb-12">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 10,
                }}
                style={{
                  maxWidth: 760,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  wrapperCol={{ offset: 1 }}
                  label="Tên dịch vụ"
                  name="name"
                >
                  <Input placeholder={serviceDetail?.name} />
                </Form.Item>

                <Form.Item
                  wrapperCol={{ offset: 1 }}
                  label="Mô tả chi tiết"
                  name="description"
                >
                  <TextArea
                    showCount
                    maxLength={1500}
                    placeholder={serviceDetail?.description}
                    style={{
                      height: 220,
                      resize: "none",
                    }}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 1 }} label="Thời lượng">
                  <TimePicker
                    onChange={onChangeDurationUpdate}
                    needConfirm
                    showNow={false}
                    style={{ width: "250px" }}
                    placeholder={serviceDetail?.duration}
                  />
                </Form.Item>

                <Form.Item
                  wrapperCol={{ offset: 1 }}
                  label="Giá tiền"
                  name="cost"
                >
                  <div className="flex flex-col">
                    <InputNumber
                      min={10000}
                      max={999999999}
                      addonAfter="VNĐ"
                      placeholder={serviceDetail.cost}
                      style={{ width: "250px" }}
                      controls={false}
                    />
                    <p className="text-gray-400 w-48 text-[12px] pt-2">
                      * Số tiền tối thiểu là 10.000 VNĐ và tối đa là 999.999.999
                      VNĐ
                    </p>
                  </div>
                </Form.Item>

                <Form.Item
                  wrapperCol={{ offset: 1 }}
                  label="Loại hình dịch vụ"
                  name="serviceTypeId"
                >
                  <Select
                    showSearch
                    placeholder={serviceDetail?.serviceTypeName}
                    optionFilterProp="label"
                    style={{
                      width: "250px",
                    }}
                    options={optionTypeService}
                  />
                </Form.Item>

                <Form.Item
                  wrapperCol={{ offset: 1 }}
                  label="Hình ảnh dịch vụ"
                  name="imageService"
                >
                  <UploadImg limit={2} type={"card"} name={"addServiceImg"} />
                </Form.Item>
                <Form.Item
                  wrapperCol={{ offset: 1 }}
                  label="Giấy chứng nhận"
                  name="imageService"
                >
                  <UploadImg limit={2} type={"card"} />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </>
        )}
      </Modal>
      {/* MODAL ADD SERVICE */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        width={900}
        footer={
          <>
            <div className="flex flex-row justify-between px-10">
              {step === 0 ? (
                <div></div>
              ) : (
                <Button onClick={() => handleStep("previous")}>Quay lại</Button>
              )}

              <div className="flex flex-row gap-4 pr-[242px]">
                <Button onClick={() => handleCancel()}>Hủy</Button>
                {btnLoading === false ? (
                  <Button type="primary" onClick={() => handleStep("next")}>
                    {step === 2 ? "Hoàn tất" : "Tiếp tục"}
                  </Button>
                ) : (
                  <Button className="" disabled>
                    <Spin
                      indicator={<LoadingOutlined spin />}
                      size="small"
                      style={{ color: "gray" }}
                    />
                    Hoàn tất
                  </Button>
                )}
              </div>
            </div>
          </>
        }
      >
        <h1>Thêm dịch vụ</h1>
        <div className="flex flex-row justify-between items-center gap-20 py-7">
          {step === 0 && (
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-row justify-center items-center">
                <h1 className="text-[20px] w-[300px] text-right pr-10">
                  Tên dịch vụ
                </h1>
                <Input
                  placeholder="Tên gọi của dịch vụ"
                  size="large"
                  onChange={onChangeAddData("name")}
                  value={addData?.name}
                />
              </div>
              <div className="flex flex-row justify-start items-start">
                <h1 className="text-[20px] w-[300px] text-right pr-10">
                  Mô tả dịch vụ
                </h1>
                <TextArea
                  showCount
                  maxLength={1500}
                  placeholder="Mô tả dịch vụ của bạn"
                  style={{
                    height: 220,
                    resize: "none",
                  }}
                  value={addData?.description}
                  onChange={onChangeAddData("description")}
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-col items-start w-full gap-6">
              <div className="flex flex-row justify-start items-start">
                <h1 className="text-[20px] w-[300px] text-right pr-10">
                  Loại dịch vụ
                </h1>
                <Select
                  showSearch
                  placeholder="Chọn loại hình dịch vụ"
                  optionFilterProp="label"
                  onChange={handleChange}
                  style={{
                    width: "200px",
                  }}
                  value={addData?.serviceTypeName}
                  options={optionTypeService}
                />
              </div>
              <div className="flex flex-row justify-center items-center">
                <h1 className="text-[20px] w-[300px] text-right pr-10">
                  Thời lượng
                </h1>
                <TimePicker
                  onChange={onChangeDuration}
                  needConfirm
                  showNow={false}
                  value={addData?.durationRawDate}
                  style={{ width: "200px" }}
                  placeholder="Chọn thời lượng"
                />
              </div>
              <div className="flex flex-row justify-start items-start">
                <h1 className="text-[20px] w-[300px] text-right pr-10">
                  Giá tiền
                </h1>
                <div className="flex flex-col">
                  <InputNumber
                    min={10000}
                    max={999999999}
                    addonAfter="VNĐ"
                    value={addData.cost}
                    style={{ width: "200px" }}
                    onChange={onChangeCost}
                    controls={false}
                  />
                  <p className="text-gray-400 w-48 text-[12px] pt-2">
                    * Số tiền tối thiểu là 10.000 VNĐ và tối đa là 999.999.999
                    VNĐ
                  </p>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col items-center w-full gap-4 justify-center">
              <div className="flex flex-row justify-center items-start ">
                <h1 className="text-[20px] w-[400px] text-right pr-10">
                  Hình ảnh dịch vụ
                </h1>
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

              <div className="flex flex-row justify-center items-start pt-3">
                <h1 className="text-[20px] w-[400px] text-right pr-10">
                  Giấy chứng nhận
                </h1>
                <div className="flex flex-col">
                  <input
                    type="file"
                    id="fileInput2"
                    multiple
                    onChange={handleFileListChange}
                    style={{ display: "none" }}
                  />
                  {previewUrls?.length > 1 ? (
                    <button
                      style={{
                        cursor: "pointer",
                        padding: "6px 10px",
                        color: "gray",
                        border: "1px dashed pink",
                        textAlign: "center",
                        borderRadius: "12px",
                        width: "200px",
                      }}
                      className="shadow-md hover:shadow-none bg-[#ffe4f3] hover:bg-gray-200 "
                      onClick={() => resetAddCertImg()}
                    >
                      Hoàn tác
                    </button>
                  ) : (
                    <label
                      htmlFor="fileInput2"
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
                  )}

                  {previewUrls?.length > 0 && (
                    <div className="flex flex-col">
                      {previewUrls.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt={`Preview ${index}`}
                          style={{
                            maxWidth: "200px",
                            maxHeight: "200px",
                            marginTop: "20px",
                            borderRadius: "12px",
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="w-[300px] h-full">
            <Steps
              progressDot
              current={step}
              style={{ height: "320px " }}
              direction="vertical"
              items={[
                {
                  title: "Khởi tạo dịch vụ",
                },
                {
                  title: "Thông tin cơ bản",
                },
                {
                  title: "Bằng cấp / Chứng nhận",
                },
              ]}
            />
          </div>
        </div>
      </Modal>

      {/* MODAL UPDATE SERVICE */}
      <Modal
        title="Bạn muốn cập nhận nội dung mới cho dịch vụ ?"
        open={isModalUpdateOpen}
        onCancel={cancelUpdateConfirm}
        footer={[
          <>
            <Button onClick={cancelUpdateConfirm}>Hủy bỏ</Button>

            <Button type="primary" onClick={handleUpdateService}>
              {deleteService === true ? (
                <>
                  <LoadingOutlined /> Đồng ý
                </>
              ) : (
                <>Đồng ý</>
              )}
            </Button>
          </>,
        ]}
      >
        <p>
          Những trường để trống sẽ được tự động cập nhật với thông tin cũ của
          dịch vụ.
        </p>
      </Modal>
    </div>
  );
}
