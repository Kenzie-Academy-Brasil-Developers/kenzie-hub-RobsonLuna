import { LoginButton, RegisterPage } from "./style";

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
    default:
      return (
        <button onClick={click} type={type}>
          {text}
        </button>
      );
  }
}
