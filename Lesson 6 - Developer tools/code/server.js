var express = require('express'),
    bodyParser = require('body-parser');
/// http://expressjs.com/api.html

var app = express(),
    numbers = [];

app.use(express.static(__dirname + '/'));
app.use(bodyParser.text()); // parse text

//GET /today returns date in string
app.get('/today', function (req, res) {
    setTimeout(function () {
        res.send((new Date()).toLocaleDateString());
    }, 1000);
});
//POST /numbers should save number for later
app.post('/numbers', function (req, res) {
    numbers.push(Number(req.body));
    res.send(numbers);
});
//GET /numbers should return comma separated list of numbers
app.get('/numbers', function (req, res) {
    res.send(numbers);
});
//DELETE /numbers should empty numbers array
app.delete('/numbers', function (req, res){
    numbers = [];
    res.send(numbers);
});
//GET /numbers/:op should return result of given operation of stored numbers (check request.params)
// available operations are sum, difference, multiplication, division
// return result as strings
app.get('/numbers/:op', function (req,res) {
   // var result= [];
   var result;
   if(numbers.length>=2)
    {
        switch (req.params.op) {
            case 'sum':
                //result.push(numbers.reduce( (pre,cur) => (pre+cur))) ;
                ///jshint ma problem z '=> -' esversion 6 ? 
                result = String(numbers.reduce( (pre,cur) => (pre+cur)));
                break;
            case 'difference':
                result = String(numbers.reduce( (pre, cur) => (pre-cur)));
                break;
            case 'multiplication':
                result = String(numbers.reduce( (pre, cur) => (pre*cur)));
                break;
            case 'division':
                result = String(numbers.reduce( (pre, cur) => (pre,cur)));
                break;
            default:
                break;
        }
    }
    else
        result = 'NaN . Required at least 2 numbers!';
    res.send(result);
    
});
app.listen(8080, function () {
    console.log('Server is running on localhost:' + this.address().port);
});
