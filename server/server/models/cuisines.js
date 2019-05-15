'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuisines = sequelize.define('Cuisines', {
    Type: DataTypes.STRING
  }, {});
  Cuisines.associate = function(models) {
    // associations can be defined here
    Cuisines.belongsToMany(models.Restaurants, {
      through: 'RestaurantCuisine',
      foreignKey:  'CId'
    })

  };
  return Cuisines;
};
