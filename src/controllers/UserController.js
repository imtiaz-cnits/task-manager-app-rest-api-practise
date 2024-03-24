const UsersModel = require("../models/UsersModel");
const jwt = require('jsonwebtoken');

exports.registration = async (req, res) => {
  try {
    let reqBody = req.body;
    await UsersModel.create(reqBody);
    res.json({ status: "Success", message: "Registration Completed" });
  } catch (err) {
    res.json({ status: "fail", message: err });
  }
};

exports.login = async (req, res) => {
  try {
    let reqBody = req.body;
    let user = await UsersModel.find(reqBody);
    if (user.length > 0) {
      let Payload = {exp:Math.floor(Date.now()/1000) + (24*60*60), data:reqBody['email']};
      let token = jwt.sign(Payload, '123-xyz-abc');
      res.json({status: "success", message: "User Found", token: token})
    }
    else {
      res.json({ status: "fail", message: "No user found" });
    }
    res.json({ status: "success", message: user });
  } catch (err) {
    res.json({ status: "fail", message: err });
  }
};

exports.profileDetails = async (req,res)=>{
  try{
    let email=req.headers['email'];
    let result=await UsersModel.find({email:email})
    res.json({status:"success",data:result})
  }catch (err) {
    res.json({status:"fail",message:err})
  }
};

exports.profileUpdate = async (req, res) => {
  try{
    let email=req.headers['email'];
    let reqBody = req.body;
    await UsersModel.updateOne({email: email}, reqBody);
    res.json({ status: "Success", message: "Updated Successfully" });
  }catch (err) {
    res.json({status:"fail",message:err})
  }
};



exports.verifyEmail = (req, res) => {};

exports.verifyOTP = (req, res) => {};

exports.passwordReset = (req, res) => {};