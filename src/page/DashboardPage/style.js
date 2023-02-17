import styled from "styled-components";

export const SectionUser = styled.section``;

export const EditModal = styled.div`
  position: fixed;
  display: flex;
  align-self: center;
  justify-self: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const CreateModal = styled(EditModal)`
  position: fixed;
  display: flex;
  align-self: center;
  justify-self: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const MainDashboardContainer = styled.main`
  width: 100vw;
  background-color: var(--grey-4);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  min-height: 100vh;
`;

export const MainForm = styled.main`
  background-color: var(--grey-3);
  padding: 24px 22px;
  box-sizing: border-box;
  width: 90%;
  max-width: 369px;
`;

export const InputTitle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  line-height: 0px;
  margin-bottom: 22px;
  color: var(--grey-0);
`;

export const SelectTitle = styled.p`
  margin-top: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  line-height: 0px;
  margin-bottom: 22px;
  color: var(--grey-0);
`;

export const SelectModal = styled.select`
  border-radius: 4px;
  background: var(--grey-2);
  width: 100%;
  border: none;
  height: 48px;
  box-sizing: border-box;
  padding: 10.5px 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;

  color: var(--grey-0);
`;

export const ButtonAlign = styled.div`
  display: flex;
  margin-top: 22px;
  justify-content: space-between;
`;
