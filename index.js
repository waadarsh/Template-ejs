const express = require('express');
app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { response } = require('express');
const pgp = require('pg-promise')();

const cn = {
    user: 'postgres',
    host: 'localhost',
    database: 'rnaipl',
    port: 5432,
    password: 'nissan'
};

const db = pgp(cn);

app.listen(3000);
console.log('Listening on port 3000');

app.use(bodyParser.text());

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

    db.any("SELECT chklst_id,chklst_name,station_name,total_no_instruction FROM chklst_hdr WHERE status_code = 90;")
    .then((data) => {
        template_data=data;
         res.render("index", template_data);////{
        //     // data : data,
        //     // hdr : hdr,
        //     // bdy : bdy,
        //     // chndta : chkdta
        // });
    }).catch(error => res.send(error));
});

app.post("/", function(req, res) {
    let data = req.body;
    console.log(data);
});