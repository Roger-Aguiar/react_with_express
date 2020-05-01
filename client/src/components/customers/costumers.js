//Name:         Roger Silva Santos Aguiar
//Function:     This file is a component to integrate the backend with the frontend
//Initial date: May 1, 2020
//Last update:  May 1, 2020

//RUN THIS CODE USING THE FOLLOWING COMMAND:
//npm run dev

import React, { Component } from 'react';

import './customers.css';

class Customers extends Component {
    constructor()
    {
        super();
        this.state = { customers: []}

    }

    componentDidMount()
    {
        //It requests the backend from express file, 
        //the array that was created there will be displayed in 
        //the following code.
        fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('Customers fetched!', customers)))
    }
    render() 
    {
        return (
        <div>
            <h2>Customers</h2>
            <ul>
                {this.state.customers.map(customer => <li key={customer.id}>{customer.firstName} {customer.lastName}</li>)}
            </ul>
        </div>
        );
    }//End render
}

export default Customers;
