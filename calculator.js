const express = require ( "express" );
const bodyparser = require ( "body-parser" );
const app = express ();
const port = 3000;

app.use ( bodyparser.urlencoded ( {extended: true} ) );

app.get ( "/", function (req, res) {
    res.sendfile ( __dirname + "/index.html" );
} );

app.get ( "/bmicalculator", function (req, res) {
    res.sendFile ( __dirname + "/bmiCalculator.html" );
} );

app.post ( "/bmicalculator", function (req, res) {
    var height = parseFloat ( req.body.height );
    var weight = parseFloat ( req.body.weight );
    var bmi = weight / Math.pow (height, 2 );
    res.send ( "Your BMI is: " + bmi );
} );

app.post ( "/", function (req, res) {
    var num1 = parseFloat ( req.body.num1 );
    var num2 = parseFloat ( req.body.num2 );
    var result = num1 + num2;
    res.send ( `your result is: ${result}` );
    console.log ( req.body );
    console.log ( req.body.num1 );
} );

app.listen ( port, function () {
    console.log ( `listening on port ${port}` );
} );
