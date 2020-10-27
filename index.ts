import { App } from "@tinyhttp/app";
const server = new App();

const PORT = process.env.PORT || 3000;
server.get("/", (req, res) => {
  console.log(req.query);
  // console.log(res.);
  res.json({ message: "hi" });
});
server.get("/cats", (req, res) => {
  console.log(req.query);
  console.log(req.params);

  res.json({ message: "hi", url: req.url });
});

server.get("/cats/:catId/moods", (req, res) => {
  console.log(req.query);
  console.log(req.params);

  res.json({ message: "add a query string", url: req.url });
});
server.get("*", (req, res) => {
  res.json({ message: "catch all", url: req.url });
});
server.listen(3000, () => {
  console.log(`Started http://localhost:${PORT}`);
});
