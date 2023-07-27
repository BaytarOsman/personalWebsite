import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  EducationContainer,
  EducationTitle,
  EducationList,
} from "../../styles/about/EducationStyle";
import EducationBox from "./EducationBox";
import experienceData from "../../data/about/experienceData";

const Experiences = () => {
  const language = useSelector((state) => state.language.language);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (language === "en") {
      setData(experienceData.experienceDataEn);
      setTitle(experienceData.experienceDataTitleEn);
    } else if (language === "tr") {
      setData(experienceData.experienceDataTr);
      setTitle(experienceData.experienceDataTitleTr);
    }
  }, [language]);
  return (
    <div className="container">
      <EducationContainer className="row">
        <EducationTitle>{title}</EducationTitle>
        <EducationList>
          {data.map((item, index) => {
            return <EducationBox key={index} data={item} />;
          })}
        </EducationList>
      </EducationContainer>
    </div>
  );
};

export default Experiences;
