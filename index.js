// Write your solution in this file!
// declares a variable customerName using var 
var customerName = 'bob'

// a constant in global scope 
const leastFavoriteCustomer = 'mark'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'john'
}
