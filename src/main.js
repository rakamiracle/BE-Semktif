import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("SISKPTIF");
});

app.get("/home", (req, res) => {
  res.send(
    "Sistem Informasi Seminar Kerja Praktik Teknik Informatika UIN Sultan Syarif Kasim Riau"
  );
});

app.listen(3000, () => {
  console.info("Server running in port 3000");
});
