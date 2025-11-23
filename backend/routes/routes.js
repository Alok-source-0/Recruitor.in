require("dotenv").config();
const { Router } = require("express");
const controller = require("./../controller/login.controller");
const route = Router();
const { success, error } = require("./../util/responses");
const { google } = require("googleapis");
const { authentication } = require("./../util/auth");
var axios = require("axios");
const multer = require("multer");
const fs = require("fs");
const csv = require("fast-csv");

global.__basedir = __dirname;

// console.log('-----------' ,);
const path = __basedir + "/../" + "files/";

// Multer Upload Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

// Filter for CSV file
const csvFilter = (req, file, cb) => {
  if (file.mimetype.includes("csv") || file.mimetype.includes("xlsx")) {
    cb(null, true);
  } else {
    cb("Please upload only csv or xlsx file.", false);
  }
};
const upload = multer({ storage: storage, fileFilter: csvFilter });

route.post("/login", async (req, res) => {
  try {
    // const data = ;
    console.log(req.body);
    // console.log();
    res
      .status(200)
      .json(
        success(
          "details fetched successfully",
          { data: req.body },
          res.statusCode
        )
      );
  } catch (err) {
    console.log(err);
  }
});

route.post("/sheet", async (request, response) => {
  try {
    const result = controller.fillGsheet(request.body);
    response.send(result);

    //Google sheets instance
  } catch (error) {
    console.log(error);
  }
});

route.post("/sendmail", async (req, res) => {
  let payload = req.body;

  let abc = await controller.sendMail(payload);
  res.send(abc);
});

route.post("/price", async (req, res) => {
  try {
    var data = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">\r\n        <Body>\r\n            <call xmlns="urn:Magento">\r\n                <sessionId>a75a6aae5ff39e913e40e2db2178a2bf</sessionId>\r\n                <resourcePath>publishersprice_api.publisherspriceapi</resourcePath>\r\n                <args>vendorpriceuser</args>\r\n            </call>\r\n        </Body>\r\n    </Envelope>';
    var config = {
      method: 'post',
      url: 'https://bookmyscans.com/api/soap/',
      headers: { 
        'apiKey': 'vendorpriceuser123', 
        'Content-Type': 'application/xml', 
        'Cookie': 'PHPSESSID=qt81ms5ha2vn3qv149hcodgh44'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      // // const obj = JSON.stringify(response.data);
      var obj = response.data;
      let arr = [];
      var index = Object.keys(obj);
      // console.log(index);
      index.forEach(function (idx) {
        arr.push(obj[idx]);
        // console.log(obj[idx]);
      })
      
      res.send(arr);
    })
    .catch(function (error) {
      console.log(error);
    });
    

  } catch (err) {
    console.log(err.message);
  }

});

route.post("/uploadcsv", upload.single("file"), async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.status(400).send("Pls Upload a file!");
    } else {
      const temp = controller.upload(req, res);
      // res.send(temp)
    }
    // res.status(200).json(success("details fetched successfully", { data: "ans" }, res.statusCode));
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
