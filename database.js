const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const createDatabase = async () => {
    const db = await open({
        filename: "./database.db",
        driver: sqlite3.Database,
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        role TEXT NOT NULL
        );    
    `);

    await db.exec(`
       CREATE TABLE IF NOT EXISTS produtos (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       lote INTEGER NOT NULL,
       produto TEXT NOT NULL,
       descricao_produto TEXT NOT NULL,
       quantidade TEXT NOT NULL,
       preco REAL NOT NULL,
       curva TEXT NOT NULL,
       data_compra TEXT NOT NULL,
       data_venda TEXT NOT NULL
       ); 
    `);

    return db;
};

module.exports = { createDatabase };