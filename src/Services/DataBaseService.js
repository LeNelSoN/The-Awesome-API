const mysql = require('mysql2');
const validateEmail = require('./validateEmail');

class DataBaseService{

  constructor(table) {

    this.table = table;
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'liberty_road'
    })

  }
  
  connect = () => {
    
    connection.connect((err)=>{

      if(err){
        throw err;
      }else{
        console.log('Connection à la Base de donnée SQL réussi !!')
      }
      
    })

    return connection;

  }
  
  query = async (sql, param = []) => {
    
    const data = await this.connection.promise().query(sql, param, (err, data) => {

      if(err){
        throw err;
      }
      
      return data;

    })
    .then((rows) => {return rows[0];})

    return  data;

  }

  static selectAll = async (table) => {

    const dbs = new DataBaseService
    const sql = `SELECT * FROM ${table} WHERE ?`;
    const rows = await dbs.query(sql, [1]).then(data => {return data}) ;
    return rows;

  }

  static selectOne = async (table, id) => {

    const dbs = new DataBaseService;
    const sql = `SELECT * FROM ${table} WHERE id = ?`;
    const rows = await dbs.query(sql, [id]).then(data => {return data}) ;
    return rows;

  }

  static selectWhere = async (table, foreignKey, foreingID) => {

    const dbs = new DataBaseService;
    const sql = `SELECT * FROM ${table} WHERE ${foreignKey} = ?`;
    const rows = await dbs.query(sql, [foreingID]).then(data => {return data}) ;
    return rows;

  }

  static createUserAccount = async (userObject) => {

    const {login, password, username, address} = userObject

    const validEmail = validateEmail(login)

    if(!validEmail){
      throw 'Not valid Email'
    }

    const dbs = new DataBaseService;

    let sql = `INSERT INTO appUsers(login, password, isAdmin, createdAt, updatedAt) 
      VALUES (?,?,?,?,?)`;
    const createDate = new Date();
    const insertId = await dbs.query(sql, [login, password, 0, createDate, createDate])
      .then(data => {return data.insertId})
      .catch(err=>{throw err.sqlMessage});
    
    sql = `INSERT INTO hikkers(username, address, createdAt, updatedAt, appUserId) 
      VALUES (?,?,?,?,?)`;
    const updateId = await dbs.query(sql, [username, address, createDate, createDate, insertId])
      .then(data => {return data.insertId})
      .catch(err=>{throw err.sqlMessage});

    sql = `UPDATE appUsers SET hikkerId = ? WHERE id = ?`;
    let isCreated = false;
    isCreated = await dbs.query(sql, [updateId, insertId])
      .then(_ => {return true})
      .catch(err=>{throw err.sqlMessage});
    return isCreated;

  }

}

module.exports = DataBaseService;

