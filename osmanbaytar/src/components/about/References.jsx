import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import referencesData from "../../data/about/referencesData";
import ReferencesBox from "./ReferencesBox";
import {
  ReferencesContainer,
  ReferencesTitle,
} from "../../styles/about/ReferencesStyle";

const References = () => {
  const language = useSelector((state) => state.language.language);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (language === "en") {
      setData(referencesData.referencesDataEn);
      setTitle(referencesData.referencesTitleEn);
    } else if (language === "tr") {
      setData(referencesData.referencesDataTr);
      setTitle(referencesData.referencesTitleTr);
    }
  }, [language]);

  return (
    <div className="container my-5">
      <ReferencesContainer className="row">
        <ReferencesTitle>{title}</ReferencesTitle>
        {data.map((item, index) => {
          return <ReferencesBox key={index} data={item} />;
        })}
      </ReferencesContainer>
    </div>
  );
};

export default References;
