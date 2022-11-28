import axios from "axios";
import domain from "../../utils/common";

export default function requestGetAllReview() {
  return axios.get(`${domain}/api/v1/reviews`);
}
