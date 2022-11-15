import axios from "axios";
import domain from "../../utils/common";

export default function requestGetReviewInAGuide(guideId = "") {
  return axios.get(`${domain}/api/v1/guides/${guideId}/reviews`);
}
