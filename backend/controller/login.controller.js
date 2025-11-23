// //
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const { authentication } = require("./../util/auth");
const { labTests } = require("./../models/indes");
const obj1 = require('./../bms_labs');
const fs = require("fs");
const csv = require("fast-csv");



module.exports = {
  sendMail: async function (payload) {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sonukr995891@gmail.com",
        pass: "apuRv001",
      },
    });

    let mailDetails = {
      from: "sonukr995891@gmail.com",
      to: "apurv121.ranjan@gmail.com",
      subject: "Payload mail",
      text: JSON.stringify(payload),
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs", err);
      } else {
        console.log("Email sent successfully");
        return data;
      }
    });
  },

  fillGsheet: async function (payload) {
    const { price, test, lab } = payload;
    const googleSheetsInstance = await authentication();

    // // spreadsheet id
    const spreadsheetId = "1MBQwu0lmO6RWHj6623-DhE47yR3JwAgIa0wBqbIm8d8";

    //write data into the google sheets
    const res = await googleSheetsInstance.spreadsheets.values.append(
      {
        spreadsheetId, //spreadsheet id
        range: "Sheet1!A:C", //sheet name and range of cells
        valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
        resource: {
          values: [[price, test, lab]],
        },
      },
      (err, res) => {
        if (err) return console.log("The API returned an error: " + err);
        console.log("data append to sheet");

        return res;
      }
    );

    // response.send(res);
  },

  upload: async function (req, res) {
    try {
      // console.log(req.file);
      if (req.file == undefined) {
        return res.status(400).send("Please upload a CSV file!");
      } else {
        let path = __dirname + "/../" + "files/" + req.file.filename;
        // console.log('--------' , path);
        let labtestData = [];
        fs.createReadStream(path)
          .pipe(csv.parse({ headers: true }))
          .on("error", (error) => {
            throw error.message;
          })
          .on("data", (row) => {
            if (!row["isActive"]) s;
            row["isActive"] = "1";

            labtestData.push(row);
          })
          .on("end", () => {
            labTests
              .bulkCreate(labtestData, {
                // fields: ["id", "name", "address"],
                updateOnDuplicate: ["itemId"],
              })
              .then(() => {
                res.status(200).send({
                  message:
                    "Uploaded the file successfully: " + req.file.originalname,
                });
              })
              .catch((error) => {
                res.status(500).send({
                  message: "Fail to import data into database!",
                  error: error.message,
                });
              });
          });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Could not upload the file: " + req.file.originalname,
      });
    }
  },

  uniqueTestCenter: function (obj) {
    
  },
};
