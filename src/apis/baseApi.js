import axios from "axios";

const getAccessToken = () => {
  let user = window.localStorage.getItem("user");
  let token = "";
  if (user && user !== "") token = JSON.parse(user).token;
  return token;
};

export const axiosInstance = axios.create({
  baseURL: "http://167.71.211.204:3000/api/v1",
});

axiosInstance.interceptors.request.use(
  function (config) {
    let accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
