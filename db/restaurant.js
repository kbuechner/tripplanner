'use strict';

var Sequelize = require('sequelize');
var db = require('./_db');

var Place = require('./place');

var Restaurant = db.define('restaurant', {
	name: Sequelize.STRING,
	cuisine: Sequelize.STRING,
	price: {
		type: Sequelize.INTEGER,
		max: 5,
		min: 1
	}
});

Restaurant.belongsTo(Place);

module.exports = Restaurant;