var db = require('./pghelper');

function getUsers(req, res, next) {
  var sql = 'SELECT * FROM users';

  db.query(sql, [], function(err, datas) {
    if (err) {
      console.log(err);
      return res.status(400).send('エラーが発生しました');
    }
    return res.send(JSON.stringify(datas));
  });
}

function postUser(req, res, next) {
  var user = req.body,
      sql = 'INSERT INTO users (name, mail) VALUES ($1, $2)';

  db.query(sql, [user.name, user.mail], function(err, datas) {
    if (err, datas) {
      console.log(err);
      return res.status(400).send('エラーが発生しました');
    }
    return next();
  });
}

exports.getUsers = getUsers;
exports.postUser = postUser;