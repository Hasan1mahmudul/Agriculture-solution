let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agriculture_solution'
});

connection.connect(function(err){
    if(err){
        return console.error('error:' + err.message);
    }
     console.log('Connected to the MySQL server.');
})
// const query = "INSERT INTO register_farmer_list (`name`, `phon_number`, `district`, `gender`, `address`) VALUES ('RAKIB', '0188', 'DHAKA','MALE','SDFGDGD')"

// connection.query(query,function(err,result,fields){
//      if(err) throw err;
//      console.log(result);
// })

// const getQuerry = `SELECT * FROM register_farmer_list`;
// connection.query(getQuerry,function(err, result,fields){
//     if(err) throw err;
//     console.log(result);
// })
// connection.end();

// const updateQuery = `update register_farmer_list set name = 'sharif' where id = 1`;
// connection.query(updateQuery, function(err,result,fields){
//     if(err) throw err;
//      console.log(result);
// })
// connection.end();
 const deleteQuery = `delete from register_farmer_list where id = 2`;
 connection.query(deleteQuery, function(err, result){
    if(err) throw err;
    console.log(result);
 })
connection.end();
