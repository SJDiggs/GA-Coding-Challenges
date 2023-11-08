module.exports = {
    area,
    circumference
}
 //*** Function Delcatarion Style ***
function area(radius) {
return radius * radius * Math.PI
}

function circumference(radius) {
return radius * 2 * Math.PI
}


// // *** Function Expression Style ***
// const getArea = function(radius) {
//     return radius * radius * Math.PI
// }

// const getCircumference = function(radius) {
//     return radius * 2 * Math.PI
// }

module.exports = {
    area,
    circumference,
}