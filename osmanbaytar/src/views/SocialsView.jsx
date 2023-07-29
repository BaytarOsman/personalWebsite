import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SocialViewData from "../data/socials/SocialViewData";
import SocialBox from "../components/socials/SocialBox";
import {
  SocialsViewMain,
  SocialsContainer,
  SocialTitle,
} from "../styles/socials/socialsViewStyle";

const SocialsView = () => {
  const language = useSelector((state) => state.language.language);
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (language === "en") {
      setTitle(SocialViewData.SocialTitleEn);
      setData(SocialViewData.SocialDataEn);
    } else if (language === "tr") {
      setTitle(SocialViewData.SocialTitleTr);
      setData(SocialViewData.SocialDataTr);
    }
  }, [language]);

  const theme = useSelector((state) => state.theme.theme);

  return (
    <SocialsViewMain theme={theme}>
      <SocialsContainer className="container">
        <SocialTitle>{title}</SocialTitle>
        {data.map((item, index) => (
          <SocialBox key={index} data={item} index={index} />
        ))}
      </SocialsContainer>
    </SocialsViewMain>
  );
};

export default SocialsView;
