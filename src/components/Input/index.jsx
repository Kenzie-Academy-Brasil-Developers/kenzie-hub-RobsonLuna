import { InputDefault } from "./style";
import { InputDisable } from "./style";
import { InputLogin } from "./style";
import { forwardRef } from "react";


 export function Input(
  {   placeholder, id, type, click, ...rest } , ref){
  
    return(
      <input
      placeholder={placeholder}
      id={id}
      type={type}
      {...rest}
      ref={ref}
      
      />
 
    )
   
    

   
}

export default forwardRef(Input)