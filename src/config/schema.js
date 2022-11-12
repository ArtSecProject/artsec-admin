import * as Yup from "yup";

export const LOGIN_SCHEMA = Yup.object({
    email: Yup.string().required("Email is required").email('This field must be a valid email address'),
    password: Yup.string().required("Password is required"),
})