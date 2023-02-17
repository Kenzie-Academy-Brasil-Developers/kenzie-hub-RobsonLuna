import logo from "./logo.svg";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppRoutes } from "./routes";

function App() {
  ;

  return (
    <>
      <AppRoutes  />
      <ToastContainer />
    </>
  );
}

export default App;
