const req = require("express/lib/request");

const gameAdd = document.getElementById('gameAdd');
const dishAdd = document.getElementById('dishAdd');
const categoryAdd = document.getElementById('categoryAdd');
// const input = []

const addPageSubmit = async function (event) {
    event.preventDefault();
  
    const response = await fetch("/api/foodRoutes/", {
      method: "POST",
      body: JSON.stringify({
        dishName: dishAdd.value,
        gameName: gameAdd.value,
        categoryType: categoryAdd.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/food");
    } else {
      alert("Failed to post");
    }
  };
  
  document
    .querySelector("#createbox")
    .addEventListener("submit", addPageSubmit);

// router.post("/", async (req, res) => {
//     try {
//       const foodData = await Food.create({
//         ...req.body,
//         dish_name: req.body.dish_name,
//         dish_game: req.body.dish_game,
//         dish_type: req.body.dish_type,
//       });
//       console.log(foodData);
//       res.status(200).json(foodData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

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