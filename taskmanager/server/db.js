const mysql = require("mysql2");

// Replace these with your actual database credentials
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "taskmanager",
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Export the connection pool for use in your main application
module.exports = pool.promise();
