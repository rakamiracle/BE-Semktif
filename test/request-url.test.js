import express from "express";
import request from "supertest";

const app = express();

app.get("/Login/siskptip", (req, res) => {
  res.json({
    path: req.path,
    originalUrl: req.originalUrl,
    hostname: req.hostname,
    protocol: req.protocol,
    secure: req.secure,
  });
});

test("Test Request Url ", async () => {
  const response = await request(app)
    .get("/Login/siskptip")
    .query({ nama: "raka" });
    expect(response.body).toEqual({
    path: "/Login/siskptip",
    originalUrl: "/Login/siskptip?nama=raka",
    hostname: "127.0.0.1",
    protocol: "http",
    secure: false,
  });
});
