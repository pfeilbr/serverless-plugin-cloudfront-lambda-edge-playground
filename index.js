"use strict";

const log = o => console.log(JSON.stringify(o));

exports.handler = async (event, context, callback) => {
  log({ event });
  // Get request and request headers
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  // Configure authentication
  const authUser = "user";
  const authPass = "pass";

  // Construct the Basic Auth string
  const authString =
    "Basic " + new Buffer(authUser + ":" + authPass).toString("base64");

  // Require Basic authentication
  if (
    typeof headers.authorization == "undefined" ||
    headers.authorization[0].value != authString
  ) {
    const body = "Unauthorized";
    const response = {
      status: "401",
      statusDescription: "Unauthorized",
      body: body,
      headers: {
        "www-authenticate": [{ key: "WWW-Authenticate", value: "Basic" }]
      }
    };
    return response;
  } else {
    // Continue request processing if authentication passed
    return request;
  }
};
