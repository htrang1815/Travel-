import axios from "axios";
import domain from "../../utils/common";

export default function requestGetMyBlog(userId = "") {
  return axios.post(`${domain}/api/v1/blogs/blog-in-user`, {
    userId,
  });
}
