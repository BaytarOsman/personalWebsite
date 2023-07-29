import styled from "styled-components";

export const FirstContextContainer = styled.div`
  padding: 50px 0;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const FirstContextH3 = styled.h3`
  color: var(--fourth-color);
  margin-bottom: 40px;
  font-size: 2.5em;
  text-align: center;
`;

export const FirstContextImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 400px;
    margin: 0 auto;
  }
`;

export const FirstContextImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 300px;
  max-height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px var(--fourth-color);
`;

export const FirstContextTitle = styled.div`
  @media screen and (max-width: 992px) {
    margin-top: 30px;
  }
  padding: 0 15px;
`;
