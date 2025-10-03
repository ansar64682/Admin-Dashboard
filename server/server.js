import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/dbConfig.js";
import clientRoutes from "./routes/client.routes.js";
import generalRoutes from "./routes/general.routes.js";
import managementRoutes from "./routes/management.routes.js";
import salesRoutes from "./routes/sales.routes.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

/* -------Routes-----*/

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// Database Connection

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Sever Running on PORT : ", port);
  });
});
