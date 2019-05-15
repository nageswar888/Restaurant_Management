'use strict';
module.exports = (sequelize, DataTypes) => {
  const RestaurantCuisine = sequelize.define('RestaurantCuisine', {
    RId: DataTypes.INTEGER,
    CId: DataTypes.INTEGER
  }, {});
  RestaurantCuisine.associate = function(models) {
    // associations can be defined here
    RestaurantCuisine.belongsTo(models.Restaurants,{
      foreignKey: 'RId',
      SourceKey: 'id'
    })
    RestaurantCuisine.belongsTo(models.Cuisines, {
      foreignKey: 'CId',
      SourceKey: 'id'
    })

  };
  return RestaurantCuisine;
};
