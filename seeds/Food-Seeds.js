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
    game_name: 'Legend of Zelda: Breath of the Wild',
    dish_type: '',
    dish_name: 'Fish Skewer',
  },
  {
    game_name: 'Legend of Zelda: Breath of the Wild',
    dish_type: '',
    dish_name: 'Carrot Stew',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Barbecue Buzzard Wing',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Bone Apple Tea',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Aged Yolk',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Mighty Rhino Dogs',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Tangy Wetlands Cranberries',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Yeti Chokehearts',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Worm Delight',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Stagwich',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Succulent Sausage',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Savory Deviate Delight',
  },
  {
    game_name: 'World of Warcraft',
    dish_type: '',
    dish_name: 'Cabbage Kimchi',
  },
  {
    game_name: 'Legend of Zelda: Breath of the Wild',
    dish_type: '',
    dish_name: 'Copious Fried Wild Greens',
  },
  {
    game_name: 'Legend of Zelda: Breath of the Wild',
    dish_type: '',
    dish_name: 'Creamy Heart Soup',
  },
  {
    game_name: 'Portal',
    dish_type: '',
    dish_name: 'Cake',
  },
  {
    game_name: 'Portal 2',
    dish_type: '',
    dish_name: 'Glados Potato',
  },
  {
    game_name: 'League of Legends',
    dish_type: '',
    dish_name: 'Total Biscuit of Everlasting Will',
  },
  {
    game_name: 'The Elder Scrolls V: Skyrim',
    dish_type: '',
    dish_name: 'Goat Cheese Wheel',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Est Est',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Chateau Mont Valjean',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Beauclair White',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Sansretour Chardonnay',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Erveluce',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Saint Mathieu Rouge',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Sansretour Pinot Noir',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Count Var Ochmann Shiraz',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Fiorano',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: 'Duke Nicolas Chardonnay',
  },
  {
    game_name: 'Witcher III',
    dish_type: '',
    dish_name: "Chateau d'Adam Chevalier Pinot Blanc Reserve",
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