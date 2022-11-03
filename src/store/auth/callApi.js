import axios from "axios";

export default function requestGetLogin() {
  return axios.get("http://localhost:3002/api/v1/users/isLogin", {
    withCredentials: true,
  });
}
