import { useFormik } from "formik";
import { contactSchemaEn, contactSchemaTr } from "../../schemas";
import "../../styles/ContactForm.css";
import { useState, useEffect } from "react";
import contactFormData from "../../data/contact/contactFormData";
import { useSelector } from "react-redux";
import { ContactTitle } from "../../styles/contact/ContactStyle";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function ContactForm() {
  const [nameLabel, setNameLabel] = useState("");
  const [namePlaceholder, setNamePlaceholder] = useState("");
  const [emailLabel, setEmailLabel] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("");
  const [messageLabel, setMessageLabel] = useState("");
  const [messagePlaceholder, setMessagePlaceholder] = useState("");

  const [button, setButton] = useState("");
  const [schema, setSchema] = useState({});

  const [title, setTitle] = useState("");

  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    if (language === "en") {
      setNameLabel(contactFormData.contactFormDataEn.name.label);
      setNamePlaceholder(contactFormData.contactFormDataEn.name.placeholder);
      setEmailLabel(contactFormData.contactFormDataEn.email.label);
      setEmailPlaceholder(contactFormData.contactFormDataEn.email.placeholder);
      setMessageLabel(contactFormData.contactFormDataEn.message.label);
      setMessagePlaceholder(
        contactFormData.contactFormDataEn.message.placeholder
      );
      setButton(contactFormData.contactFormDataEn.button);
      setSchema(contactSchemaEn);
      setTitle(contactFormData.contactFormTitleEn);
    } else if (language === "tr") {
      setNameLabel(contactFormData.contactFormDataTr.name.label);
      setNamePlaceholder(contactFormData.contactFormDataTr.name.placeholder);
      setEmailLabel(contactFormData.contactFormDataTr.email.label);
      setEmailPlaceholder(contactFormData.contactFormDataTr.email.placeholder);
      setMessageLabel(contactFormData.contactFormDataTr.message.label);
      setMessagePlaceholder(
        contactFormData.contactFormDataTr.message.placeholder
      );

      setButton(contactFormData.contactFormDataTr.button);
      setSchema(contactSchemaTr);
      setTitle(contactFormData.contactFormTitleTr);
    }
  }, [language]);

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
        folder: "",
      },
      validationSchema: schema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <ContactTitle>{title}</ContactTitle>
      <div className="inputDiv">
        <div className="inputItem">
          <label>{nameLabel}</label>
          <input
            type="name"
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder={namePlaceholder}
            className={errors.name ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.name}</p>}
        </div>
        <div className="inputItem">
          <label>{emailLabel}</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder={emailPlaceholder}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label>{messageLabel}</label>
        <textarea
          type="text"
          value={values.message}
          onChange={handleChange}
          id="message"
          placeholder={messagePlaceholder}
          className={errors.message ? "input-error" : ""}
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" disabled={isSubmitting}>
          {button}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
