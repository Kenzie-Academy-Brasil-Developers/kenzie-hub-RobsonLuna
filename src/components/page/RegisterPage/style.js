import styled from "styled-components"
export const InputTextAlign = styled.div`
display:flex;
flex-direction:column;
`
export const HeaderContainer = styled.header`
display:flex;
justify-content: space-between;
align-items:center;
`

export const ContainerContentAlign = styled.div`
width:100%;
max-width:370px;

`

export const MainContainerContent = styled.main`
width:100%;
max-width:370px;
padding: 42px 20px 28px 20px;
background-color:var(--grey-3);
box-sizing:border-box;
margin-top:48px;
display:flex;
flex-direction:column;
`

export const FormTitle = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 28px;
color:var(--grey-0);
align-self:center;

`

export const FormDescription = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: var(--title2);
line-height: 22px;
margin-top:22px;

align-self:center;
color: var(--grey-1);
`

export const InputRegister = styled.input`
  margin-top: 15px;
  height: 38px;
  box-sizing: border-box;
  padding: 8.42px 2.15px 8.42px 13px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13.0293px;
  line-height: 21px;
  background-color: var(--grey-2);
  border:none;
    border-radius:3.2px;
  color: var(--grey-0);
  outline:none;

  
  :hover,  :focus{
    outline:solid 1px var(--grey-0);
    box-sizing:border-box;
  }

  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;

    color: var(--grey-1);
  }
`