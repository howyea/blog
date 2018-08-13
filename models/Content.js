/*
 * @Author: Micheal.Ye 
 * @Date: 2018-08-09 15:52:31 
 * @Last Modified by: Micheal.Ye
 * @Last Modified time: 2018-08-09 16:25:46
 */
var mongoose = require('mongoose');
var contentsSchema = require('../schemas/contents');

module.exports = mongoose.model('Content', contentsSchema);