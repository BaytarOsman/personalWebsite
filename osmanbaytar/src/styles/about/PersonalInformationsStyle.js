import styled from "styled-components";

export const PersonalInformationsContainer = styled.div`
  border-radius: 10px;
  padding: 20px 10px;
  background-color: var(--first-color);
  @media screen and (max-width: 991px) {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
`;

export const PersonalInformationsTitle = styled.h2`
  color: var(--third-color);
  margin-bottom: 10px;
`;

export const PersonalInformationsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

export const PersonalInformationsItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--fourth-color);
  background-color: var(--second-color);
  font-size: 1.5em;
  padding: 5px 10px;
  width: 100%;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 400px) {
    font-size: 1em;
  }
  &:hover {
    background-color: var(--third-color);
  }
`;
