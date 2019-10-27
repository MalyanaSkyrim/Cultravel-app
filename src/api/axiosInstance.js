import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5500/api"
});

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("x-access-token");
    config.headers["x-access-token"] = token;
    return config;
  },
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;
    if (
      err.response.status === 401 &&
      originalRequest.url === "http://localhost:5500/api/auth/user"
    ) {
      const oldRefreshToken = localStorage.getItem("x-refresh-token");
      const result = await axios.post("http://localhost:5500/api/auth/token", {
        refreshToken: oldRefreshToken
      });
      if (result.status === 201) {
        const { accessToken, refreshToken } = result.data;
        localStorage.setItem("x-access-token", accessToken);
        localStorage.setItem("x-refresh-token", refreshToken);
        originalRequest.headers["x-access-token"] = accessToken;
        return axios(originalRequest);
      }
    }
    return Promise.reject(err);
  }
);

export default instance;
