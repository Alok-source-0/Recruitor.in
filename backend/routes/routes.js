require("dotenv").config();
const { Router } = require("express");
const controller = require("./../controller/login.controller");
const route = Router();
const { success, error } = require("./../util/responses");
const { authentication } = require("./../util/auth");


route.post("/login", async (req, res) => {
  try {
    // const data = ;
    console.log(req.body);
    // console.log();
    //login code here
    controller.login(req.body.username, req.body.password).then((data) => {
      if (data) {
        return res
          .status(200)
          .json(
            success(
              "user logged in successfully",
              { user: data.user, token: data.token },
              res.statusCode
            )
          );
      } else {
        return res
          .status(401)
          .json(error("Invalid credentials", res.statusCode));
      }
    });
  } catch (err) {
    
    console.log(err);
    return res.status(500).json(error("Internal server error", res.statusCode));
  }
});
route.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    //registration code here
    controller.register(req.body).then((data) => {
      if (data) {
        return res
          .status(201)
          .json(
            success(
              "user registered successfully",
              { user: data.user, token: data.token },
              res.statusCode
            )
          );
      } else {
        return res
          .status(400)
          .json(error("Could not register user", res.statusCode));
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(error("Internal server error", res.statusCode));
  }
}); 


module.exports = route;
