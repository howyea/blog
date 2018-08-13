/*
 * @Author: Micheal.Ye 
 * @Date: 2018-08-07 16:54:51 
 * @Last Modified by: Micheal.Ye
 * @Last Modified time: 2018-08-10 15:46:21
 */
var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Cookies = require('cookies');
var app = express();

var User = require('./models/User');

app.use('/public', express.static(__dirname + '/public'));
app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');
swig.setDefaults({
    cache: false
})
app.use(bodyParser.urlencoded({ extended:true }));
app.use(function ( req, res, next ) {
    req.userInfo = {}
    req.cookies = new Cookies(req, res);
    if ( req.cookies.get('userInfo') ) {
        try {
            req.userInfo = JSON.parse(req.cookies.get('userInfo'));
            User.findById(req.userInfo._id).then(function (userInfo) {
                
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                next();

            })         
        } catch (e) {
            next();
        }
    } else {
        next();
    }
})
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));
mongoose.connect('mongodb://120.79.165.210:27017/blog',  { useNewUrlParser: true }, function ( err) {
    if ( err ) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功')
        app.listen(8088);
    }
});