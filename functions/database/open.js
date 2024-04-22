import { Platform } from "react-native";

export default function dbOpen() {
    let SQLite;
    if(Platform.OS === "web") {
        SQLite = require("react-native-sqlite-2").default.openDatabase;
    } else {
        //SQLite = require("react-native-sqlite-storage").openDatabase;
    }
    console.log(typeof SQLite, SQLite);
    const db = SQLite({name: "myDatabase.db", location: "default"});
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)", [], () => {
                console.log("Tabela criada com sucesso!");
            }, (error) => {
                console.error("Erro:", error);
            }
        );
    });
    // Execute outra consulta SQL
db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO users (name, age) VALUES (?, ?)',
      ['John', 30],
      () => {
        console.log('Data inserted successfully');
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  });
  
  // Execute uma consulta de seleção SQL
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM users',
      [],
      (tx, results) => {
        const len = results.rows.length;
        console.log('Rows returned:', len);
        for (let i = 0; i < len; i++) {
          const row = results.rows.item(i);
          console.log('Row:', row);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  });
}