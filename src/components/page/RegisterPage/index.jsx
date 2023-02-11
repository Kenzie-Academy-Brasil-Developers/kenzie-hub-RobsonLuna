import Logo from "../../img/logoKenzieHub.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { InputTextAlign } from "./style";

export function RegisterPage() {
  const navigate=useNavigate()

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome"),
    email: yup
      .string()
      .required("Informe seu email")
      .email("Digite um formato de email válido"),
    password: yup
      .string()
      .required("Informe sua senha")
      .matches(/.{8,}/, "a senha deve conter pelo menos 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),
    bio: yup.string().required("Escreva um pouco sobre você"),
    contact: yup.string().required("Informe uma forma de contato"),

  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function registerFormSend(data) {
    console.log(data)

    try {
       const response = await api.post("/users",data)

       navigate("/")
      toast.success("Conta criada com sucesso!")  
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function previousPage(){
    navigate(-1)
  }

  return (
    <>
      <header>
        <img alt="Logo Kenzie Hub" src={Logo} />
        <button onClick={previousPage}>Voltar</button>
      </header>

      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa</p>

      <form onSubmit={handleSubmit(registerFormSend)}>
        <InputTextAlign>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            placeholder="Digite aqui seu nome"
            type="text"
            {...register("name")}
          ></input>
          <p>{errors.name?.message}</p>
        </InputTextAlign>

        <InputTextAlign>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Digite aqui seu email"
            type="text"
            {...register("email")}
          ></input>
          <p>{errors.email?.message}</p>
        </InputTextAlign>

        <InputTextAlign>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          ></input>
          <p>{errors.password?.message}</p>
        </InputTextAlign>

        <InputTextAlign>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            id="confirmPassword"
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("confirmPassword")}
          ></input>
          <p>{errors.confirmPassword?.message}</p>
        </InputTextAlign>

        <InputTextAlign>
          <label htmlFor="bio">Bio</label>
          <input
            id="bio"
            placeholder="Fale sobre você"
            type="text"
            {...register("bio")}
          ></input>
          <p>{errors.bio?.message}</p>
        </InputTextAlign>

        <InputTextAlign>
          <label htmlFor="contact">Contato</label>
          <input
            id="contact"
            placeholder="Opção de contato"
            type="text"
            {...register("contact")}
          ></input>
          <p>{errors.contact?.message}</p>
        </InputTextAlign>

        <InputTextAlign>
          <label htmlFor="course_module">Módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </select>
          <p>{errors.course_module?.message}</p>
        </InputTextAlign>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
