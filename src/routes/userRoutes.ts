import readUser from "../controller/userController.ts";

import express from "express";

const route = express.Router();

route.get("/user", readUser);

export default route;
