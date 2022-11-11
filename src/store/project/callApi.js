import axios from "axios";
import domain from "../../utils/common";

export default function requestGetProject(projectId = "") {
  return axios.get(`${domain}/api/v1/projects/${projectId}`);
}

// B1: Vào thư mục store tạo 1 thư mục guide

// B2: Tạo 4 file
// + callApi.js
// + handlers.js
// + saga.js
// + Slice.js
