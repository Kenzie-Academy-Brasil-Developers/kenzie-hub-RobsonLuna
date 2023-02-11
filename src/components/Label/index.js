import { LabelStyled } from "./style"
export function Label({text, htmlFor}){
    return(
        <LabelStyled htmlFor={htmlFor}>{text}</LabelStyled>
    )
}