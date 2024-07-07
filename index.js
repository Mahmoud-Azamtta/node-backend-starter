import express from "express";
import routerManager from "./routes/routerManager.js";
import "dotenv/config";
import morgan from "morgan";
import CORS from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import corsOptions from "./config/corsOptions.js";
import databaseConnection from "./config/dbConnection.js";
import AppError from "./utils/AppError.js";

const app = express();
const PORT = process.env.PORT || 9090;

app.use(express.json());
app.use(morgan("dev"));
app.use(CORS(corsOptions));

databaseConnection();

app.use("/api", routerManager);

app.all("*", (req, _, next) => {
  next(new AppError(`End point ${req.originalUrl} not found`, 404));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
