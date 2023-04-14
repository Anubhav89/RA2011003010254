const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "jhon-doe-railway-server");
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid token" });
  }
}

module.exports = verifyToken;
