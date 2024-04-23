var request = require("request");
var returnedtext;

//calling for url
async function asyncCall() {
  console.log("calling");
  const result = await new Promise((resolve, reject) => {
    request(
      {
        uri: "https://www.ecfr.gov/api/renderer/v1/content/enhanced/2024-03-01/title-2",
      },
      function (error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    );
  });

  returnedtext = result;
}

//calling function
asyncCall()
  .then(() => {
    console.log(returnedtext);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
