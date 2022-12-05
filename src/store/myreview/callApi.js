import axios from "axios";
import domain from "../../utils/common";

export default function requestGetMyBlog(userId = "") {
  return axios.post(`${domain}/api/v1/reviews/review-in-user?sort=-createdAt`, {
    userId,
  });
}
