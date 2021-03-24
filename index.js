const express = require("express");
const LineAPI = require("line-api");

const app = express();
app.use(function (req, resp, next) {
  // Website
  resp.setHeader("Access-Control-Allow-Origin", "*");
  // Request method
  resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  // Request Header
  resp.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-type"
  );
  next();
});

app.get("/api/lineNotify", (req, resp) => {
  const notify = new LineAPI.Notify({
    token: "zJiu3afaD1FIJWT1SJsdnt7nucYiFJYrrgrv1Xp2kPk",
  });
  let msg = "กุต่อได้ละแล้ว";
  notify.send({
    message: msg,
  });
});

app.listen(8001, () => {
  console.log("Server listening on port 8001");
});
