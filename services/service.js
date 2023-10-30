const request = require("request");

// was testing promise
const requestEndpoint = (url) => {
  return new Promise((resolve, reject) => {
    request({ url }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject({
          type: "error",
          message: error ? error.message : "Unexpected status code",
        });
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
};

const requestURL = (requestEndpoint, res) => {
  request({ url: requestEndpoint }, (error, response, body) => {
    /* If Error OR status code is anything but 200 */
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: err.message });
    }
    /* Parse JSON */
    res.json(JSON.parse(body));
  });
};

module.exports = requestURL;
