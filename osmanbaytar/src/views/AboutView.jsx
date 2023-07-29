import FirstContext from "../components/about/FirstContext";
import PersonalInformations from "../components/about/PersonalInformations";
import Education from "../components/about/Education";
import Experiences from "../components/about/Experiences";
import References from "../components/about/References";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AboutViewContainer = styled.div`
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(45deg, rgba(210, 223, 224, 0.577) 13%, rgba(85, 222, 247, 0.471) 23%, rgba(147, 236, 255, 0.249) 34%, rgba(54, 210, 238, 0.471) 49%, rgba(178, 239, 250, 0.471) 71%)"
      : "linear-gradient(45deg, rgba(9, 43, 43, 0.577) 13%, rgba(33, 127, 184, 0.471) 23%, rgba(133,180,190,0.249) 34%, rgba(49,73,78,0.471) 49%, rgba(51, 101, 115, 0.471) 71%)"};
`;

const AboutView = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <AboutViewContainer theme={theme}>
      <FirstContext />
      <PersonalInformations />
      <Experiences />
      <Education />
      <References />
    </AboutViewContainer>
  );
};

export default AboutView;
