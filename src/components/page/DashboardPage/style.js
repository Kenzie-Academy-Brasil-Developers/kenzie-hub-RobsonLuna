import styled from "styled-components";

export const SectionUser = styled.section`
/* display:flex; */

`

export const EditModal = styled.div`
position:fixed;
display:flex;
align-self:center;
justify-self:center;
flex-direction:column;
width:100vw;
height:100%;
align-items:center;
justify-content:center;
background-color:rgba(0,0,0,.25);

`

export const CreateModal = styled(EditModal)`
position:fixed;
display:flex;
align-self:center;
justify-self:center;
flex-direction:column;
width:100vw;
height:100%;
align-items:center;
justify-content:center;
background-color:rgba(0,0,0,.25);
`

export const MainDashboardContainer = styled.main`
width:100vw;
background-color:var(--grey-4);
box-sizing:border-box;
display:flex;
flex-direction:column;
padding-bottom:20px;
`