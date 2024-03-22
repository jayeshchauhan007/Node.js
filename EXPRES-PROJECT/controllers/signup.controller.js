const path = require("path");

function getSignupForm(req, res) {
    res.render('signup', {
        formdata: "d-none",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: "",
    });
}

function postSignupForm(req, res) {
    let {first_name, last_name, email, password, cpassword} = req.body;
    res.render('signup', {
        formdata: "",
        firstname: first_name,
        lastname: last_name,
        email: email,
        password: password,
        cpassword: cpassword
    });
}

module.exports = {
    getSignupForm,
    postSignupForm
};