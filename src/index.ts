import express from "express";
import "dotenv/config";

import route from "./routes/userRoutes";

const app = express();

app.use(route);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server listening on port ${process.env.APP_PORT}`);
});
