import Logo from "../../img/logoKenzieHub.svg";
import { InputAlign } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function LoginPage({setUserData}) {

   
     //função (objeto)

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
    console.log(data);
    try {
      const response = await api.post("/sessions", data);

      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      window.localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
    //   console.log(response.data.token);
      setUserData(response.data.user)
      console.log(response.data.user)
    
      navigate("/dashboard")
    //   toast.success("Login efetuado!")  
    } catch (error) {
     
      toast.error(error.response.data.message);
      reset();
    } finally {
      // console.log(error.)
    }
  }


  const navigate = useNavigate();
  function registerPage() {
    // toast("Crie sua conta");
    navigate("/register");
  }
  return (
    <>
      <img alt="Logo Kenzie Hub" src={Logo}></img>

      <h2>Login</h2>

      <form onSubmit={handleSubmit(loginForm)}>
        <InputAlign>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Digite seu Email"
            type="text"
            {...register("email")}
          ></input>
          <p>{errors.email?.message}</p>
        </InputAlign>

        <InputAlign>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="text"
            placeholder="Digite sua senha"
            {...register("password")}
          ></input>
          <p>{errors.password?.message}</p>
        </InputAlign>

        <button type="submit">Entrar</button>
      
      </form>

      <p>Ainda não tem conta?</p>
      <button onClick={registerPage}>Cadastre-se</button>
      
    </>
  );
}
