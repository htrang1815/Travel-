import axios from "axios";
import domain from "../../utils/common";

export default function requestGetGuideList() {
  return axios.get(`${domain}/api/v1/guides`);
}
