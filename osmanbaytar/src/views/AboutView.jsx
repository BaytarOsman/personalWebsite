import FirstContext from "../components/about/FirstContext";
import PersonalInformations from "../components/about/PersonalInformations";
import Education from "../components/about/Education";
import Experiences from "../components/about/Experiences";
import References from "../components/about/References";

const AboutView = () => {
  return (
    <>
      <FirstContext />
      <PersonalInformations />
      <Experiences />
      <Education />
      <References />
    </>
  );
};

export default AboutView;
