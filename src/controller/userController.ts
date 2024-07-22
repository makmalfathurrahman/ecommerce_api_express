import prisma from "../config/prismaClient";
import express from "express";

const readUser = async (req: express.Request, res: express.Response) => {
  try {
    res.json({ message: "Hello from User" });
  } catch (error) {
    res.json({ error });
  }
};

export default readUser;
