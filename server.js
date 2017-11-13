//express server for prod environment , used in place of webpack
const express = require('express');
let LOCAL_PORT = 3003;
let app = express();
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || LOCAL_PORT, (req, res) => {
    console.log(`server listening on port  ${process.env.PORT || LOCAL_PORT}`);
})
