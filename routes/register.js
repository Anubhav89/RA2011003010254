const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const users = {};

app.post("/register", (req, res) => {
  const companyName = req.body.companyName.trim();
  const clientID = uuidv4();
  const clientSecret = uuidv4().split("-")[0];
  users[companyName] = { clientID, clientSecret };
  console.log({ users });
  return res.send({ companyName, clientID, clientSecret });
});

app.post("/auth", async (req, res) => {
  const companyName = req.body.companyName;
  const clientID = req.body.clientID;
  const clientSecret = req.body.clientSecret;

  console.log({ companyName });
  const details = users[companyName];
  console.log({ details });
  if (
    details?.clientID === clientID &&
    details?.clientSecret === clientSecret
  ) {
    const access_token = await jwt.sign(
      { companyName, clientID },
      "jhon-doe-railway-server",
      { expiresIn: "12h" },
    );
    const decoded = jwt.decode(access_token, { complete: true });

    const expirationTime = new Date(decoded.payload.exp * 1000);

    return res.send({
      access_token,
      token_type: "Bearer",
      expires: expirationTime.getTime(),
    });
  }
  return res.send("error");
});

module.exports = app;
