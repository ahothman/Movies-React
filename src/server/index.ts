import express from "express";
import path from "path";

const app = express();
app.set("view engine", "ejs");
app.use("/build", express.static(path.join(__dirname, "../../build")));

app.get("*", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Shypple</title>
    <link rel="stylesheet" type="text/css" href="/build/styles.css">
  </head>
  <body>
    <div id="app"></div>
    <script src="/build/index.js"></script>
  </body>
</html>
  `);
});

app.listen(3000, () => {
  console.log("started on 3000");
});
