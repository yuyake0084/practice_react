var pg = require('pg'),
    databaseURL = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';

exports.query = function(sql, values, callback) {
  console.log(sql, values);

  pg.connect(databaseURL, function(err, conn, done) {
    if (err) {
      return callback(err);
    }
    try {
      conn.query(sql, values, function(err, res) {
        done();
        if (err) {
          callback(err);
        } else {
          callback(null, res.rows);
        }
      });
    } catch(e) {
      done();
      callback(e);
    }
  });
};
