import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { api } from "..";
import { toast } from "react-toastify";


export const getEducatorDetails = async (userId: any) => {
  const response = await axios.get(`${api}/api/educator/${userId}`);

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Invalid User Id");
  }
};

export const updateEducatorDetails = async (educatorData: any) => {
  console.log(educatorData)
  const response = await axios.post(
    `${api}/api/educator/update-basic-details`,
    educatorData
  );

  if (response.status === 200) {
    toast.success("Updated");
  } else {
    throw new Error("Invalid User Id");
  }
};
