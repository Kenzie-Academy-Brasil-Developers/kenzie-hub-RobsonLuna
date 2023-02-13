import styled from "styled-components";
export const InputTextAlign = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerContentAlign = styled.div`
  width: 100%;
  max-width: 370px;
`;

export const MainContainerContent = styled.main`
  width: 100%;
  max-width: 370px;
  padding: 42px 20px 28px 20px;
  background-color: var(--grey-3);
  box-sizing: border-box;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: var(--grey-0);
  align-self: center;
`;

export const FormDescription = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: var(--title2);
  line-height: 22px;
  margin-top: 22px;

  align-self: center;
  color: var(--grey-1);
`;

export const BackgroundPage = styled.div`
  width: 100%;

  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  padding: 10vh 5vw;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
