import Logo from "../../components/img/logoKenzieHub.svg";
import { LogoKenzie } from "../LoginPage/style";
import {
  HeaderContainer,
  ContainerContentAlign,
  MainContainerContent,
  FormTitle,
  FormDescription,
} from "./style";
import { Button } from "../../components/Button";
import { BackgroundPage } from "./style";
import { FormRegister } from "../../components/FormRegister";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function RegisterPage() {
  const { registerFormSend, previousPage, navigate } = useContext(UserContext);

  return (
    <>
      <BackgroundPage>
        <ContainerContentAlign>
          <HeaderContainer>
            <LogoKenzie alt="Logo Kenzie Hub" src={Logo} />
            <Button
              click={previousPage}
              text="Voltar"
              styled="ButtonBack"
            ></Button>
          </HeaderContainer>

          <MainContainerContent>
            <FormTitle>Crie sua conta</FormTitle>
            <FormDescription>Rápido e grátis, vamos nessa</FormDescription>
            <FormRegister registerFormSend={registerFormSend}></FormRegister>
          </MainContainerContent>
        </ContainerContentAlign>
      </BackgroundPage>
    </>
  );
}
