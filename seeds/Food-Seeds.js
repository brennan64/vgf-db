const { Food } = require("../models");

const foodData = [
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Wine",
    dish_name: "Chateau de Conrad Cabernet",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Wine",
    dish_name: "Butcher of Blaviken",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Wine",
    dish_name: "Geralt of Rivia",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Wine",
    dish_name: "Guillaume du Bois' Soulful Wine",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Wine",
    dish_name: "Mettina Rosé",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Wine",
    dish_name: "White Wolf",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Beer",
    dish_name: "Kaedweni Stout",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Beer",
    dish_name: "Rivian Kriek",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Beer",
    dish_name: "Redanian Lager",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Beer",
    dish_name: "Viziman Champion",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Liquor",
    dish_name: "Djisktra Dry",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Liquor",
    dish_name: "Homemade Pepper Vodka",
  },
  {
    dish_game: "Witcher III",
    dish_type: "Drink, Liquor",
    dish_name: "Victor Monnart's Cognac",
  },
  {
    dish_game: "Legends of Zelda Oracle of Seasons",
    dish_type: "Solid, Liquid",
    dish_name: "Lava Soup",
  },
  {
    dish_game: "Fallout Series",
    dish_type: "Drink",
    dish_name: "Nuka Cola",
  },
  {
    dish_game: "Minecraft",
    dish_type: "Solid",
    dish_name: "Golden Apple",
  },
  {
    dish_game: "Minecraft",
    dish_type: "Solid",
    dish_name: "Rotten Flesh",
  },
  {
    dish_game: "Minecraft",
    dish_type: "Solid",
    dish_name: "Apple",
  },
  {
    dish_game: "Minecraft",
    dish_type: "Solid",
    dish_name: "Bread",
  },
  {
    dish_game: "Minecraft",
    dish_type: "Solid",
    dish_name: "Potato",
  },
  {
    dish_game: "Minecraft",
    dish_type: "Solid",
    dish_name: "Baked Potato",
  },
  {
    dish_game: "Minecraft",
    dish_type: "Solid",
    dish_name: "Carrot",
  },
  {
    dish_game: "Minecraft",
    dish_type: "Solid",
    dish_name: "Golden Carrot",
  },
  {
    dish_game: "Team Fortress 2",
    dish_type: "Solid",
    dish_name: "Sandvich",
  },
  {
    dish_game: "Team Fortress 2",
    dish_type: "Drink",
    dish_name: "Bonk! Atomic Punch",
  },
  {
    dish_game: "Team Fortress 2",
    dish_type: "Solid",
    dish_name: "Buffalo Steak Sandvich",
  },
  {
    dish_game: "Team Fortress 2",
    dish_type: "Drink",
    dish_name: "Crit-a-Cola",
  },
  {
    dish_game: "Team Fortress 2",
    dish_type: "Solid",
    dish_name: "Dalokohs Bar",
  },
  {
    dish_game: "Team Fortress 2",
    dish_type: "Solid",
    dish_name: "Fish ",
  },
  {
    dish_game: "Team Fortress 2",
    dish_type: "Drink",
    dish_name: "Mad Milk",
  },
  {
    dish_game: "Team Fortress 2",
    dish_type: "Solid",
    dish_name: "Robo-Sandvich",
  },
  {
    dish_game: "Team Fortress 2",
    dish_type: "Solid",
    dish_name: "Second-Banana",
  },
  {
    dish_game: "Mario ",
    dish_type: "Solid",
    dish_name: "1-UP Mushroom",
  },
  {
    dish_game: "Undertale",
    dish_type: "Solid",
    dish_name: "Butterscotch-Cinnamon Pie",
  },
  {
    dish_game: "Minecraft",
    dish_type: "Solid",
    dish_name: "",
  },
  {
    dish_game: "Pokemon",
    dish_type: "Solid",
    dish_name: "Cheri Berry",
  },
  {
    dish_game: "Pokemon",
    dish_type: "Solid",
    dish_name: "Chesto Berry",
  },
  {
    dish_game: "Pokemon",
    dish_type: "Solid",
    dish_name: "Pecha Berry",
  },
  {
    dish_game: "Pokemon",
    dish_type: "Solid",
    dish_name: "Aspear Berry",
  },
  {
    dish_game: "Legend of Zelda: Breath of the wild",
    dish_type: "Solid",
    dish_name: "Akkala Buns",
  },
  {
    dish_game: "Fallout Series",
    dish_type: "",
    dish_name: "Iguana on a Stick",
  },
  {
    dish_game: "Kirby Series",
    dish_type: "",
    dish_name: "Maxim Tomato",
  },
  {
    dish_game: "Super Mario World 2",
    dish_type: "",
    dish_name: "Super Mushroom",
  },
  {
    dish_game: "Legend of Zelda: Ocarina of Time",
    dish_type: "",
    dish_name: "Lon Lon Milk",
  },
  {
    dish_game: "Legend of Zelda: Breath of the Wild",
    dish_type: "",
    dish_name: "Fish Skewer",
  },
  {
    dish_game: "Legend of Zelda: Breath of the Wild",
    dish_type: "",
    dish_name: "Carrot Stew",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Barbecue Buzzard Wing",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Bone Apple Tea",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Aged Yolk",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Mighty Rhino Dogs",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Tangy Wetlands Cranberries",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Yeti Chokehearts",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Worm Delight",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Stagwich",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Succulent Sausage",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Savory Deviate Delight",
  },
  {
    dish_game: "World of Warcraft",
    dish_type: "",
    dish_name: "Cabbage Kimchi",
  },
  {
    dish_game: "Legend of Zelda: Breath of the Wild",
    dish_type: "",
    dish_name: "Copious Fried Wild Greens",
  },
  {
    dish_game: "Legend of Zelda: Breath of the Wild",
    dish_type: "",
    dish_name: "Creamy Heart Soup",
  },
  {
    dish_game: "Portal",
    dish_type: "",
    dish_name: "Cake",
  },
  {
    dish_game: "Portal 2",
    dish_type: "",
    dish_name: "Glados Potato",
  },
  {
    dish_game: "League of Legends",
    dish_type: "",
    dish_name: "Total Biscuit of Everlasting Will",
  },
  {
    dish_game: "The Elder Scrolls V: Skyrim",
    dish_type: "",
    dish_name: "Goat Cheese Wheel",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Est Est",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Chateau Mont Valjean",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Beauclair White",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Sansretour Chardonnay",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Erveluce",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Saint Mathieu Rouge",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Sansretour Pinot Noir",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Count Var Ochmann Shiraz",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Fiorano",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Duke Nicolas Chardonnay",
  },
  {
    dish_game: "Witcher III",
    dish_type: "",
    dish_name: "Chateau d'Adam Chevalier Pinot Blanc Reserve",
  },
];

const foodSeed = () => Food.bulkCreate(foodData);

module.exports = foodSeed;
