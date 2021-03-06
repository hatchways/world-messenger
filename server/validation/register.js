// Pull in validator and is-empty dependencies
const Validator = require("validator");
const isEmpty = require("is-empty");

// Export the function validateRegisterInput, which takes in data as a parameter
module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert all empty fields to an empty string before running validation checks (validator only works with strings)
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.language = !isEmpty(data.language) ? data.language : "";

    // Check for empty fields, valid email formats, password requirements and confirm password equality using validator functions
    // Name checks
    if (Validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "E-mail address field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Invalid e-mail address";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    } else if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be at least 6 characters";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    // Language checks
    if (Validator.isEmpty(data.language)) {
        errors.language = "Language is required";
    }

    // Return our errors object with any and all errors contained as well as an isValid boolean that checks to see if we have any errors
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
