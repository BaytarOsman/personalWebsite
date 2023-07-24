import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import skillsData from "../data/skills/skillsData";
import SkillsBox from "../components/skills/SkillsBox";
import { SkillsViewContainer } from "../styles/skills/SkillsViewStyle";

const SkillsView = () => {
  const language = useSelector((state) => state.language.language);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (language === "en") {
      setData(skillsData.skillsDataEn);
      setTitle(skillsData.skillsDataTitleEn);
    } else if (language === "tr") {
      setData(skillsData.skillsDataTr);
      setTitle(skillsData.skillsDataTitleTr);
    }
  }, [language]);

  return (
    <SkillsViewContainer className="container">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-lg-4">
            <SkillsBox dataBox={item} title={title} />
          </div>
        ))}
      </div>
    </SkillsViewContainer>
  );
};

export default SkillsView;
