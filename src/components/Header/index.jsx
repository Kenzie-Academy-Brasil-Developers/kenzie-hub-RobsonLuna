import Logo from "../img/logoKenzieHub.svg";
import {
  LogoKenzie,
  HeaderDashboard,
  Border,
  HeaderModal,
  HeaderModalTitle,
  Close,
} from "./style";
import { Button } from "../Button";

export function Header({ logOut, styled, textTitle, click }) {
  switch (styled) {
    case "HeaderDashboard":
      return (
        <>
          <HeaderDashboard>
            <LogoKenzie alt="Logo Kenzie Hub" src={Logo}></LogoKenzie>
            <Button styled="ButtonLogOut" click={logOut} text="Sair"></Button>
          </HeaderDashboard>

          <Border></Border>
        </>
      );

    case "HeaderModal":
      return (
        <>
          <HeaderModal>
            <HeaderModalTitle>{textTitle}</HeaderModalTitle>
            <Close onClick={click}>X</Close>
          </HeaderModal>
        </>
      );

    default:
  }
}
