const gameAdd = document.getElementById('gameAdd');
const dishAdd = document.getElementById('dishAdd');
const categoryAdd = document.getElementById('categoryAdd');
const input = []


//OPTION 1 -- I believe this is the more valid version / more likely to work.

// document.querySelector('#addPageSubmit').addEventListener('submit', function() {
//     preventDefault()
//     input = []
//     push(gameAdd, dishAdd, categoryAdd); {

//     var userWants = {
//         gameAdd  : gameAdd,
//         dishAdd  : dishAdd,
//         categoryAdd : categoryAdd,
//     }

//     if (content !== null) userWants.content = content;

//     input.push(userWants);
// }
// })

// input [0] send to game name
// input [1] send to dish name
// input [2] send to category

//option 2 -- less likely to work, syntax wrong but might still be an option?

// var user_inputs = document.querySelector("#addPageSubmit").addEventListener('submit',function() {
//     var inputs = [];
//     for(var i=0; i<user_inputs.length; i++) {
//         inputInfo.push(user_inputs[i].value);
//     }
//     var inputInfo = inputs.join(', ')})
//     console.log(inputInfo);

//     inputs.push(inputInfo(0)) (queryfunction food column is)
//     inputs.push(inputInfo(1)) (queryfunction dish name column)
//     inputs.push(inputInfo(2)) (queryfunction category info column)