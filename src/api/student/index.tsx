import { api } from '../index';
import axios from 'axios'
import { toast } from 'react-toastify';


export const getClassByStudent = async (userId: any) => {

    try {
      const response = await axios.get(`${api}/api/student/get-all-classes/${userId}`);
      if (response.status === 200) {
        console.log(response.data)
        return response.data;
      } else {
        // throw new Error("No class Found");
      }
    } catch (err: any) {
      toast.error(`${err.message}`);
    }
  };