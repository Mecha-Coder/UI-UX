import express from "express";
import path from "path";

const PORT = 5300;
const app = express();

app.use(express.static("../frontend"));

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});

//===========================================================

app.get("/*", (req, res) => {
	res.sendFile(path.resolve("../frontend", "index.html"));
});