import { InputDefault } from "./style";
import { InputDisable } from "./style";
import { InputLogin } from "./style";
import { forwardRef } from "react";
import { ErrorMessage, InputHidden } from "./style";

export function Input(
  {
    placeholder,
    id,
    type,
    click,
    error,
    styled,
    inputValue,
    disabled,
    register,
    ...rest
  },
  ref
) 

{
  // console.log(inputValue)
  switch (styled) {
    case "inputDisable":
      return (
        <>
          <InputDisable
            placeholder={placeholder}
            id={id}
            type={type}
            value={inputValue}
            disabled={disabled}
            {...rest}
            ref={ref}
          />
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </>
      );

    case "inputPassword":
      return (
        <>
          <div>
            <InputDisable
              placeholder={placeholder}
              id={id}
              type={type}
              value={inputValue}
              disabled={disabled}
              {...rest}
              ref={ref}
            />
            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          </div>
        </>
      );

    case "inputHidden":
      return (
        <>
          <div>
            <InputHidden
              placeholder={placeholder}
              id={id}
              type={type}
              value={inputValue}
              disabled={disabled}
              {...rest}
              ref={ref}
            />
            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          </div>
        </>
      );

    default:
      return (
        <>
          <InputDefault
            placeholder={placeholder}
            // disabled={true}
            id={id}
            type={type}
            {...rest}
            value={inputValue}
            // {...register}
            ref={ref}
          />
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </>
      );
  }
}

export default forwardRef(Input);
