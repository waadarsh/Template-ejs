const express = require('express');
app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { response } = require('express');
const pgp = require('pg-promise');

app.listen(3000);
console.log('Listening on port 3000');

app.use("/static", express.static("static"));
app.set("view engine", "ejs");
app.get('/', (req, res) => {

    var hdr = {
        templn : 'TEMPLATE NAME',
        station : 'STATION',
        currno :  1,
        totno : 1
    }

    var bdy = {
        procn : 'Lorem',
        chnloc : 'Lorem'
    }

    var chkdta = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";


    res.render('index', {
        hdr : hdr,
        bdy : bdy,
        chndta : chkdta

    });
});