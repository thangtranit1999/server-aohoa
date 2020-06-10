const mysql = require('mysql');

const pool = mysql.createConnection({
  host: "10.110.21.255",
  user: "admin",
  password: "thang123456",
  database: 'user'
})

const data = (sql)=>{
  return new Promise(trave=>{
    pool.connect(err=>{
      //if(err) throw err;
      pool.query(sql, (err, result, abc)=>{
        //if(err) throw err;
        trave(result);
      })
    })
  })
}

module.exports = {
  data
}
