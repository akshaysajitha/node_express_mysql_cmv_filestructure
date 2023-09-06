const db = require('../db')

class user{
    static sign(userdetial,callback){
        db.query('insert into user_table set ?',userdetial,callback)
    };
    static loginuser(loginvalue,callback){
        const username=loginvalue.username
        const password=loginvalue.password
        db.query('select name from user_table where username=? and password=?',[username,password],callback)
    };

}

module.exports=user