import React from "react";
import axios from "axios";

import Router from "./Router";
import ModalBox from "./components/modal/ModalBox";

axios.defaults.withCredentials = true;
// Nếu bạn muốn sử dụng Cookie với Axios,
// bạn cần bao gồm thuộc tính withCredentials.
// => Lệnh này để thêm vào tất cả req withCredentials: true

const App = () => {
  return (
    <>
      <Router></Router>
      {/* <ModalBox></ModalBox> */}
<<<<<<< HEAD
=======
      {/* <ModalShare></ModalShare> */}
>>>>>>> 31b9064113dc00dd5508ab52390859904896171a
    </>
  );
};

export default App;
