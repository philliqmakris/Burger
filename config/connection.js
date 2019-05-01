var mysql = require('mysql'); //include mysql, installed with npm
//create connection object, set connection params
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var myConn = mysql.createConnection({
        host: 'localhost',
        database: 'burgers',
        user: 'root',
        password: 'password',
    });
}

    //try to connect to object
    myConn.connect(function (err) {
        //if error console log and quit
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        //on success console log
        console.log('Connected as id ' + myConn.threadId);
    });

    //return mysql connection so it can be used in the file that called it
    module.exports = myConn;

/*connection.query = function(queryString){
    myConn.query(queryString, function (error, results, fields) {
        if (error)
            throw error;

        results.forEach(result => {
            console.log(result);
        });
    });
}*/







