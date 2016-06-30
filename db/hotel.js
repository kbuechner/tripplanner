'use strict';

var Sequelize = require('sequelize');
var db = require('./_db');


var Place = require('./place');

var Hotel = db.define('hotel', {
		name: Sequelize.STRING,
		num_stars: {
			type: Sequelize.INTEGER,
			max: 5,
			min: 1
		},
		amenities: Sequelize.STRING
})

Hotel.belongsTo(Place)

module.exports = Hotel;

