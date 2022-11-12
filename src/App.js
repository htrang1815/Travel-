import React from "react";
import axios from "axios";

import Router from "./Router";

axios.defaults.withCredentials = true;
// Nếu bạn muốn sử dụng Cookie với Axios,
// bạn cần bao gồm thuộc tính withCredentials.
// => Lệnh này để thêm vào tất cả req withCredentials: true

const App = () => {
  return (
    <>
      <Router></Router>
    </>
  );
};

export default App;
