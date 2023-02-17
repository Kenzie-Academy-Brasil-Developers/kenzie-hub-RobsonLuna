import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../page/LoginPage";
import { DashboardPage } from "../page/DashboardPage";
import { RegisterPage } from "../page/RegisterPage";
import { SchemaLoginProvider } from "../providers/SchemaLoginContext";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            
            <SchemaLoginProvider>

              <LoginPage />
            </SchemaLoginProvider>
            
          }
        ></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </>
  );
}
