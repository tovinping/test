const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const upload = multer({ dest: "upload/" });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/loadedLength", (req, res) => {
  console.log("loadedLength", req.query);
  const filename = req.query?.filename;
  if (!filename) {
    res.send({ result: 0, data: 0, msg: "shit" });
  } else {
    const filePath = path.join(__dirname, `upload/${filename}`);
    const isExist = fs.existsSync(filePath);
    if (isExist) {
      const fileBuffer = fs.readFileSync(filePath);
      const data = fileBuffer.byteLength;
      console.log('fff', fileBuffer.length)
      res.send({ result: 0, data, msg: "ok" });
    } else {
      res.send({ result: 0, data: 0, msg: "not uploaded" });
    }
  }
});
app.post("/upload", upload.single("file"), (req, res) => {
  var file = req.file;
  const filename = req.body.filename;
  const filePath = file.path;
  saveFile(filePath, filename);
  res.send({ result: 0, msg: "ok" });
});

app.listen(4001, function () {
  console.log("app is listening at port 4001");
});

function saveFile(filePath, filename) {
  const data = fs.readFileSync(filePath);
  fs.appendFileSync(path.join(__dirname, `upload/`, filename), data);
  fs.unlinkSync(filePath);
}
