const express = require("express");
const app = express();
const port = 3001; 
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./dong_coords.json", "utf8"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {  
  res.send(data[890].dong);
});

app.post("/text", (req, res) => {//데이터 받는 곳
  const text1 = req.body.inText;
  for (i=0; i<890; i++){
    if (data[i].dong==text1){
        res.send(data[i]);
        console.log(text1);
    }
  }
  const sendText = {
    text: "보내기 성공",
  };
  res.send(sendText);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});