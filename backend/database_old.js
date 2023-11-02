const config = require('config')
const mysql = require('mysql')
const {Sequelize} = require("sequelize");
const dbConfig = config.get('database.dbConfig');

const pool = mysql.createPool({
    connectionLimit: 5,
    host: dbConfig.host,
    user: dbConfig.user,
    port: 3306,
    password: dbConfig.password,
    database: dbConfig.dbName
});

exports.runQuery = (query) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }

            connection.query(query, (err, result) => {
                connection.release();

                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    });
};


const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql',
    dialectOptions: {
        // Your mysql2 options here
    }
})

/*exports.runQuery = async (query) => {
    await pool.getConnection(async function(err, connection) {
        // execute query
        await connection.query(query, function (err, result) {
            if (err) throw err;
            console.log("Result: " + JSON.stringify(result));
        });
        connection.release();
    })
}*/
// pool.end(function(err) {
//     if (err) {
//         return console.log(err.message);
//     }
//     // close all connections
// });



//_getConnection = pool.getConnection(function(err, connection) {
//     // execute query
//     // console.log("Connected!");
//     // const sql = "SELECT * FROM user"
//     connection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + JSON.stringify(result));
//     });
//
//     connection.release();
// });

// let connection = mysql.createConnection({
//     host: dbConfig.host,
//     user: dbConfig.user,
//     port: 3306,
//     password: dbConfig.password,
//     database: dbConfig.dbName
// })
// connection.connect(function(err) {
//     if (err) {
//         return console.error('error: ' + err.message);
//     }
//
//     console.log('Connected to the MySQL server.');
// });