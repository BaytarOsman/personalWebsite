import styled from "styled-components";

export const ReferencesContainer = styled.div`
  background-color: var(--first-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 991px) {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const ReferencesTitle = styled.h2`
  color: var(--third-color);
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ReferencesBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--fourth-color);
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: var(--second-color);
  }
`;

export const ReferencesBoxTitle = styled.a`
  color: var(--first-color);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  text-decoration: none;
  ${ReferencesBoxContainer}:hover & {
    color: var(--third-color);
    cursor: pointer;
  }
`;

export const ReferencesBoxInfo = styled.div`
  @media screen and (max-width: 1199px) {
    min-height: 92px;
  }
  @media screen and (max-width: 991px) {
    min-height: 0px;
  }
`;

export const ReferencesBoxDescription = styled.p`
  color: var(--first-color);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  ${ReferencesBoxContainer}:hover & {
    color: var(--fourth-color);
  }
`;

export const ReferencesBoxPhoneNumber = styled.p`
  color: var(--first-color);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  ${ReferencesBoxContainer}:hover & {
    color: var(--fourth-color);
  }
`;
