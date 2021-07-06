"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlConnection = require('../db');

exports.searchPlayer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var pages, resp, dataJson, players, datos, search, order;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pages = req.query.page;
            _context.next = 3;
            return fetch("https://www.easports.com/fifa/ultimate-team/api/fut/item?page=".concat(pages));

          case 3:
            resp = _context.sent;
            _context.next = 6;
            return resp.json();

          case 6:
            dataJson = _context.sent;
            players = dataJson.items;
            datos = [];
            search = req.query.search.toUpperCase();
            order = req.query.order;
            players.forEach(function (element) {
              var name = element.name;
              var position = element.position;
              var nation = element.nation.name;
              var club = element.club.name;

              if (name.toUpperCase().indexOf(search) > -1) {
                if (order !== undefined) {
                  if (order.toUpperCase() === "ASC") {
                    datos.push({
                      name: name,
                      position: position,
                      nation: nation,
                      club: club
                    });
                    datos.sort(function (object1, object2) {
                      return object1.name < object2.name ? -1 : 0;
                    });
                  } else if (order.toUpperCase() === "DESC") {
                    datos.push({
                      name: name,
                      position: position,
                      nation: nation,
                      club: club
                    });
                    datos.sort(function (object1, object2) {
                      return object2.name < object1.name ? -1 : 0;
                    });
                  }
                } else if (order === undefined) {
                  datos.push({
                    name: name,
                    position: position,
                    nation: nation,
                    club: club
                  });
                  datos.sort(function (object1, object2) {
                    return object1.name < object2.name ? -1 : 0;
                  });
                }
              }
            });
            return _context.abrupt("return", res.status(200).json({
              page: pages,
              totalPages: pages,
              items: datos.length,
              totalItems: datos.length,
              players: datos
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPlayerByTeam = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var dataBody, resp, dataJson, players, datos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dataBody = req.body;
            _context2.next = 3;
            return fetch("https://www.easports.com/fifa/ultimate-team/api/fut/item?page=".concat(dataBody.pages));

          case 3:
            resp = _context2.sent;
            _context2.next = 6;
            return resp.json();

          case 6:
            dataJson = _context2.sent;
            players = dataJson.items;
            datos = [];
            players.forEach(function (element) {
              var name = element.name;
              var position = element.position;
              var nation = element.nation.name;
              var club = element.club.name;

              if (dataBody.name.toUpperCase() === club.toUpperCase()) {
                datos.push({
                  name: name,
                  position: position,
                  nation: nation,
                  club: club
                });
              }
            });
            return _context2.abrupt("return", res.status(200).json({
              page: dataBody.pages,
              totalPages: dataBody.pages,
              items: datos.length,
              totalItems: datos.length,
              players: datos
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();