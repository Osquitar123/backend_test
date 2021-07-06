const mysqlConnection = require('../db');

exports.searchPlayer = async (req, res) => {
    const pages = req.query.page
    const resp = await fetch(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${pages}`)
    const dataJson = await resp.json();
    const players = dataJson.items;
    const datos = [];
    let search = req.query.search.toUpperCase();
    let order = req.query.order;

    players.forEach(element => {
        let name = element.name;
        let position = element.position;
        let nation = element.nation.name;
        let club = element.club.name;
        if (name.toUpperCase().indexOf(search) > -1) {
            if (order !== undefined) {
                if (order.toUpperCase() === "ASC") {
                    datos.push({ name, position, nation, club });
                    datos.sort((object1, object2) => object1.name < object2.name ? -1 : 0)
                } else if (order.toUpperCase() === "DESC") {
                    datos.push({ name, position, nation, club });
                    datos.sort((object1, object2) => object2.name < object1.name ? -1 : 0)
                }
            } else if (order === undefined) {
                datos.push({ name, position, nation, club });
                datos.sort((object1, object2) => object1.name < object2.name ? -1 : 0)
            }
        }
    });
    return res.status(200).json({
        page: pages,
        totalPages: pages,
        items: datos.length,
        totalItems: datos.length,
        players: datos
    })
}

exports.getPlayerByTeam = async (req, res) => {
    const dataBody = req.body
    const resp = await fetch(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${dataBody.pages}`)
    const dataJson = await resp.json();
    const players = dataJson.items;
    const datos = [];

    players.forEach(element => {
        let name = element.name;
        let position = element.position;
        let nation = element.nation.name;
        let club = element.club.name;
        if (dataBody.name.toUpperCase() === club.toUpperCase()) {
            datos.push({ name, position, nation, club })
        } 
    });
    if (datos.length !== 0) {
        return res.status(200).json({
            page: dataBody.pages,
            totalPages: dataBody.pages,
            items: datos.length,
            totalItems: datos.length,
            players: datos
        })
    } else if (datos.length === 0){
        return res.status(200).json({
            Messagge: "El equipo no existe o no lo escribio correctamente"
        })
    }
    
}
