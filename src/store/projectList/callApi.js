import axios from "axios";
import domain from "../../utils/common";

export default function requestGetProjecList() {
  return axios.get(`${domain}/api/v1/projects`);
}
