import styled from "styled-components";

export const SkillsViewContainer = styled.div`
  margin-top: 80px;
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
`;

export const SkillsBoxItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

export const SkillsBoxItemList = styled.li`
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
