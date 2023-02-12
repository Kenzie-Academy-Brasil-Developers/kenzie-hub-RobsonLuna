import styled from "styled-components";

export const SectionUserInfo = styled.section`
display:flex;
/* justify-content:space-between; */
justify-content:center;
flex-direction:column;
align-items: flex-start;
height:118px;
border-bottom: solid 1px var(--grey-2) ;
box-sizing:border-box;
padding:0 5vw;
gap:10px;
`

export const SectionUserName = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 28px;


color: var(--grey-0);
`

export const SectionUserDescription = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;



color: var(--grey-1);
`

export const SectionTechList = styled.section`
padding:0 5vw;
`

export const TechHeaderItemAlign = styled.div`
display:flex;
justify-content:space-between;
margin-top:26px;
`

export const TechTitle = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: var(--title1);
line-height: 18px;
align-self:center;

color: var(--grey-0);
`

export const TechList = styled.ul`
background-color:var(--grey-3);
margin-top:21px;
padding:23px;
max-width:416px;
margin:21px auto 0px;

`