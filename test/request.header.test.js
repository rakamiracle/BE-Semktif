import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  const type = req.get("accept");
  res.send(`hello ${type}`);
});

test("Test Query Parameter ", async () => {
  const response = await request(app).get("/").set("Accept", "text/plain");
  expect(response.text).toBe("hello text/plain");
});
