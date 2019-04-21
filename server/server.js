let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
});

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


let calculatorInput = require('./modules/calculatorInput');
let answersList = require('./modules/answersList');

// routes

app.get('/calculatorInput', (req, res) => {
    res.send(calculatorInput);
});

app.post('/calculatorInput', (req, res) => {
    // push object in calculatorInput array
    calculatorInput.push(req.body);

    // calculate math expression
    // get value of properties
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let operator = req.body.operator;
    let answer = 0;

    console.log('input', num1, num2, operator);

    // change string to number
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1, num2);

    // calculate expression
    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break;
    };
    console.log('answer:', answer);
    req.body.answer = answer;
    // calculatorInput.push(req.body.answer = answer);
    
    res.sendStatus(200);
});

// app.get('/answersList', (req, res) => {
//     res.send(answersList);
// });