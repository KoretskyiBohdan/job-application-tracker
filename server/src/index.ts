import express from "express";
import cors from "cors";
import applicationsRouter from "./routes/applications";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/applications", applicationsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
