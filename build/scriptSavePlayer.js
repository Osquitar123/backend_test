"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetch = require("node-fetch");

var mysqlConnection = require('./db');

var savePlayer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var resp, dataJson, datos, player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, id, query;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://www.easports.com/fifa/ultimate-team/api/fut/item');

          case 2:
            resp = _context.sent;
            _context.next = 5;
            return resp.json();

          case 5:
            dataJson = _context.sent;
            datos = [];
            player1 = dataJson.items[0];
            player2 = dataJson.items[1];
            player3 = dataJson.items[2];
            player4 = dataJson.items[3];
            player5 = dataJson.items[4];
            player6 = dataJson.items[5];
            player7 = dataJson.items[6];
            player8 = dataJson.items[7];
            player9 = dataJson.items[8];
            player10 = dataJson.items[9];
            player11 = dataJson.items[10];
            player12 = dataJson.items[11];
            player13 = dataJson.items[12];
            player14 = dataJson.items[13];
            player15 = dataJson.items[14];
            player16 = dataJson.items[15];
            player17 = dataJson.items[16];
            player18 = dataJson.items[17];
            player19 = dataJson.items[18];
            player20 = dataJson.items[19];
            player21 = dataJson.items[20];
            player22 = dataJson.items[21];
            player23 = dataJson.items[22];
            player24 = dataJson.items[23];
            id = 0;
            query = "\n                CALL playerAdd(?, ?, ?, ?, ?);\n            ";
            console.log('Espere mientras se guardan los jugadores: ');
            mysqlConnection.query(query, [id, player1.name, player1.position, player1.nation.name, player1.club.name], function (err, rows, fields) {
              if (!err) {
                console.log("Jugadores guardados");
              } else {
                throw err;
              }
            });
            mysqlConnection.query(query, [id, player2.name, player2.position, player2.nation.name, player2.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player3.name, player3.position, player3.nation.name, player3.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player4.name, player4.position, player4.nation.name, player4.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player5.name, player5.position, player5.nation.name, player5.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player6.name, player6.position, player6.nation.name, player6.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player7.name, player7.position, player7.nation.name, player7.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player8.name, player8.position, player8.nation.name, player8.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player9.name, player9.position, player9.nation.name, player9.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player10.name, player10.position, player10.nation.name, player10.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player11.name, player11.position, player11.nation.name, player11.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player12.name, player12.position, player12.nation.name, player12.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player13.name, player13.position, player13.nation.name, player13.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player14.name, player14.position, player14.nation.name, player14.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player15.name, player15.position, player15.nation.name, player15.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player16.name, player16.position, player16.nation.name, player16.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player17.name, player17.position, player17.nation.name, player17.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player18.name, player18.position, player18.nation.name, player18.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player19.name, player19.position, player19.nation.name, player19.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player20.name, player20.position, player20.nation.name, player20.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player21.name, player21.position, player21.nation.name, player21.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player22.name, player22.position, player22.nation.name, player22.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player23.name, player23.position, player23.nation.name, player23.club.name], function (err, rows, fields) {});
            mysqlConnection.query(query, [id, player24.name, player24.position, player24.nation.name, player24.club.name], function (err, rows, fields) {});
            mysqlConnection.end();

          case 59:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function savePlayer() {
    return _ref.apply(this, arguments);
  };
}();

savePlayer();