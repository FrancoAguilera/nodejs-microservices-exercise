import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors()) // specify here only allowed origins
app.use("/", router);

export default app;