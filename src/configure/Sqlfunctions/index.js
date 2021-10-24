

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

 const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
      trans.executeSql(sql, params, (trans, results) => {
        resolve(results);
      },
        (error) => {
          reject(error);
        });
    });
  });
  // Create Table
  export const  CreateTable=async ()=> {
    let Table = await ExecuteQuery("CREATE TABLE IF NOT EXISTS users4 (id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(20),email VARCHAR, phone INTEGER,profile_image VARCHAR,username VARCHAR(16),website VARCHAR,address VARCHAR,company VARCHAR)",[]);
    console.log(Table);
  }
  
  export const  InsertQuery=async(UserList)=> {
   
    // multiple insert of users
    let Data = UserList
    let query = "INSERT INTO users4 (id, name ,email , phone ,profile_image ,username ,website ,address ,company ) VALUES";
    for (let i = 0; i < Data.length; ++i) {
      query = query + "('"
        + Data[i]?.id //id
        + "','"
        + Data[i]?.name //first_name
        + "','"
        + Data[i]?.email //is_deleted
        + "','"
        + Data[i]?.phone //is_deleted
        + "','"
        + Data[i]?.profile_image //is_deleted
        + "','"
        + Data[i]?.username //is_deleted
        + "','"
        + Data[i]?.website //is_deleted
        + "','"
        + JSON.stringify(Data[i]?.address||"") //is_deleted
        + "','"
        + JSON.stringify(Data[i]?.company||"") //is_deleted
        + "')";
      if (i != Data.length - 1) {
        query = query + ",";
      }
    }
    query = query + ";";
    console.log(query);
    return await ExecuteQuery(query, []);
    
    
    
  }
  
  
  
  export const  SelectQuery= async()=>{
    let selectQuery = await ExecuteQuery("SELECT * FROM users4",[]);
    var rows = selectQuery?.rows
    console.log(rows)
   let list=[]
    
    for (let i = 0; i < rows.length; i++) {
        var item = rows.item(i);
        item.company=JSON.parse(item.company||"")
        item.address=JSON.parse(item.address||"")
       list.push(item)
    }
    return list
  }
  
  
  
  
  
  
  
  