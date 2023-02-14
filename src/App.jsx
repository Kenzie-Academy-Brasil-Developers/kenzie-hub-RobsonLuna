import logo from "./logo.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import {LoginPage } from "./page/LoginPage"
import { DashboardPage } from "./page/DashboardPage";
import { RegisterPage } from "./page/RegisterPage";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage setUserData={setUserData} />}>
          {" "}
        </Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/dashboard"
          element={
            <DashboardPage setUserData={setUserData} userData={userData} />
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
