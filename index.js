const express = require('express');
app = express();

app.listen(3000);
console.log('Listening on port 3000');

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



    res.render('index', {
        hdr : hdr,
        bdy : bdy

    });
});