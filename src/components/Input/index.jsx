

export function Input({click, styled, disable, placeholder, value, ...rest}, ref){
switch (styled){

    case "inputBack":
    
    return(
        <input onClick={click} inputStyled={styled} disable={disable} placeholder={placeholder} ref={ref} {...rest} value={value}></input>
        )

        default:
    }

}