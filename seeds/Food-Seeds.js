const { Food } = require('../models');

const foodData = [
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Wine',
    dish_name: 'Chateau d’Adam Chevalier Pinot Blanc Reserve',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Wine',
    dish_name: 'Chateau de Conrad Cabernet',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Wine',
    dish_name: 'Butcher of Blaviken',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Wine',
    dish_name: 'Geralt of Rivia',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Wine',
    dish_name: 'Guillaume du Bois’ Soulful Wine',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Wine',
    dish_name: 'Mettina Rosé',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Wine',
    dish_name: 'White Wolf',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Beer',
    dish_name: 'Kaedweni Stout',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Beer',
    dish_name: 'Rivian Kriek',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Beer',
    dish_name: 'Redanian Lager',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Beer',
    dish_name: 'Viziman Champion',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Liquor',
    dish_name: 'Djisktra Dry',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Liquor',
    dish_name: 'Homemade Pepper Vodka',
  },
  {
    game_name: 'Witcher III',
    dish_type: 'Drink, Liquor',
    dish_name: 'Victor Monnart’s Cognac',
  },
  {
    game_name: 'Legends of Zelda Oracle of Seasons',
    dish_type: 'Solid, Liquid',
    dish_name: 'Lava Soup',
  },
  {
    game_name: 'Fallout Series',
    dish_type: 'Drink',
    dish_name: 'Nuka Cola',
  },
  {
    game_name: 'Minecraft',
    dish_type: 'Solid',
    dish_name: 'Golden Apple',
  },
  {
    game_name: 'Minecraft',
    dish_type: 'Solid',
    dish_name: 'Rotten Flesh',
  },
  {
    game_name: 'Minecraft',
    dish_type: 'Solid',
    dish_name: 'Apple',
  },
  {
    game_name: 'Minecraft',
    dish_type: 'Solid',
    dish_name: 'Bread',
  },
  {
    game_name: 'Minecraft',
    dish_type: 'Solid',
    dish_name: 'Potato',
  },
  {
    game_name: 'Minecraft',
    dish_type: 'Solid',
    dish_name: 'Baked Potato',
  },
  {
    game_name: 'Minecraft',
    dish_type: 'Solid',
    dish_name: 'Carrot',
  },
  {
    game_name: 'Minecraft',
    dish_type: 'Solid',
    dish_name: 'Golden Carrot',
  },
  {
    game_name: 'Team Fortress 2',
    dish_type: 'Solid',
    dish_name: 'Sandvich',
  },
  {
    game_name: 'Team Fortress 2',
    dish_type: 'Drink',
    dish_name: 'Bonk! Atomic Punch',
  },
  {
    game_name: 'Team Fortress 2',
    dish_type: 'Solid',
    dish_name: 'Buffalo Steak Sandvich',
  },
  {
    game_name: 'Team Fortress 2',
    dish_type: 'Drink',
    dish_name: 'Crit-a-Cola',
  },
  {
    game_name: 'Team Fortress 2',
    dish_type: 'Solid',
    dish_name: 'Dalokohs Bar',
  },
  {
    game_name: 'Team Fortress 2',
    dish_type: 'Solid',
    dish_name: 'Fish Cake',
  },
  {
    game_name: 'Team Fortress 2',
    dish_type: 'Drink',
    dish_name: 'Mad Milk',
  },
  {
    game_name: 'Team Fortress 2',
    dish_type: 'Solid',
    dish_name: 'Robo-Sandvich',
  },
  {
    game_name: 'Team Fortress 2',
    dish_type: 'Solid',
    dish_name: 'Second-Banana',
  },
  {
    game_name: 'Mario ',
    dish_type: 'Solid',
    dish_name: '1-UP Mushroom',
  },
  {
    game_name: 'Undertale',
    dish_type: 'Solid',
    dish_name: 'Butterscotch-Cinnamon Pie',
  },
  {
    game_name: 'Legend of Zelda: Breath of the wild',
    dish_type: 'Solid',
    dish_name: '',
  },
  {
    game_name: 'Minecraft',
    dish_type: 'Solid',
    dish_name: 'Cake',
  },
  {
    game_name: 'Pokemon',
    dish_type: 'Solid',
    dish_name: 'Cheri Berry',
  },
  {
    game_name: 'Pokemon',
    dish_type: 'Solid',
    dish_name: 'Chesto Berry',
  },
  {
    game_name: 'Pokemon',
    dish_type: 'Solid',
    dish_name: 'Pecha Berry',
  },
  {
    game_name: 'Pokemon',
    dish_type: 'Solid',
    dish_name: 'Aspear Berry',
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

const Food = () => Category.bulkCreate(foodData);

module.exports = Food;