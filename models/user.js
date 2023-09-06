const db = require('../db')

class user{
    static sign(userdetial,callback){
        
        db.query('SELECT * FROM user_table WHERE username = ? OR password = ?', [userdetial.username,userdetial.password], (err, result) => {
            if (err) {
              return callback(err);
            }
            if (result.length > 0) {
                // User already exists, send an error response
                return callback("User already exists");
              } else{
                db.query('insert into user_table set ?',userdetial,callback)
              }

        })


        
    };
    static loginuser(loginvalue,callback){
        const username=loginvalue.username
        const password=loginvalue.password
        db.query('select name from user_table where username=? and password=?',[username,password],callback)
    };

}

module.exports=user