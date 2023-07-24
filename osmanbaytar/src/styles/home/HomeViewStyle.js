import styled from "styled-components";

export const HomeViewContainer = styled.div`
  background-color: var(--first-color);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 160px);

  background-image: url("../../../public/3242971.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // position: relative;
  // top: -80px;

  @media screen and (max-width: 991px) {
    padding: 2rem 0;
  }
`;

export const HomeViewh1 = styled.h1`
  font-size: 2.5rem;
  color: var(--fourth-color);
`;

export const HomeViewh3 = styled.h3`
  font-size: 1.5rem;
  color: var(--third-color);
`;

export const HomeViewp = styled.p`
  font-size: 1.2rem;
  color: var(--fourth-color);
`;

export const HomeViewButtonDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
`;

export const HomeViewButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--third-color);
  color: var(--second-color);
  font-size: 1.2rem;
  min-width: 9rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--fourth-color);
    color: var(--third-color);
  }
`;

export const HomeViewBackground = styled.div`
  background-image: url("../../../public/transparent.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 400px;
  max-width: 300px;
  width: 100%;
  opacity: 0.5;
  border-radius: 50%;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
