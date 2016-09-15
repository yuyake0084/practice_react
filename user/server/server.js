var express = require('express'),
    bodyParser = require('body-parser'),
    users = require('./users');

var app = express();

app.set('port', process.env.PORT || 5000);

var clientPath = __dirname.replace('/server', '/client');

app.use('/', express.static(clientPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/post_user', users.postUser, users.getUsers);
app.get('/get_users', users.getUsers);

// エラー発生時
app.listen(app.get('port'), function() {
  console.log('server listening on port :' + app.get('port'));
});