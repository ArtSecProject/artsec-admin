import * as Yup from "yup";

export const LOGIN_SCHEMA = Yup.object({
    email: Yup.string().required("Email is required").email('This field must be a valid email address'),
    password: Yup.string().required("Password is required"),
})
export const REG_SCHEMA = Yup.object({
    email: Yup.string().required("Email is required").email('This field must be a valid email address'),
    password: Yup.string().required("Password is required"),
    firstname: Yup.string().required("Fisrt Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    password_confirmation: Yup.string().required('Password confirmation is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')

})

export const FORGET_PASSWORD_SCHEMA = Yup.object({
    email: Yup.string().required("Email is required").email('This field must be a valid email address'),
})