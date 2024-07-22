import express from "express";

import route from "./routes/userRoutes";

const app = express();
const APP_PORT = 3000;

app.use(route);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(APP_PORT, () => {
  console.log(`Server listening on port ${APP_PORT}`);
});
