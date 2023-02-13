import { forwardRef } from "react";
import { AlignItem, ErrorMessage } from "./style";
import { InputDefault } from "./style";

export function InputRegister(
  {
    placeholder,
    id,
    type,
    click,
    error,
    styled,
    inputValue,
    disabled,
    ...rest
  },
  ref
) {
  switch (styled) {
    default:
      return (
        <>
          <AlignItem>
            <InputDefault
              placeholder={placeholder}
              id={id}
              type={type}
              {...rest}
              ref={ref}
            />
            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          </AlignItem>
        </>
      );
  }
}

export default forwardRef(InputRegister);
