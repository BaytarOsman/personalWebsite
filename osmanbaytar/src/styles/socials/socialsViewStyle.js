import styled from "styled-components";

export const SocialsViewMain = styled.div`
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(45deg, rgba(210, 223, 224, 0.577) 13%, rgba(85, 222, 247, 0.471) 23%, rgba(147, 236, 255, 0.249) 34%, rgba(54, 210, 238, 0.471) 49%, rgba(178, 239, 250, 0.471) 71%)"
      : "linear-gradient(45deg, rgba(9, 43, 43, 0.577) 13%, rgba(33, 127, 184, 0.471) 23%, rgba(133,180,190,0.249) 34%, rgba(49,73,78,0.471) 49%, rgba(51, 101, 115, 0.471) 71%)"};
`;

export const SocialsContainer = styled.div`
  min-height: calc(100vh - 160px);
  padding-bottom: 1rem;
`;

export const SocialTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--third-color);
  padding-top: 2rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const SocialBoxContainer = styled.div`
  padding: 2rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  border-radius: 0.5rem;
  background-color: var(--first-color);
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
  &:hover {
    background-color: var(--fourth-color);
  }
`;

export const SocialBoxImageDiv = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  max-width: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
  transition: all 0.4s ease-in-out;
  order: ${({ order }) => (order % 2 ? "1" : "2")};
  &:hover {
    transform: scale(1.1);
  }
`;

export const SocialBoxImage = styled.img`
  width: 100%;
  height: 400px;
  max-width: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.8);
  ${SocialBoxContainer}:hover & {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
  }
`;

export const SocialBoxVideo = styled.video`
  width: 100%;
  max-width: 300px;
  height: 400px;
  object-fit: cover;
  object-position: 75% 25%;

  border-radius: 0.5rem;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.8);
  ${SocialBoxContainer}:hover & {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
  }
`;

export const SocailBoxTextDiv = styled.div`
  order: ${({ order }) => (order % 2 ? "2" : "1")};
`;

export const SocialBoxUpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialBoxTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--third-color);
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SocialBoxDate = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--fourth-color);
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  ${SocialBoxContainer}:hover & {
    color: var(--first-color);
  }
`;

export const SocialBoxDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--fourth-color);
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  ${SocialBoxContainer}:hover & {
    color: var(--first-color);
  }
`;
