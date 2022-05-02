const Login = require('./Login');
const Food = require('./Food');
const Category = require('./Category');

Category.hasMany(Food, {
  });

Food.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});


module.exports = { Login, Food, Category };