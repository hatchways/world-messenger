// Pull in validator and is-empty dependencies
const Validator = require("validator");
const isEmpty = require("is-empty");

// Export the function validateRegisterInput, which takes in data as a parameter
module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert all empty fields to an empty string before running validation checks (validator only works with strings)
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";

    // Check for empty fields, valid email formats, password requirements and confirm password equality using validator functions
    // FirstName checks
    if (Validator.isEmpty(data.firstName)) {
        errors.firstname = "First name field is required";
        errors.msg = "First name field is required";
    }
    // LastName checks
    if (Validator.isEmpty(data.lastName)) {
        errors.lastname = "Last name field is required";
        errors.msg = "Last name field is required";
    }

    // Return our errors object with any and all errors contained as well as an isValid boolean that checks to see if we have any errors
    return {
        errors,
        isValid: isEmpty(errors)
    };

};
