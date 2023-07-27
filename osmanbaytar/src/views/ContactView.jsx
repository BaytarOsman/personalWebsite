import ContactForm from "../components/contact/ContactForm";
import contactViewData from "../data/contact/contactViewData";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ContactInformations from "../components/contact/ContactInformations";
import contactInformationsData from "../data/contact/contactInformationsData";
import {
  ContactViewMain,
  ContactViewWrapper,
} from "../styles/contact/ContactStyle";

const ContactView = () => {
  const [title, setTitle] = useState("");
  const language = useSelector((state) => state.language.language);
  const [data, setData] = useState([]);
  const [contactInformationsTitle, setContactInformationsTitle] = useState("");

  useEffect(() => {
    if (language === "en") {
      setTitle(contactViewData.contactViewTitleEn);
      setData(contactInformationsData.contactInformationsDataEn);
      setContactInformationsTitle(contactViewData.contactInformationsTitleEn);
    } else if (language === "tr") {
      setTitle(contactViewData.contactViewTitleTr);
      setData(contactInformationsData.contactInformationsDataTr);
      setContactInformationsTitle(contactViewData.contactInformationsTitleTr);
    }
  }, [language]);

  const theme = useSelector((state) => state.theme.theme);

  return (
    <ContactViewMain theme={theme}>
      <ContactViewWrapper className="container">
        <div className="row ">
          <h1 className="text-center mt-5">{title}</h1>
          <div className="col-lg-6 mt-5">
            <ContactInformations data={data} title={contactInformationsTitle} />
          </div>
          <div className="col-lg-6 mt-5">
            <ContactForm />
          </div>
        </div>
      </ContactViewWrapper>
    </ContactViewMain>
  );
};

export default ContactView;
