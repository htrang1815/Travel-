import axios from "axios";
import domain from "../../utils/common";

export default function requestGetGuide(guideId = "") {
  return axios.get(`${domain}/api/v1/guides/${guideId}`);
}
