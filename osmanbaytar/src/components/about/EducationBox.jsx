import {
  EducationBoxContainer,
  EducationBoxUpper,
  EducationBoxText,
  EducationBoxSpan,
} from "../../styles/about/EducationStyle";

const EducationBox = ({ data }) => {
  return (
    <EducationBoxContainer>
      <EducationBoxUpper>
        <EducationBoxSpan>{data.title}</EducationBoxSpan>
        <EducationBoxSpan>{data.date}</EducationBoxSpan>
      </EducationBoxUpper>
      <EducationBoxText>{data.comment}</EducationBoxText>
    </EducationBoxContainer>
  );
};

export default EducationBox;
