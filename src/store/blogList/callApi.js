import axios from "axios";
import domain from "../../utils/common";

export default function requestGetBlogList() {
  return axios.get(`${domain}/api/v1/blogs`);
}
