import styled from "styled-components";

export const HomeViewContainer = styled.div`
  /* background-color: var(--first-color); */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 160px);

  /* background-image: url("../../../public/3242971.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */

  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(45deg, rgba(210, 223, 224, 0.577) 13%, rgba(85, 222, 247, 0.471) 23%, rgba(147, 236, 255, 0.249) 34%, rgba(54, 210, 238, 0.471) 49%, rgba(178, 239, 250, 0.471) 71%)"
      : "linear-gradient(45deg, rgba(9, 43, 43, 0.577) 13%, rgba(33, 127, 184, 0.471) 23%, rgba(133,180,190,0.249) 34%, rgba(49,73,78,0.471) 49%, rgba(51, 101, 115, 0.471) 71%)"};

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
  /* background-image: url("../../../public/blackWhite.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  min-height: 400px;
  max-width: 300px;
  width: 100%;
  /* box-shadow: 0 0 10px 0 var(--third-color); */

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
