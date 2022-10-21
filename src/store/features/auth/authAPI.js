import axios from "axios";
import { toast } from "react-toastify";

const globalAxios = axios.create({
  baseURL: "http://localhost:3001/api/",
});

globalAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const apiService = (url, method, data) => {
  return new Promise((resolve, reject) => {
    globalAxios({
      method,
      url,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    })
      .then((response) => {
        toast.success(response.data.message);
        resolve(response);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        reject(new Error(error.response.data.message));
      });
  });
};

export const login = (data) => {
  return apiService("/auth/login", "POST", data);
};

const authAPIs = {
  login,
};

export default authAPIs;
