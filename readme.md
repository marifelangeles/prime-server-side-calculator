# Prime Weekend Challenge: Server Side Calculator

## Description
This exercise is a server-side calculator where the logic for the calculator is implemented on the server. 

## Features

### Calculator
A user can input two values (2 input elements) and select a type of mathematical operation. When the submit, `=` button is clicked, the input is captured and bundled up in an object, which is sent to the server via a POST. A 'C' button will clear the user's input fields.

The server side logic handles addition, subtraction, multiplication, and division. Once the calculation is complete, it is sent back to the client in an object where it is displayed on the DOM.

### History

A historical record of all math operations and solutions on the server is displayed in a list when the page loads using a GET request. The list is updated when a new calculation is made.

## Future Development

- Style the UI to look and behave like a calculator.
- Deploy to Heroku!
