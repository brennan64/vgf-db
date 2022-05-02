const { Food } = require('../models');

const foodData = [
  {
    game_name: 'Legend of Zelda: Breath of the wild',
    category_id: '',
    dish_name: 'Akkala Buns',
  },
  {
    game_name: 'Fallout Series',
    dish_type: '',
    dish_name: 'Iguana on a Stick',
  },
  {
    game_name: 'Kirby Series',
    dish_type: '',
    dish_name: 'Maxim Tomato',
  },
  {
    game_name: 'Super Mario World 2',
    dish_type: '',
    dish_name: 'Super Mushroom',
  },
  {
    game_name: 'Legend of Zelda: Ocarina of Time',
    dish_type: '',
    dish_name: 'Lon Lon Milk',
  },
  {
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
    },
},
},
];

const foodSeed = () => Category.bulkCreate(foodData);

module.exports = foodSeed;