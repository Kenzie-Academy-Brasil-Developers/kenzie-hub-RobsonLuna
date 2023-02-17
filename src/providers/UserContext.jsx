import { createContext } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  async function loginForm(data) {
    try {
      const response = await api.post("/sessions", data);

      window.localStorage.clear();
      window.localStorage.setItem(
        "@TOKEN",
        JSON.stringify(response.data.token)
      );
      window.localStorage.setItem(
        "@USERID",
        JSON.stringify(response.data.user.id)
      );
      //
      setUserData(response.data.user);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
      // reset();
    }
  }

  const navigate = useNavigate();
  function registerPage() {
    navigate("/register");
  }

  async function registerFormSend(data) {
    try {
      const response = await api.post("/users", data);

      navigate("/");
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function previousPage() {
    navigate(-1);
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loginForm,
        registerPage,
        registerFormSend,
        previousPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
