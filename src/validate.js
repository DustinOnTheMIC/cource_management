function checkValidate(name, value) {
    let err = null;
    switch (name) {
        case ('email'):
            // EMAIL
            if (value.trim() === "") {
                err = "Invalid information!!";
            } else {
                if (value.search(/[!#$%^&*()]/) !== -1 ||
                    value.search("@gmail.com") === -1
                ) {
                    err = "Invalid email (abc@gmail.com)";

                } else {
                    err = "";
                }
            }
            break;
        case ('name'):
            // NAME
            if (value.trim() === "") {
                err = "Invalid information!!";

            } else {
                if (value.search(/[!@#$%^&*()]/) !== -1 ||
                    value.search(/[a-zA-Z]/) === -1 ||
                    value.search(" ") !== -1
                ) {
                    err = "Does not contain special characters and spaces"
                } else {
                    err = "";
                }
            }

            break;
        case ('password'):
            // PASS
            if (value.trim() === "") {
                err = "Invalid information!!";
            } else {
                if (value.search(/[!@#$%^&*()]/) === -1 ||
                    value.search(/[0-9]/) === -1 ||
                    value.search(/[a-zA-Z]/) === -1 ||
                    value.length < 8
                ) {
                    err = "Password at least 8 characters containing special characters " +
                        ", numeric, alphanumeric characters and at LEAST ONE UPPERCASE character !!";
                } else {
                    err = "";
                }
            }
            break;
        case ('phone'):
            // PASS
            var phoneRule = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (value.match(phoneRule)) {
                err = "";
            } else {
                err = "Please enter your phone"
            }
            break;
        default:
    }
    return err;
}

export default {
    checkValidate
}