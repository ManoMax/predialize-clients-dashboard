const getAllClients = require('./functions/getAllClients');
const getClientsByName = require('./functions/getClientsByName');
const getClientTotals = require('./functions/getClientTotals');
const getGeneralTotals = require('./functions/getGeneralTotals');
const getClientById = require('./functions/getClientById');

module.exports = {
    getAllClients(req, res) {
        return getAllClients(req, res);
    },

    getClientsByName(req, res) {
        return getClientsByName(req, res);
    },

    getClientTotals(req, res) {
        return getClientTotals(req, res);
    },

    getGeneralTotals(req, res) {
        return getGeneralTotals(req, res);
    },

    getClientById(req, res) {
        return getClientById(req, res);
    }
}