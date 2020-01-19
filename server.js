const express = require('express');
const path = require('path');
var fs = require('fs');
var HtmlDocx = require('html-docx-js');
const Style = require('./html/style');
const TitlePage = require('./html/title-page');
const SecondPage = require('./html/second-page');

const router = express.Router();
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/docxtask', (req, res) => {
  let htmlStyle = Style();
  let htmlTitlePage = TitlePage();
  let htmlSecondPage = SecondPage();
  let html = htmlStyle + htmlTitlePage + htmlSecondPage;
  console.log('docxtask');
  const fileName = `output.docx`;
  var docx = HtmlDocx.asBlob(html);
  fs.writeFile(path.resolve('reports', fileName), docx, function(err) {
    if (err) return console.log(err);
    res.send('OK');
  });
});

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
