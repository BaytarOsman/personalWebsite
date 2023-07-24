import {
  ContactContainer,
  ContactTitle,
  ContactList,
} from "../../styles/contact/ContactStyle";

const ContactInformations = ({ data, title }) => {
  return (
    <ContactContainer>
      <ContactTitle>{title}</ContactTitle>
      <ContactList>
        {Object.values(data).map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ContactList>
    </ContactContainer>
  );
};

export default ContactInformations;
