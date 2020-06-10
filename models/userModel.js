const mysql = require('mysql');

const pool = mysql.createConnection({
  host: "10.110.12.45",
  user: "newuser",
  password: "thang123456",
  database: 'dan_aohoa'
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
