import { LoginButton, RegisterPage, ButtonBack  } from "./style";

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
          <ButtonBack  onClick={click} type={type}>
            {text}
          </ButtonBack>
        );

    default:
      return (
        <button onClick={click} type={type}>
          {text}
        </button>
      );
  }
}
