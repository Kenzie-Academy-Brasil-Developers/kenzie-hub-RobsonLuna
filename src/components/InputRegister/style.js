import styled from "styled-components";

export const InputDefault = styled.input`
  width: 100%;
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
  border: none;
  border-radius: 3.2px;
  color: var(--grey-0);
  outline: none;

  :hover,
  :focus {
    outline: solid 1px var(--grey-0);
    box-sizing: border-box;
  }

  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;

    color: var(--grey-1);
  }
`;
export const InputDisable = styled.input``;

export const InputLogin = styled.input``;

export const ErrorMessage = styled.p`
  margin-top: 5px;
  color: var(--primary);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13.0293px;
  line-height: 21px;
`;

export const AlignItem = styled.div`
  margin-bottom: 20px;
`;
