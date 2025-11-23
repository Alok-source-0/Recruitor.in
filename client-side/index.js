const axios = require('axios')
const parseString = require('xml2js').parseString
const jsonxml = require('jsontoxml');

const jobj = {
  "employees": [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
  ]
};


let xml = jsonxml(jobj)
// console.log(xml);
const options = {
  method: 'post',
  url: 'http://localhost:5000/api/login',
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8',
  },
  data: xml,
}
// console.log(options.data);
axios(options)
  .then(response => {
    console.log(response.data);
    parseString(response.data, (err, result) => {
      console.log(JSON.stringify(result['soap:Envelope']['soap:Body']))
      // console.log('res--'+ result)

    })
  })
  .catch(err => {
    console.log(err.message)
  })