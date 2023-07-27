import {
  FooterWrapper,
  FooterComputer,
  FooterMobile,
  FooterContainer,
  FooterContent,
  FooterContentRight,
  FooterTitle,
  FooterLink,
} from "../styles/FooterStyle";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import footerData from "../data/footerData";
import { useNavigate } from "react-router";

const Footer = () => {
  const language = useSelector((state) => state.language.language);

  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [socials, setSocials] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (language === "en") {
      setAbout(footerData.footerDataEn.about);
      setSkills(footerData.footerDataEn.skills);
      setSocials(footerData.footerDataEn.socials);
      setContact(footerData.footerDataEn.contact);
    } else if (language === "tr") {
      setAbout(footerData.footerDataTr.about);
      setSkills(footerData.footerDataTr.skills);
      setSocials(footerData.footerDataTr.socials);
      setContact(footerData.footerDataTr.contact);
    }
  }, [language]);

  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }
  function goToAbout() {
    navigate("/about");
  }
  function goToSkills() {
    navigate("/skills");
  }
  function goToSocials() {
    navigate("/socials");
  }
  function goToContact() {
    navigate("/contact");
  }

  return (
    <FooterWrapper>
      <FooterComputer>
        <FooterContainer className="container ">
          <div className="row align-items-center pt-2">
            <FooterContent className="col-lg-8">
              <FooterTitle onClick={goToHome}>Osman Baytar</FooterTitle>
              <FooterTitle onClick={goToAbout}>{about}</FooterTitle>
              <FooterTitle onClick={goToSkills}>{skills}</FooterTitle>
              <FooterTitle onClick={goToSocials}>{socials}</FooterTitle>
              <FooterTitle onClick={goToContact}>{contact}</FooterTitle>
            </FooterContent>
            <FooterContentRight className="col-lg-4">
              <FooterTitle>
                <FooterLink
                  href="https://www.linkedin.com/in/osmanbaytar/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </FooterLink>
              </FooterTitle>
              <FooterTitle>
                <FooterLink
                  href="https://github.com/BaytarOsman"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </FooterLink>
              </FooterTitle>
            </FooterContentRight>
          </div>
        </FooterContainer>
      </FooterComputer>
      <FooterMobile>
        <FooterContainer className="container ">
          <div className="row align-items-center pt-2">
            <div className="col-8">
              <FooterTitle onClick={goToHome}>Osman Baytar</FooterTitle>
            </div>
            <div className="col-4 d-flex flex-row justify-content-center gap-5">
              <FooterTitle>
                <FooterLink
                  href="https://www.linkedin.com/in/osmanbaytar/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </FooterLink>
              </FooterTitle>
              <FooterTitle>
                <FooterLink
                  href="https://github.com/BaytarOsman"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </FooterLink>
              </FooterTitle>
            </div>
          </div>
        </FooterContainer>
      </FooterMobile>
    </FooterWrapper>
  );
};

export default Footer;
