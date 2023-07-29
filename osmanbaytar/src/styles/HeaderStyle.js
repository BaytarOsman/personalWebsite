import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 100;
  background-color: var(--first-color);
  min-height: 80px;
  height: 100%;
  padding: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 0px;
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 16px 20px;
    min-height: 50px;
  }
`;

export const HeaderComputer = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

export const HeaderTitle = styled.div`
  color: ${(props) =>
    props.active === "true" ? "var(--fourth-color)" : "var(--third-color)"};
  font-size: 1.5em;
`;

export const HeaderSelect = styled.select`
  background-color: var(--first-color);
  color: var(--third-color);
  border: none;
  font-size: 1em;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const HeaderOption = styled.option`
  background-color: var(--first-color);
  color: var(--third-color);
  border: none;
  font-size: 0.8em;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const HeaderFlag = styled.img`
  width: 24px;
  height: 16px;
  margin-right: 10px;
`;

export const HeaderSpan = styled.span`
  border-bottom: 2px solid
    ${(props) =>
      props.active === "true" ? "var(--fourth-color)" : "transparent"};
  cursor: pointer;
  @media (max-width: 992px) {
    border-bottom: none;
  }
`;

export const HeaderIcon = styled.i`
  color: var(--third-color);
  font-size: 1.5em;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const HeaderMenu = styled.div`
  padding-top: 10px;
`;

export const HeaderTheme = styled.div`
  color: var(--third-color);
  font-size: 1.5em;
  cursor: pointer;
`;
