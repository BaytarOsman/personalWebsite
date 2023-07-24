import styled from "styled-components";

export const EducationContainer = styled.div`
  background-color: var(--first-color);
  padding: 20px;
  padding-bottom: 0;
  border-radius: 10px;
  margin-bottom: 60px;
  margin-top: 30px;
`;

export const EducationTitle = styled.h2`
  color: var(--third-color);
`;

export const EducationList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const EducationBoxContainer = styled.li`
  background-color: var(--second-color);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  @media screen and (max-width: 500px) {
    padding: 15px;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 10px;
    font-size: 1rem;
  }
  &:hover {
    background-color: var(--third-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 27px rgba(255, 255, 255, 0.5);
  }
`;

export const EducationBoxUpper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const EducationBoxText = styled.p`
  color: var(--fourth-color);
  margin: 0;
  font-size: 1.5rem;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
  ${EducationBoxContainer}:hover & {
    color: var(--second-color);
  }
`;

export const EducationBoxSpan = styled.p`
  color: var(--third-color);
  ${EducationBoxContainer}:hover & {
    color: var(--first-color);
  }
`;
