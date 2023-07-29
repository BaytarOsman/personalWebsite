import styled from "styled-components";

export const SkillsViewMain = styled.div`
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(45deg, rgba(210, 223, 224, 0.577) 13%, rgba(85, 222, 247, 0.471) 23%, rgba(147, 236, 255, 0.249) 34%, rgba(54, 210, 238, 0.471) 49%, rgba(178, 239, 250, 0.471) 71%)"
      : "linear-gradient(45deg, rgba(9, 43, 43, 0.577) 13%, rgba(33, 127, 184, 0.471) 23%, rgba(133,180,190,0.249) 34%, rgba(49,73,78,0.471) 49%, rgba(51, 101, 115, 0.471) 71%)"};
`;

export const SkillsViewContainer = styled.div`
  padding-top: 80px;
`;

export const SkillsBoxItem = styled.div`
  border: 1px solid #fff;
  box-shadow: 0 0 27px rgba(237, 230, 237, 0.85);
  background-color: var(--first-color);
  border-radius: 10px;
  min-height: 670px;
  &:hover {
    background-color: var(--fourth-color);
    transition: all 0.3s ease-in-out;
    color: var(--first-color);
    box-shadow: 0 0 27px rgba(0, 0, 0, 0.85);
  }
  @media screen and (max-width: 991px) {
    min-height: 0;
  }
`;

export const SkillsBoxItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

export const SkillsBoxItemList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    min-height: 0;
  }
`;

export const SkillsBoxItemName = styled.span`
  font-size: 1rem;
  font-weight: 700;
  margin-right: 1rem;
  color: var(--third-color);
`;

export const SkillsBoxItemLevel = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-right: 1rem;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  float: right;
  background-color: var(--second-color);
  ${SkillsBoxItem}:hover & {
    background-color: var(--third-color);
  }
`;
