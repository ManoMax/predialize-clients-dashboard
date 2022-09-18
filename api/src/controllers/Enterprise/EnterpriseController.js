const getAllEnterprises = require('./functions/getAllEnterprises');
const getEnterprisesByName = require('./functions/getEnterprisesByName');
const getAllEnterprisesByClient = require('./functions/getAllEnterprisesByClient');
const getEnterprisesByClientAndName = require('./functions/getEnterprisesByClientAndName');

module.exports = {
    getAllEnterprises(req, res) {
        return getAllEnterprises(req, res);
    },

    getEnterprisesByName(req, res) {
        return getEnterprisesByName(req, res);
    },

    getAllEnterprisesByClient(req, res) {
        return getAllEnterprisesByClient(req, res);
    },

    getEnterprisesByClientAndName(req, res) {
        return getEnterprisesByClientAndName(req, res);
    }
}