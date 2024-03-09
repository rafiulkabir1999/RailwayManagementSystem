import Express, { json } from "express";
import ConnecttoDB from "./config/Connectdb.js";
import userroute from "./api/v1/routes/user.js";
import bodyParser from "body-parser";

const app = Express();

//db connection
ConnecttoDB();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1/user", userroute);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
