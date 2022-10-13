
// Task - 43:

// 43. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.

export{}
function car(manufacturer, model, ...argument){
    if (argument) {
        let dict = {
            'Manufacturer': manufacturer,
            'Model': model,
            'Additional_feautures': argument
        };
        return dict
    }else {
        let dict = {
            'Manufacturer': manufacturer,
            'Model': model
        };
        return dict
    };
};

console.log(car('ROLLS-ROYCE', '2022', 'Metallic-blue', 'Driver Airbag', 'Automatic Climate Control'))




