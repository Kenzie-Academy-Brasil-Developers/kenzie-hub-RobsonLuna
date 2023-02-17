import { createContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const SchemaLoginContext = createContext({});

export function SchemaLoginProvider({ children }) {
  const navigate = useNavigate();

  const { setUserData } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Informe um email")
      .email("Digite um formato de email válido"),
    password: yup.string().required("Informe sua senha"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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
      reset();
    }
  }


  return (
    <SchemaLoginContext.Provider value={{navigate, setUserData,formSchema, register,handleSubmit,reset, loginForm, errors }}> {children}</SchemaLoginContext.Provider>
  );
}
