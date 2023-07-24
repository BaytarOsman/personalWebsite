import {
  ReferencesBoxContainer,
  ReferencesBoxTitle,
  ReferencesBoxInfo,
  ReferencesBoxDescription,
  ReferencesBoxPhoneNumber,
} from "../../styles/about/ReferencesStyle";

const ReferencesBox = ({ data }) => {
  return (
    <div className="col-lg-6">
      <ReferencesBoxContainer>
        <ReferencesBoxTitle target="_blank" href={data.linkedin}>
          {data.title}
        </ReferencesBoxTitle>
        <ReferencesBoxInfo className="d-flex flex-column justify-content-between">
          <ReferencesBoxDescription>
            {data.description}
          </ReferencesBoxDescription>
          <ReferencesBoxPhoneNumber>
            {data.phoneNumber}
          </ReferencesBoxPhoneNumber>
        </ReferencesBoxInfo>
      </ReferencesBoxContainer>
    </div>
  );
};

export default ReferencesBox;
