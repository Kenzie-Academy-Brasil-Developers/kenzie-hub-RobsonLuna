import logo from "./logo.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./page/LoginPage";
import { DashboardPage } from "./page/DashboardPage";
import { RegisterPage } from "./page/RegisterPage";
import { useEffect, useState } from "react";
import { AppRoutes } from "./routes";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <AppRoutes setUserData={setUserData} userData={userData} />
      <ToastContainer />
    </>
  );
}

export default App;
