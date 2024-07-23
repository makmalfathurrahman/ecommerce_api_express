import { createUser, readUser } from "../controller/userController.ts";

import express from "express";

const route = express.Router();

route.post("/user", createUser);
route.get("/user", readUser);

export default route;
