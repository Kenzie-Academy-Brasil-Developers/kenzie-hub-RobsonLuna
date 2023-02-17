import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./providers/UserContext";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <BrowserRouter>


    <UserProvider>


      <App  />

    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
