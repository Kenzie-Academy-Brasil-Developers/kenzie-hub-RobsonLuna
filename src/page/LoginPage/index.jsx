import Logo from "../../components/img/logoKenzieHub.svg";
import { BackgroundPage, LogoKenzie, RegisterTitle } from "./style";
import { Button } from "../../components/Button";
import { MainContainer } from "./style";
import { FormTitle } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

import { FormLogin } from "../../components/FormLogin";

export function LoginPage() {
  const { userData, setUserData, loginForm, registerPage } =
    useContext(UserContext);

  return (
    <>
      <BackgroundPage>
        <LogoKenzie alt="Logo Kenzie Hub" src={Logo} />
        <MainContainer>
          <FormTitle>Login</FormTitle>
          <FormLogin ></FormLogin>

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
