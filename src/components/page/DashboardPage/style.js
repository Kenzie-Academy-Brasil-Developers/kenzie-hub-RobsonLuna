import styled from "styled-components";

export const SectionUser = styled.section`
/* display:flex; */

`

export const EditModal = styled.div`
position:fixed;
top:0px;
left:0px;
border: 1px solid red;
box-shadow: 0 0 20px 0px rgba(0,0,0,.25);
background-color:green;
/* background-color:rgba(0,0,0,.25); */
/* width:100vw; */
/* height:100vh; */
`

export const CreateModal = styled(EditModal)`

`

export const MainDashboardContainer = styled.main`
width:100vw;
background-color:var(--grey-4);
box-sizing:border-box;
display:flex;
flex-direction:column;
padding:0 5vw;
padding-bottom:20px;
`