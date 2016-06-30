'use strict';

var Sequelize = require('sequelize');
var db = require('./_db');

var Place = db.define('place', {
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	city: Sequelize.STRING,
	state: Sequelize.STRING,
	phone: Sequelize.STRING,
	location: Sequelize.ARRAY(Sequelize.FLOAT)
});

module.exports = Place;
