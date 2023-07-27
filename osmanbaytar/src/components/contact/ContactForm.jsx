import { useFormik } from "formik";
import { contactSchemaEn, contactSchemaTr } from "../../schemas";
import "../../styles/ContactForm.css";
import { useState, useEffect, useRef } from "react";
import contactFormData from "../../data/contact/contactFormData";
import { useSelector } from "react-redux";
import { ContactTitle } from "../../styles/contact/ContactStyle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [isChecked, setIsChecked] = useState(false);

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
      },
      validationSchema: schema,
      onSubmit,
    });

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function nameWarningToastEn() {
    toast.warning("Name can not be empty!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function nameWarningToastTr() {
    toast.warning("İsim boş bırakılamaz!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function emailWarningToastEn() {
    toast.warning("Email can not be empty!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function emailWarningToastTr() {
    toast.warning("Email boş bırakılamaz!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function emailWarningToast2En() {
    toast.warning("Please type a valid email!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function emailWarningToast2Tr() {
    toast.warning("Lütfen geçerli bir email giriniz!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function messageWarningToastEn() {
    toast.warning("Message can not be empty!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function messageWarningToastTr() {
    toast.warning("Mesaj boş bırakılamaz!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function checkToast(e) {
    if (language === "en") {
      if (values.name === "") {
        nameWarningToastEn();
        nameRef.current.focus();
        e.preventDefault();
      } else if (values.email === "") {
        emailWarningToastEn();
        emailRef.current.focus();
        e.preventDefault();
      } else if (
        !values.email.includes("@") ||
        !(values.email.substring(values.email.length - 4) == ".com")
      ) {
        emailWarningToast2En();
        emailRef.current.focus();
        e.preventDefault();
      } else if (values.message === "") {
        messageWarningToastEn();
        messageRef.current.focus();
        e.preventDefault();
      }
    } else if (language === "tr") {
      if (values.name === "") {
        nameWarningToastTr();
        nameRef.current.focus();
        e.preventDefault();
      } else if (values.email === "") {
        emailWarningToastTr();
        emailRef.current.focus();
        e.preventDefault();
      } else if (
        !values.email.includes("@") ||
        !(values.email.substring(values.email.length - 4) == ".com")
      ) {
        emailWarningToast2Tr();
        emailRef.current.focus();
        e.preventDefault();
      } else if (values.message === "") {
        messageWarningToastTr();
        messageRef.current.focus();
        e.preventDefault();
      }
    }
  }

  function checkOnChange() {
    if (
      values.name !== "" &&
      values.email !== "" &&
      values.message !== "" &&
      values.email.includes("@") &&
      values.email.substring(values.email.length - 4) == ".com"
    ) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  useEffect(() => {
    checkOnChange();
  }, [values]);

  return (
    <form
      action={isChecked ? "https://formsubmit.co/bosman1997@hotmail.com" : null}
      target={isChecked ? "_blank" : null}
      method={isChecked ? "POST" : null}
      className="contactForm"
      onChange={checkOnChange}
    >
      <ContactTitle>{title}</ContactTitle>
      <div className="inputDiv">
        <input type="hidden" name="_subject" value="New Email" />
        <div className="inputItem">
          <label>{nameLabel}</label>
          <input
            type="name"
            value={values.name}
            onChange={handleChange}
            id="name"
            name="name"
            ref={nameRef}
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
            name="email"
            ref={emailRef}
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
          name="message"
          ref={messageRef}
          placeholder={messagePlaceholder}
          className={errors.message ? "input-error" : ""}
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" disabled={isSubmitting} onClick={checkToast}>
          {button}
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
