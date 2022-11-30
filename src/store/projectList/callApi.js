import axios from "axios";
import domain from "../../utils/common";

export default function requestGetProjecList(data = {}) {
  const { query} = data;

  if (query && query.length > 0) {
    return axios.get(`${domain}/api/v1/projects?name=${query}`);
  } else {
    return axios.get(`${domain}/api/v1/projects?`);
  }
}
