import {
  LoginButton,
  RegisterPage,
  ButtonBack,
  ButtonRegister,
  ButtonLogOut,
  ButtonAddTech,
  ButtonCreateTech,
  ButtonSaveTechChange,
  ButtonTechDelete,
} from "./style";

export function Button({ click, type, text, styled }) {
  switch (styled) {
    case "Login":
      return (
        <LoginButton onClick={click} type={type}>
          {text}
        </LoginButton>
      );

    case "RegisterPage":
      return (
        <RegisterPage onClick={click} type={type}>
          {text}
        </RegisterPage>
      );

    case "ButtonBack":
      return (
        <ButtonBack onClick={click} type={type}>
          {text}
        </ButtonBack>
      );

    case "ButtonRegister":
      return (
        <ButtonRegister onClick={click} type={type}>
          {text}
        </ButtonRegister>
      );

    case "ButtonLogOut":
      return (
        <ButtonLogOut onClick={click} type={type}>
          {text}
        </ButtonLogOut>
      );

    case "ButtonAddTech":
      return (
        <ButtonAddTech onClick={click} type={type}>
          {text}
        </ButtonAddTech>
      );

    case "ButtonCreateTech":
      return (
        <ButtonCreateTech onClick={click} type={type}>
          {text}
        </ButtonCreateTech>
      );
    case "ButtonSaveTechChange":
      return (
        <ButtonSaveTechChange onClick={click} type={type}>
          {text}
        </ButtonSaveTechChange>
      );

    case "ButtonTechDelete":
      return (
        <ButtonTechDelete onClick={click} type={type}>
          {text}
        </ButtonTechDelete>
      );

    default:
      return (
        <button onClick={click} type={type}>
          {text}
        </button>
      );
  }
}
