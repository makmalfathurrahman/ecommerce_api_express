import prisma from "../config/prismaClient";
import express from "express";
import { v7 as uuidv7 } from "uuid";
import moment from "moment-timezone";

// Create User
export const createUser = async (req: express.Request, res: express.Response) => {
  const { username, name, email, password, phone } = req.body;
  try {
    const currentTime = moment().tz("Asia/Jakarta").toDate();
    const result = await prisma.user.create({
      data: {
        id: uuidv7(),
        username,
        name,
        email,
        password,
        phone,
        created_at: currentTime,
        updated_at: currentTime,
      },
    });

    res.status(201).json(result);
  } catch (error) {
    res.json({ error });
  }
};

// Read User
export const readUser = async (req: express.Request, res: express.Response) => {
  try {
    const result = await prisma.user.findMany({
      select: {
        username: true,
        name: true,
      },
    });

    res.status(200).json(result);
  } catch (error) {
    res.json({ error });
  }
};
