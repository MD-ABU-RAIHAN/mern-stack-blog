import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Test Response: Hello Blog App API");
});

app.listen(PORT, () => {
  console.log(`Blog App Server is running on port ${PORT}`);
});
