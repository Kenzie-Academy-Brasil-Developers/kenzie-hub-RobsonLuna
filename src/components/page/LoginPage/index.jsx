import Logo from "../../img/logoKenzieHub.svg";
import { InputAlign } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Input from "../../Input";
import { Form, FormLogin } from "../../FormLogin";
import { BackgroundPage, LogoKenzie, RegisterTitle } from "./style";
import { Label } from "../../Label";
import { Button } from "../../Button";
import { MainContainer } from "./style";
import { FormTitle } from "./style";

export function LoginPage({ setUserData }) {
 

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

  const navigate = useNavigate();
  function registerPage() {
    
    navigate("/register");
  }
  return (
    <>
      <BackgroundPage>
        <LogoKenzie alt="Logo Kenzie Hub" src={Logo} />
        <MainContainer>
          <FormTitle>Login</FormTitle>

          <form styled="formLoginPage" onSubmit={handleSubmit(loginForm)}>
            <InputAlign>
              <Label htmlFor="email" text="Email"></Label>

              <Input
                id="email"
                type="text"
                placeholder="Digite seu Email"
                {...register("email")}
                error={errors.email?.message}
              />
            </InputAlign>

            <InputAlign>
              <Label htmlFor="password" text="Senha"></Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
                error={errors.password?.message}
              />
            </InputAlign>

            <Button type="submit" text="Entrar" styled="Login">
              Entrar
            </Button>
          </form>

          <RegisterTitle>Ainda não tem conta?</RegisterTitle>
          <Button
            click={registerPage}
            text="Cadastre-se"
            styled="RegisterPage"
          ></Button>
        </MainContainer>
      </BackgroundPage>
    </>
  );
}
