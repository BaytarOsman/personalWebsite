import styled from "styled-components";

export const ContactViewMain = styled.div`
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(45deg, rgba(210, 223, 224, 0.577) 13%, rgba(85, 222, 247, 0.471) 23%, rgba(147, 236, 255, 0.249) 34%, rgba(54, 210, 238, 0.471) 49%, rgba(178, 239, 250, 0.471) 71%)"
      : "linear-gradient(45deg, rgba(9, 43, 43, 0.577) 13%, rgba(33, 127, 184, 0.471) 23%, rgba(133,180,190,0.249) 34%, rgba(49,73,78,0.471) 49%, rgba(51, 101, 115, 0.471) 71%)"};
`;

export const ContactViewWrapper = styled.div`
  min-height: calc(100vh - 160px);
`;

export const ContactContainer = styled.div`
  background-color: var(--first-color);
  padding: 20px;
  padding-bottom: 0;
  border-radius: 10px;
  margin-bottom: 20px;
  min-height: 412px;
  box-shadow: 0 0 10px 0 var(--fourth-color);
  @media screen and (max-width: 991px) {
    min-height: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const ContactTitle = styled.h2`
  color: var(--third-color);
  margin-bottom: 10px;
`;

export const ContactList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  margin-bottom: 10px;
  padding: 20px 0;
  list-style: none;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 0px;
  }
  :nth-child(odd) {
    background-color: var(--fourth-color);
    border-radius: 10px;
    color: var(--third-color);
    padding: 10px;
    font-weight: 600;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      padding: 6px;
    }
  }
`;
