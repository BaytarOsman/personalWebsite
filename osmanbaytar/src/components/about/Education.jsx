import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import EducationBox from "./EducationBox";
import educationData from "../../data/about/educationData";
import {
  EducationContainer,
  EducationTitle,
  EducationList,
} from "../../styles/about/EducationStyle";

const Education = () => {
  const language = useSelector((state) => state.language.language);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (language === "en") {
      setData(educationData.educationDataEn);
      setTitle(educationData.educationDataTitleEn);
    } else if (language === "tr") {
      setData(educationData.educationDataTr);
      setTitle(educationData.educationDataTitleTr);
    }
  }, [language]);
  return (
    <EducationContainer className="container">
      <div className="row">
        <EducationTitle>{title}</EducationTitle>
        <EducationList>
          {data.map((item, index) => {
            return <EducationBox key={index} data={item} />;
          })}
        </EducationList>
      </div>
    </EducationContainer>
  );
};

export default Education;
