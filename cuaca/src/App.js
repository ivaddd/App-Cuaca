import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Fragment } from "react";

import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/components/Nav/Home";
import NotFound from "./components/NotFound";
import API from "./components/Home/components/API/API";
import Region from "./components/Home/components/Region-Weather";

function App() {
  const nama = localStorage.getItem("nama");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const password = localStorage.getItem("password"); //memanggil localStorage di app

  const login = localStorage.getItem("isLogin");
  console.log(nama, email, phone, password); //memanggil di console
  if (login === undefined) {
    localStorage.setItem("isLogin", "0");
  }

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/region" element={<Region />} />
          <Route path="/API" element={<API />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* {nama === null && email === null ? <Register /> : null}
      {login === "1" && nama !== null ? <Login /> : null}
      {login === "2" && nama !== null ? <Region /> : null} */}
      {/* <API></API> */}
      {/* <Nav /> */}
      {/* <Region /> */}
    </Fragment>
  );
}
export default App;
