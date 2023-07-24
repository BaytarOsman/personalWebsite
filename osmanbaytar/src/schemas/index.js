import * as yup from "yup";

export const contactSchemaEn = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
  file: yup.mixed(),
});

export const contactSchemaTr = yup.object().shape({
  name: yup.string().required("İsim gereklidir"),
  email: yup.string().email("Geçersiz e-posta").required("E-posta gereklidir"),
  message: yup.string().required("Mesaj gereklidir"),
  file: yup.mixed(),
});
