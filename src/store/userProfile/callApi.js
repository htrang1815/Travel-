import axios from "axios";
import domain from "../../utils/common";

export default function requestGetAllUserProfile() {
  return axios.get(`${domain}/api/v1/userprofile`);
}
