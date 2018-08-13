/*
 * @Author: Micheal.Ye 
 * @Date: 2018-08-09 13:44:31 
 * @Last Modified by:   Micheal.Ye 
 * @Last Modified time: 2018-08-09 13:44:31 
 */
var mongoose = require('mongoose');
var categoriesSchema = require('../schemas/categories');

module.exports = mongoose.model('Category', categoriesSchema);