const fetch = require("node-fetch");
const mysqlConnection = require('./db');

const savePlayer = async () => {
    const resp = await fetch('https://www.easports.com/fifa/ultimate-team/api/fut/item')
    const dataJson = await resp.json();
    const datos = [];
    const player1 = dataJson.items[0];
    const player2 = dataJson.items[1];
    const player3 = dataJson.items[2];
    const player4 = dataJson.items[3];
    const player5 = dataJson.items[4];
    const player6 = dataJson.items[5];
    const player7 = dataJson.items[6];
    const player8 = dataJson.items[7];
    const player9 = dataJson.items[8];
    const player10 = dataJson.items[9];
    const player11 = dataJson.items[10];
    const player12 = dataJson.items[11];
    const player13 = dataJson.items[12];
    const player14 = dataJson.items[13];
    const player15 = dataJson.items[14];
    const player16 = dataJson.items[15];
    const player17 = dataJson.items[16];
    const player18 = dataJson.items[17];
    const player19 = dataJson.items[18];
    const player20 = dataJson.items[19];
    const player21 = dataJson.items[20];
    const player22 = dataJson.items[21];
    const player23 = dataJson.items[22];
    const player24 = dataJson.items[23];
    let id = 0;
    const query = `
                CALL playerAdd(?, ?, ?, ?, ?);
            `
        console.log('Espere mientras se guardan los jugadores: ')
    mysqlConnection.query(query, [id, player1.name, player1.position, player1.nation.name, player1.club.name], (err, rows, fields) => {
        if (!err) {
            console.log("Jugadores guardados")
        } else {
            throw err;
        }
    })
    mysqlConnection.query(query, [id, player2.name, player2.position, player2.nation.name, player2.club.name], (err, rows, fields) => {
       
    })
    mysqlConnection.query(query, [id, player3.name, player3.position, player3.nation.name, player3.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player4.name, player4.position, player4.nation.name, player4.club.name], (err, rows, fields) => {

    })
    mysqlConnection.query(query, [id, player5.name, player5.position, player5.nation.name, player5.club.name], (err, rows, fields) => {
       
    })
    mysqlConnection.query(query, [id, player6.name, player6.position, player6.nation.name, player6.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player7.name, player7.position, player7.nation.name, player7.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player8.name, player8.position, player8.nation.name, player8.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player9.name, player9.position, player9.nation.name, player9.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player10.name, player10.position, player10.nation.name, player10.club.name], (err, rows, fields) => {
       
    })
    mysqlConnection.query(query, [id, player11.name, player11.position, player11.nation.name, player11.club.name], (err, rows, fields) => {
       
    })
    mysqlConnection.query(query, [id, player12.name, player12.position, player12.nation.name, player12.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player13.name, player13.position, player13.nation.name, player13.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player14.name, player14.position, player14.nation.name, player14.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player15.name, player15.position, player15.nation.name, player15.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player16.name, player16.position, player16.nation.name, player16.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player17.name, player17.position, player17.nation.name, player17.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player18.name, player18.position, player18.nation.name, player18.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player19.name, player19.position, player19.nation.name, player19.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player20.name, player20.position, player20.nation.name, player20.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player21.name, player21.position, player21.nation.name, player21.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player22.name, player22.position, player22.nation.name, player22.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player23.name, player23.position, player23.nation.name, player23.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.query(query, [id, player24.name, player24.position, player24.nation.name, player24.club.name], (err, rows, fields) => {
        
    })
    mysqlConnection.end();
}
savePlayer();
