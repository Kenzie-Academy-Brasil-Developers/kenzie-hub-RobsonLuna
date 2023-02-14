import React from 'react'
import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../page/LoginPage';
import { DashboardPage } from '../page/DashboardPage';
import { RegisterPage } from '../page/RegisterPage';

 export function AppRoutes({setUserData, userData }){
    return(
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
            </>
    )
 }