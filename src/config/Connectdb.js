import mysql from "mysql";
var Connect_to_db = () => {
  var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "db_test",
  });

  connection.connect((error) => {
    if (error) {
      console.log("database connect error");
    } else console.log("DB Connected Succenfully");
    return connection;
  });
};

// export defalult  Connect_to_db;
export default Connect_to_db;
