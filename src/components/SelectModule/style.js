import styled from "styled-components";

export const SelectModule = styled.select`
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
  margin-bottom: 20px;

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
