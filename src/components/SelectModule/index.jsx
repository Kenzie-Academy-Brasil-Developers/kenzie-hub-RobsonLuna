import { forwardRef } from "react";
import { SelectModule } from "./style";

export function SelectRegister({ styled, id, error, ...rest }, ref) {
  return (
    <>
      <SelectModule id={id} {...rest} ref={ref}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </SelectModule>
      {error ? <p>{error}</p> : null}
    </>
  );
}

export default forwardRef(SelectRegister);
