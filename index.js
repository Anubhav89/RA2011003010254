const express = require("express");
const cors = require("cors");
const app = express();

const trains = require("./routes/trains");
const register = require("./routes/register");
const auth = require("./middleware/auth");

app.use(cors());
app.use("*", cors());
app.use(express.json());

app.use("/trains", trains);
app.use("/", register);

app.listen(process.env.PORT || 6969, () => {
  console.log("Server started on sucessfully");
});
