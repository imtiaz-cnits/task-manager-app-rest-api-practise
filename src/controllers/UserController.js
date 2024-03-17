const UsersModel = require("../models/UsersModel");

exports.registration = async (req, res) => {
  try {
    let reqBody = req.body;
    await UsersModel.create(reqBody);
    res.json({ status: "Success", message: "Registration Completed" });
  } catch (err) {
    res.json({ status: "fail", message: err });
  }
};

exports.login = (req, res) => {};

exports.profileUpdate = (req, res) => {};

exports.profileDetails = (req, res) => {};

exports.verifyEmail = (req, res) => {};

exports.verifyOTP = (req, res) => {};

exports.passwordReset = (req, res) => {};
