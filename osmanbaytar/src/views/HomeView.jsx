import {
  HomeViewContainer,
  HomeViewh1,
  HomeViewh3,
  HomeViewp,
  HomeViewButtonDiv,
  HomeViewButton,
  HomeViewBackground,
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

  return (
    <HomeViewContainer>
      <div className="container py-5">
        <div className="row ">
          <div className="col-lg-6">
            <HomeViewh1>{data.title}</HomeViewh1>
            <HomeViewh3>{data.subTitle}</HomeViewh3>
            <HomeViewp>{data.text}</HomeViewp>
            <HomeViewButtonDiv>
              <HomeViewButton>{data.button1}</HomeViewButton>
              <HomeViewButton onClick={goToContact}>
                {data.button2}
              </HomeViewButton>
            </HomeViewButtonDiv>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <HomeViewBackground className="bg-img"></HomeViewBackground>
          </div>
        </div>
      </div>
    </HomeViewContainer>
  );
};

export default HomeView;
