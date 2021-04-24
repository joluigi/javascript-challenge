// from data.js
let tableData = data;

// YOUR CODE HERE!

//2. Creating the variable that will be used to search data on an specific date


// 1. Creating the functions that will populate the table

let DateInput = "1/8/2010"

// D3 object that will be updating the table
let tbody = d3.select("tbody")

// Button to click to refresh the data
var button = d3.select("#filter-btn");

//  Input tha will be used to get the user date input
var inputField = d3.select("#datetime");



inputField.on("change", )

//Arrow function to iterate over the selected data
tableData.forEach(obs => {

    console.log(obs);
    console.log("-----New obj----" )
    let row = tbody.append("tr");
    console.log(obs.datetime)

    // Conditional to check against user input
    if (obs.datetime === DateInput){

    // Only data within the user input will be used

        console.log("Date Found")
        Object.entries(obs).forEach(([key, value]) =>{
            // console.log(`key: ${key}, value:${value}`);
            var cell = row.append("td")
            cell.text(value)
        });
     }  
    
});

