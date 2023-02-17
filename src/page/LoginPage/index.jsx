import Logo from "../../components/img/logoKenzieHub.svg";
import { InputAlign } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { BackgroundPage, LogoKenzie, RegisterTitle } from "./style";
import { Label } from "../../components/Label";
import { Button } from "../../components/Button";
import { MainContainer } from "./style";
import { FormTitle } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { SchemaLoginContext } from "../../providers/SchemaLoginContext";
import { FormLogin } from "../../components/FormLogin";


export function LoginPage() {
  
  const {userData, setUserData, loginForm, registerPage} = useContext(UserContext)

  return (
    <>
      <BackgroundPage>
        <LogoKenzie alt="Logo Kenzie Hub" src={Logo} />
        <MainContainer>
          <FormTitle >Login</FormTitle>
          <FormLogin  loginForm={loginForm}>

          </FormLogin>

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
