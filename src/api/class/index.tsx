import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "..";

const upladoImages = async (images: any, id: any) => {
  const formData = new FormData();
  images.forEach((imageData: any, index: number) => {
    console.log();
    formData.append(`files`, imageData.file);
  });
  formData.append(`courseId`, id.classId);
  console.log(id);
  if (formData) {
    const response = await axios.post(`${api}/api/class-upload-s3`, formData);
    return response;
  }
};

export const createClass = async (classDetails: any, images: any) => {
  const response = await axios.post(
    `${api}/api/class/create-class`,
    classDetails
  );
  if (response.status === 200) {
    const results: any = await upladoImages(images, response.data);
    if (results.data.status) {
      toast.success("New Class Added");
    }
    return 200;
  } else {
    toast.error("Failed");
    return 500;
  }

  console.log(response);
};

export const getClassesByEdu = async (userId: any) => {
  console.log(userId);
  try {
    const response = await axios.get(`${api}/api/courses`, {
      headers: {
        userId: userId,
      },
    });
    if (response.status === 200) {
      return response.data.classes;
    } else {
      throw new Error("No class Found");
    }
  } catch (err: any) {
    toast.error(`${err.message}`);
  }
};

export const getClassesById = async (classId: any) => {
  try {
    const response = await axios.get(`${api}/api/class/${classId}`);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error("No class Found");
    }
  } catch (err: any) {
    toast.error(`${err.message}`);
  }
};

export const enrollStudent = async (classDetails: any) => {
  try {
    const response = await axios.post(`${api}/api/class/enroll`, classDetails);
    if (response.status === 201) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error("enroll failed");
    }
  } catch (err: any) {
    toast.error(`${err.message}`);
  }
};

export const getAllClasses = async () => {
  try {
    const response = await axios.get(`${api}/api/class-all`);
    if (response.status === 200) {
      console.log(response.data.classes);
      return response.data.classes;
    } else {
      throw new Error("No class Found");
    }
  } catch (err: any) {
    toast.error(`${err.message}`);
  }
};
