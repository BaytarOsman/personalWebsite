import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import personalInformationsData from "../../data/about/personalInformationsData";
import {
  PersonalInformationsContainer,
  PersonalInformationsTitle,
  PersonalInformationsList,
  PersonalInformationsItem,
} from "../../styles/about/PersonalInformationsStyle";

const PersonalInformations = () => {
  const language = useSelector((state) => state.language.language);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (language === "en") {
      setData(personalInformationsData.personalInformationsDataEn);
      setTitle(personalInformationsData.personalInformationsDataTitleEn);
    } else if (language === "tr") {
      setData(personalInformationsData.personalInformationsDataTr);
      setTitle(personalInformationsData.personalInformationsDataTitleTr);
    }
  }, [language]);

  return (
    <div className="container">
      <PersonalInformationsContainer className="row my-5">
        <PersonalInformationsTitle>{title}</PersonalInformationsTitle>
        <PersonalInformationsList>
          {Object.values(data).map((item, index) => {
            return (
              <PersonalInformationsItem key={index}>
                {item}
              </PersonalInformationsItem>
            );
          })}
        </PersonalInformationsList>
      </PersonalInformationsContainer>
    </div>
  );
};

export default PersonalInformations;
