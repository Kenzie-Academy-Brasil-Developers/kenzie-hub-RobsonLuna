import Logo from "../img/logoKenzieHub.svg"
import { LogoKenzie, HeaderDashboard, } from "./style"
import { Button } from "../Button"

export function Header({logOut}){
    return (
        <HeaderDashboard>
            

            <LogoKenzie alt="Logo Kenzie Hub" src={Logo}></LogoKenzie>
            <Button styled="ButtonLogOut" click={logOut} text="Sair"></Button>
            
        </HeaderDashboard>
    )
}