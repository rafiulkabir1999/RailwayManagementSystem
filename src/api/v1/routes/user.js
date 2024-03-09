import express from "express";
import { getuser, adduser } from "../controllers/user.js";

const router = express.Router();

router.route("/").get(getuser).post(adduser);

export default router;
