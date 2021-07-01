const { Router } = require("express");
const router = Router();
const mysqlConnection = require('../db');
const { searchPlayer } = require('../controllers/players.controller')
global.fetch = require("node-fetch");

router.get('/players', searchPlayer);
const petición = async () => {
    let totalPlayer = 0;
    const resp = await fetch('https://www.easports.com/fifa/ultimate-team/api/fut/item?page1')
    const data = await resp.json();
    //console.log(data);
    router.get('/players/:commondName', (req, res) => {
        for (const key of data) {
            totalPlayer += key;
            if (totalPlayer !== data.items[{}]) {
                res.json(data.items[totalPlayer]);
            }
        }
        
        console.log(JSON.stringify(data.items[0].commonName));

    });
    router.post('/savedPlayersInternal', (req, res) => {
        let id = 0;
        const query = `
            CALL playerAdd(?, ?, ?, ?, ?);
        `
        mysqlConnection.query(query, [id, data.items[0].commonName, data.items[0].position, data.items[0].nation.name, data.items[0].club.name], (err, rows, fields) => {
            if (!err) {
                res.json({ Status: 'players saved' })
            } else {
                console.log(err)
            }
        })
    });
}

petición();

module.exports = router;