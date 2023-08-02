import {
  HomeViewContainer,
  HomeViewh1,
  HomeViewh3,
  HomeViewp,
  HomeViewButtonDiv,
  HomeViewButton,
  HomeViewImage,
} from "../styles/home/HomeViewStyle";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import homeData from "../data/home/homeData";
import { useNavigate } from "react-router";

const HomeView = () => {
  const language = useSelector((state) => state.language.language);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  function goToContact() {
    navigate("/contact");
  }

  useEffect(() => {
    if (language === "en") {
      setData(homeData.homeDataEn);
    } else if (language === "tr") {
      setData(homeData.homeDataTr);
    }
  }, [language]);

  const theme = useSelector((state) => state.theme.theme);

  return (
    <HomeViewContainer theme={theme}>
      <div className="container py-5">
        <div className="row ">
          <div className="col-lg-6 d-flex flex-column text-start align-items-start justify-content-center">
            <HomeViewh1>{data.title}</HomeViewh1>
            <HomeViewh3>{data.subTitle}</HomeViewh3>
            <HomeViewp>{data.text}</HomeViewp>
            <HomeViewButtonDiv>
              <a
                href={
                  language == "en"
                    ? "pdf/OsmanBaytar_EnglishCV.pdf"
                    : "pdf/OsmanBaytar_TürkçeCV.pdf"
                }
                download
              >
                <HomeViewButton>{data.button1}</HomeViewButton>
              </a>
              <HomeViewButton onClick={goToContact}>
                {data.button2}
              </HomeViewButton>
            </HomeViewButtonDiv>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <HomeViewImage
              className="animate__animated animate__backInRight"
              src="images/me.JPG"
            ></HomeViewImage>
          </div>
        </div>
      </div>
    </HomeViewContainer>
  );
};

export default HomeView;
