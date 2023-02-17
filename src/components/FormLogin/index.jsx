import Input from "../Input";
import { InputAlign } from "../../page/LoginPage/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Label } from "../Label";
import { Button } from "../Button";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";


export function FormLogin() {

  const { userData, setUserData, loginForm, registerPage } =
  useContext(UserContext);

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

  function onSubmit(data){
    loginForm(data)
    reset()
  }

  return (
    <form styled="formLoginPage" onSubmit={handleSubmit(onSubmit)}>
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
  );
}
