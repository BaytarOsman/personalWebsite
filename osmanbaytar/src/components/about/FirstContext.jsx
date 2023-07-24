import {
  FirstContextContainer,
  FirstContextH3,
  FirstContextImage,
  FirstContextTitle,
  FirstContextImageBox,
} from "../../styles/about/FirstContextStyle";
import firstContextData from "../../data/about/firstContextData";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const FirstContext = () => {
  const language = useSelector((state) => state.language.language);
  const [paragraph, setParagraph] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (language === "en") {
      setParagraph(firstContextData.firstContextDataEn);
      setTitle(firstContextData.firstContextDataTitleEn);
    } else if (language === "tr") {
      setParagraph(firstContextData.firstContextDataTr);
      setTitle(firstContextData.firstContextDataTitleTr);
    }
  }, [language]);

  return (
    <div className="container">
      <FirstContextContainer className="row my-5 align-items-center">
        <FirstContextH3>{title}</FirstContextH3>
        <div className="col-lg-4">
          <FirstContextImageBox>
            <FirstContextImage
              className="px-auto"
              src="../../../public/me.JPG"
            />
          </FirstContextImageBox>
        </div>
        <FirstContextTitle className="col-lg-8 fs-3">
          <p>{paragraph}</p>
        </FirstContextTitle>
      </FirstContextContainer>
    </div>
  );
};

export default FirstContext;
