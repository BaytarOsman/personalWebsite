import {
  SocialBoxContainer,
  SocialBoxImageDiv,
  SocialBoxImage,
  SocialBoxVideo,
  SocailBoxTextDiv,
  SocialBoxUpper,
  SocialBoxTitle,
  SocialBoxDate,
  SocialBoxDescription,
} from "../../styles/socials/socialsViewStyle";

const SocialBox = ({ data, index }) => {
  return (
    <SocialBoxContainer className="row">
      <SocialBoxImageDiv className="col-lg-4 mx-auto" order={index}>
        {data.image.substring(data.image.length - 3) === "mp4" ? (
          <SocialBoxVideo
            className={
              index % 2 == 0
                ? "animate__animated animate__rotateInDownRight"
                : "animate__animated animate__rotateInDownLeft"
            }
            src={data.image}
            loop
            autoPlay
            muted
          />
        ) : (
          <SocialBoxImage
            className={
              index % 2 == 0
                ? "animate__animated animate__rotateInDownRight"
                : "animate__animated animate__rotateInDownLeft"
            }
            src={data.image}
          />
        )}
      </SocialBoxImageDiv>
      <SocailBoxTextDiv className="col-lg-8">
        <SocialBoxUpper>
          <SocialBoxTitle>{data.title}</SocialBoxTitle>
          <SocialBoxDate>{data.date}</SocialBoxDate>
        </SocialBoxUpper>
        <SocialBoxDescription>{data.description}</SocialBoxDescription>
      </SocailBoxTextDiv>
    </SocialBoxContainer>
  );
};

export default SocialBox;
