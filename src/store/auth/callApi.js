import axios from "axios";
import domain from "../../utils/common";

export default function requestGetLogin() {
  return axios.get(`${domain}/api/v1/users/isLogin`, {
    withCredentials: true,
  });
}
