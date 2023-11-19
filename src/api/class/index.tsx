import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "..";

export const createClass = async (classDetails: Object) => {
  const response = await axios.post(
    `${api}/api/class/create-class`,
    classDetails
  );

  if (response.status === 200) {
    toast.success("New Class Added");
    return 200;
  } else {
    toast.error("Failed");
    return 500;
  }
};

export const getClassesByEdu = async (userId: any) => {
  console.log(userId)
  try {
    const response = await axios.get(`${api}/api/courses`, {
      headers: {
        "userId": userId,
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
    
      return response.data;
    } else {
      throw new Error("No class Found");
    }
  } catch (err: any) {
    toast.error(`${err.message}`);
  }
};