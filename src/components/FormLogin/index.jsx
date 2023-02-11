import Input from "../Input";
import { InputAlign } from "../page/LoginPage/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export function FormLogin({ styled, onSubmit }) {
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

  switch (styled) {
    case "formLoginPage":
      return (
        <form onSubmit={onSubmit}>
          <InputAlign>
            <label htmlFor="email">Email</label>

            <Input
              id="email"
              type="text"
              placeholder="Digite seu Email"
              {...register("email")}
              error={errors.email?.message}
            />
          </InputAlign>

          <InputAlign>
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type="text"
              placeholder="Digite sua senha"
              {...register("password")}
              error={errors.password?.message}
            />
          </InputAlign>

          <button type="submit">Entrar</button>
        </form>
      );

    default:
  }
}
