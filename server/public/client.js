console.log('js');

// variable to hold changing operator
let operator;
let answer = 0;

$(document).ready(docReady);

function docReady() {
    console.log('jq');

    // update historical record
    updateMathRecord();

    // when = button is clicked, send object to server
    $('#equalButton').on('click', handleEqualButton);

    // when C button is clicked, clear user input fields
    $('#clearButton').on('click', handleClearButton);
    
    // click operation, get value of button
    $('.operatorButton').on('click', getOperator);
    


} // end docReady


function updateMathRecord() {
    console.log('in updateMathRecord');
    let num1Out;
    let num2Out;
    let num3Out; 
    let operatorOut;

    // get calculator input values
    $.ajax({
        url: '/calculatorInput',
        method: 'GET'
    }).then(function(response) {
        console.log('response', response);
        // empty list
        $('#history').empty();
        // loop through array   
        response.forEach(object => {
            console.log('object', object);
            // get object property values
            num1Out = object.num1;
            num2Out = object.num2;
            num3Out = object.answer;
            operatorOut = object.operator;
            console.log(num1Out, num2Out, operatorOut);

            // append on list
            $('#history').append(`<li>${num1Out} ${operatorOut} ${num2Out} = ${num3Out}</li>`);

        });
        
        
    });
    
    // get answer values

} // end updateMathRecord




function getOperator(){
    console.log('in getOperator');
    // target this button's value
    operator = $(this).val();    

} // end getOperator

function getAnswer() {
    console.log('in getAnswer');

    // get answer from server in an object
    $.ajax({
        url: '/calculatorInput',
        method: 'GET'
    }).then(function (response) {
        console.log('get answer', response);
        // display on DOM
        // get last value in array
        let answerObject = response[response.length - 1];
        // empty answer div 
        $('#answerDiv').empty();
        // append answer to paragraph
        $('#answerDiv').append(`<p>${answerObject.answer}</p>`);
    });
} // end getAnswer


function handleEqualButton(){
    console.log('in handleEqualButton');
    
    // get input values
    // bundle values in object
    let calculatorInput = {
        num1: $('#num1').val(),
        num2: $('#num2').val(),
        operator: operator
    }
    console.log('get input:', calculatorInput);
    
    // send object to server via POST
    $.ajax({
        url: '/calculatorInput',
        method: 'POST',
        data: calculatorInput
    }).then(function(){
        getAnswer();
       
    }); // end then

    // clear input
    $('.numbersInput').val('');

    // update historical record
    updateMathRecord();




} //end handleEqualButton




function handleClearButton(){
    console.log('in handleClearButton');
    
    // clear user input fields
    $('.numbersInput').val('');

} // end handleClearButton
