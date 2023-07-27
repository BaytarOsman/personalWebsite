import {
  HeaderContainer,
  HeaderComputer,
  HeaderMobile,
  HeaderTitle,
  HeaderSelect,
  HeaderOption,
  HeaderFlag,
  HeaderSpan,
  HeaderIcon,
  HeaderMenu,
  HeaderTheme,
} from "../styles/HeaderStyle";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/slices/languageSlice";
import headerData from "../data/headerData";
import { setTheme } from "../redux/slices/themeSlice";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dataCount, setDataCount] = useState(0);

  function handleMobile() {
    setIsMobile(!isMobile);
  }
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [socials, setSocials] = useState("");
  const [contact, setContact] = useState("");
  const [flag, setFlag] = useState("");

  const [selected, setSelected] = useState("");
  const [selectedOptionEn, setSelectedOptionEn] = useState(true);

  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const pathname = window.location.pathname;

  useEffect(() => {
    if (pathname === "/") {
      setSelected("home");
    } else if (pathname === "/about") {
      setSelected("about");
    } else if (pathname === "/skills") {
      setSelected("skills");
    } else if (pathname === "/socials") {
      setSelected("socials");
    } else if (pathname === "/contact") {
      setSelected("contact");
    }
  }, [pathname]);

  useEffect(() => {
    if (language === "en") {
      setAbout(headerData.headerDataEn.about);
      setSkills(headerData.headerDataEn.skills);
      setSocials(headerData.headerDataEn.socials);
      setContact(headerData.headerDataEn.contact);
      setFlag(headerData.headerDataEn.flag);
      setSelectedOptionEn(true);
    } else if (language === "tr") {
      setAbout(headerData.headerDataTr.about);
      setSkills(headerData.headerDataTr.skills);
      setSocials(headerData.headerDataTr.socials);
      setContact(headerData.headerDataTr.contact);
      setFlag(headerData.headerDataTr.flag);
      setSelectedOptionEn(false);
    }
    setDataCount(dataCount + 1);
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

  function changeLanguage() {
    if (language === "en") {
      dispatch(setLanguage("tr"));
    } else if (language === "tr") {
      dispatch(setLanguage("en"));
    }
  }

  const theme = useRef(null);
  const themeMobile = useRef(null);
  const [themeCount, setThemeCount] = useState(0);

  const themeIcon = localStorage.getItem("theme");

  useEffect(() => {
    if (themeIcon === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      setThemeCount(themeCount + 1);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      setThemeCount(themeCount + 1);
    }
  }, []);

  useEffect(() => {
    if (themeCount == 1) {
      if (themeIcon === "light") {
        theme.current.classList.remove("fa-moon");
        theme.current.classList.add("fa-sun");
        themeMobile.current.classList.remove("fa-moon");
        themeMobile.current.classList.add("fa-sun");
      }
    }
  }, [themeCount]);

  function changeTheme() {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      theme.current.classList.remove("fa-moon");
      theme.current.classList.add("fa-sun");
      themeMobile.current.classList.remove("fa-moon");
      themeMobile.current.classList.add("fa-sun");
      localStorage.setItem("theme", "light");
      dispatch(setTheme("light"));
    } else {
      document.body.classList.toggle("dark");
      document.body.classList.remove("light");
      theme.current.classList.remove("fa-sun");
      theme.current.classList.add("fa-moon");
      themeMobile.current.classList.remove("fa-sun");
      themeMobile.current.classList.add("fa-moon");
      localStorage.setItem("theme", "dark");
      dispatch(setTheme("dark"));
    }
  }

  return (
    <>
      {dataCount > 0 && (
        <HeaderContainer>
          <div className="container">
            <HeaderComputer>
              <div className="row">
                <HeaderTitle
                  active={selected === "home" ? "true" : "false"}
                  className="col-lg-2"
                >
                  <HeaderSpan
                    active={selected === "home" ? "true" : "false"}
                    onClick={goToHome}
                  >
                    Osman Baytar
                  </HeaderSpan>
                </HeaderTitle>

                <HeaderTitle
                  active={selected === "about" ? "true" : "false"}
                  className="col-lg-2"
                >
                  <HeaderSpan
                    active={selected === "about" ? "true" : "false"}
                    onClick={goToAbout}
                  >
                    {about}
                  </HeaderSpan>
                </HeaderTitle>

                <HeaderTitle
                  active={selected === "skills" ? "true" : "false"}
                  className="col-lg-2"
                >
                  <HeaderSpan
                    active={selected === "skills" ? "true" : "false"}
                    onClick={goToSkills}
                  >
                    {skills}
                  </HeaderSpan>
                </HeaderTitle>

                <HeaderTitle
                  active={selected === "socials" ? "true" : "false"}
                  className="col-lg-2"
                >
                  <HeaderSpan
                    active={selected === "socials" ? "true" : "false"}
                    onClick={goToSocials}
                  >
                    {socials}
                  </HeaderSpan>
                </HeaderTitle>

                <HeaderTitle
                  active={selected === "contact" ? "true" : "false"}
                  className="col-lg-2"
                >
                  <HeaderSpan
                    active={selected === "contact" ? "true" : "false"}
                    onClick={goToContact}
                  >
                    {contact}
                  </HeaderSpan>
                </HeaderTitle>

                <HeaderTitle className="col-lg-1">
                  <HeaderTheme
                    className="fa-solid fa-moon"
                    onClick={changeTheme}
                    ref={theme}
                  ></HeaderTheme>
                </HeaderTitle>

                <HeaderTitle className="col-lg-1 d-flex flex-row align-items-center">
                  <HeaderFlag src={flag} />
                  <HeaderSelect
                    value={selectedOptionEn == true ? "EN" : "TR"}
                    onChange={changeLanguage}
                  >
                    <HeaderOption value={"EN"}>EN</HeaderOption>
                    <HeaderOption value={"TR"}>TR</HeaderOption>
                  </HeaderSelect>
                </HeaderTitle>
              </div>
            </HeaderComputer>

            <HeaderMobile>
              <div className="row">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <HeaderIcon
                    className="fa-solid fa-bars"
                    onClick={handleMobile}
                  ></HeaderIcon>
                  <HeaderTitle>
                    <HeaderTheme
                      className="fa-solid fa-moon"
                      onClick={changeTheme}
                      ref={themeMobile}
                    ></HeaderTheme>
                  </HeaderTitle>
                  <HeaderTitle className="col-lg-1 d-flex flex-row align-items-center">
                    <HeaderFlag src={flag} />
                    <HeaderSelect
                      value={selectedOptionEn == true ? "EN" : "TR"}
                      onChange={changeLanguage}
                    >
                      <HeaderOption value={"EN"}>EN</HeaderOption>
                      <HeaderOption value={"TR"}>TR</HeaderOption>
                    </HeaderSelect>
                  </HeaderTitle>
                </div>

                {isMobile && (
                  <HeaderMenu className="animate__animated animate__backInDown">
                    <HeaderTitle
                      active={selected === "home" ? "true" : "false"}
                    >
                      <HeaderSpan onClick={goToHome}>Osman Baytar</HeaderSpan>
                    </HeaderTitle>
                    <HeaderTitle
                      active={selected === "about" ? "true" : "false"}
                    >
                      <HeaderSpan onClick={goToAbout}>{about}</HeaderSpan>
                    </HeaderTitle>

                    <HeaderTitle
                      active={selected === "skills" ? "true" : "false"}
                    >
                      <HeaderSpan onClick={goToSkills}>{skills}</HeaderSpan>
                    </HeaderTitle>

                    <HeaderTitle
                      active={selected === "projects" ? "true" : "false"}
                    >
                      <HeaderSpan active={"false"} onClick={goToSocials}>
                        {socials}
                      </HeaderSpan>
                    </HeaderTitle>

                    <HeaderTitle
                      active={selected === "contact" ? "true" : "false"}
                    >
                      <HeaderSpan active={"false"} onClick={goToContact}>
                        {contact}
                      </HeaderSpan>
                    </HeaderTitle>
                  </HeaderMenu>
                )}
              </div>
            </HeaderMobile>
          </div>
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;
