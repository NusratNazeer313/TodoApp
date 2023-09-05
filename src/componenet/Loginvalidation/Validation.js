import React from "react"

const Validation = () => {

    let errors = {}
    if (!values.email) {
        errors.email = 'Email is Required'
    }
    if (!values.password) {
        errors.password = 'Password is Required'
    } else if (values.password.length < 8) {
        errors.password = 'password must be more than 8 characters'
    }
    return errors;
}
export default Validation;