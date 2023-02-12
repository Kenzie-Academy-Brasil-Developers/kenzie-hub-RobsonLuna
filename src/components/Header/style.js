import styled from "styled-components";

export const LogoKenzie= styled.img`
widows: 106px;
height:15px;
`

export const HeaderDashboard = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
height:72px;

box-sizing:border-box;
width:100vw;
max-width:462px;
margin:0 auto;
padding: 0 5vw;

@media(min-width: 504px){
    padding:0;
}
`

export const Border = styled.div`
border-bottom: solid 1px var(--grey-2);



`

export const HeaderModal = styled.header`
width:90vw;
max-width:369px;
height:50px;
background-color: var(--grey-2);
display:flex;
justify-content:space-between;
align-items:center;
padding: 12px 20px;
box-sizing:border-box;
`

export const HeaderModalTitle = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */


/* grey-0 */

color: #F8F9FA;
`



