'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    Name: DataTypes.STRING,
    Location: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING,
    cuisine:DataTypes.STRING,
    address:DataTypes.STRING
    //image: DataTypes.BLOB
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here
  };
  return Restaurants;
};
