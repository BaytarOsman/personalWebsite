import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: var(--fourth-color);
  color: black;
  border-radius: 20px 20px 0 0;
  min-height: 70px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const FooterComputer = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const FooterMobile = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;

export const FooterContainer = styled.div`
  min-height: 80px;
  padding: 0 20px;
  @media (max-width: 992px) {
    padding: 16px 20px;
    min-height: 50px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const FooterContentRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const FooterTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: var(--first-color);
  cursor: pointer;
  &:hover {
    color: var(--third-color);
  }
`;

export const FooterLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.5em;
  &:hover {
    color: var(--third-color);
  }
`;
