import express, { json, urlencoded } from "express";
import cors from "cors";

import mainRoutes from "./routes/index.js";

const app = express();

app.use(cors());

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/", mainRoutes);

export default app;
