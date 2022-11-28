import axios from "axios";
import domain from "../../utils/common";

export default function requestGetBlogList() {
  // if (page){
  //   return axios.get(`${domain}/api/v1/blogs?page=${page}`);
  // }
  // else {
    return axios.get(`${domain}/api/v1/blogs`);
  // }
}
