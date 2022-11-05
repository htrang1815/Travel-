import React from "react";
import axios from "axios";

import Router from "./Router";
import ModalBox from "./components/modal/ModalBox";
import ModalShare from "./components/modal/ModalShare";

axios.defaults.withCredentials = true;
// Nếu bạn muốn sử dụng Cookie với Axios,
// bạn cần bao gồm thuộc tính withCredentials.
// => Lệnh này để thêm vào tất cả req withCredentials: true

const App = () => {
  return (
    <>
      <Router></Router>
      {/* <ModalBox></ModalBox> */}
      {/* <ModalShare></ModalShare> */}
    </>
  );
};

export default App;
