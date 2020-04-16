const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "expenses"
});

con.connect(function(err) {
  if (err){
    throw err;
  } else {
    console.log(" Connected!");
    con.query("SELECT * FROM user", function (err, result, fields) {
      if (err) throw err;
        console.log(result);
        result.forEach(function(element) {
          console.log(element.id+' '+element.name+' '+element.email+' '+element.phone);
        }, this);
    });
  }
  
});