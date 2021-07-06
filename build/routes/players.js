"use strict";

var _require = require("express"),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/players.controller'),
    searchPlayer = _require2.searchPlayer,
    getPlayerByTeam = _require2.getPlayerByTeam;

global.fetch = require("node-fetch");
router.get('/player', searchPlayer);
router.post('/team', getPlayerByTeam);
module.exports = router;