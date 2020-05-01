/* 
Name:         Roger Silva Santos Aguiar 
Function:     Server of the application 
Initial date: May 1, 2020
Last update:  May 1, 2020 
*/

//Required modules
const express = require('express');

//It creates an app and initializes the express
const app = express();

//It creates a route
app.get
(
    '/api/customers',//Route name 
    (req, res) => 
    {
        //It creates an array of customers
        const customers = [
            {id: 1, firstName: 'John', lastName: 'Doe'},
            {id: 2, firstName: 'Kenia', lastName: 'Rocha'},
            {id: 3, firstName: 'Roger', lastName: 'Aguiar'},
            {id: 4, firstName: 'Tom', lastName: 'Aguiar'},
            {id: 5, firstName: 'Nina', lastName: 'Rocha'},
        ];
        res.json(customers);//It shows the array        
    }//End outer function
);//End route

//It creates a port for express
const port = 5000;

//It creates the server 
app.listen(port, () => console.log('Server started on port ' + port));

