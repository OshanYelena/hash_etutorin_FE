import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "..";
const userDa = {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirmPassword: String,
  phoneNumber: String,
  role: String,
};

export const newUserRegister = async (userData: any, studentRole: boolean) => {
  const userDataWithRole = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
    confirmPassword: userData.confirmPassword,
    phoneNumber: userData.phoneNumber,
    role: studentRole ? "student" : "educator",
  };
  const response = await toast.promise(
    axios.post(`${api}/api/auth/signup`, userDataWithRole),
    {
      pending: "Submiting",
      success: "User Created",
      error: "Submt Failed",
    }
  );
};

export const userLogin = async (userData: any) => {
  try {
    const response = await toast.promise(
      axios.post(`${api}/api/auth/signin`, userData),
      {
        pending: "Loging",
        success: "User Logged",
      }
    );

    if (response.status === 200) {
      if (typeof window !== "undefined") {
        console.log("You are on the browser");
        // 👉️ can use localStorage here

        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("userRole", response.data.roles);
      } else {
        console.log("You are on the server");
        // 👉️ can't use localStorage
      }

      window.location.reload();
    } else {
      throw new Error("Invald userName or Password");
    }
  } catch (err: any) {
    console.log("hello", err);
    toast.error("Invalid Username Or Password", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
