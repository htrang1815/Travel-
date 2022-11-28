import axios from "axios";
import domain from "../../utils/common";

export default function requestGetReviewList() {
    return axios.get(`${domain}/api/v1/reviews`);
}
