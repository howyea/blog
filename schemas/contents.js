/*
 * @Author: Micheal.Ye 
 * @Date: 2018-08-09 15:44:21 
 * @Last Modified by: Micheal.Ye
 * @Last Modified time: 2018-08-10 10:31:23
 */
var mongoose = require('mongoose');
//内容的表结构
module.exports = new mongoose.Schema({
    //关联字段-内容的分类id
    category: {
        type: mongoose.Schema.Types.ObjectId,
        //引用
        ref: 'Category'
    },
    //分类标题
    title: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    addTime: {
        type: Date,
        default: new Date()
    },
    views: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    comments: {
        type: Array,
        default: []
    }
})