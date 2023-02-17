import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../page/LoginPage";
import { DashboardPage } from "../page/DashboardPage";
import { RegisterPage } from "../page/RegisterPage";
import { TechProvider } from "../providers/TechContext";


export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            
            
              <LoginPage />
            
          }
        ></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/dashboard" element={ <TechProvider> <DashboardPage /></TechProvider> }></Route>
      </Routes>
    </>
  );
}
