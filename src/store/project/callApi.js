import axios from "axios";
import domain from "../../utils/common";

export default function requestGetProject(projectId = "") {
  return axios.get(`${domain}/api/v1/projects/${projectId}`);
}
