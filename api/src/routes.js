const data = require("../clients.mock");

const ClientController = require("./controllers/Client/ClientController");
const EnterpriseController = require("./controllers/Enterprise/EnterpriseController");

module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", (req, res, next) => {
    return ClientController.getAllClients(req, res);
  });

  /** Get clients by name */
  app.get("/name/:name", (req, res, next) => {
    return ClientController.getClientsByName(req, res);
  });
  
  /** Get client totals */
  app.get("/:client_id/totals", (req, res, next) => {
    return ClientController.getClientTotals(req, res);
  });

  /** Get all enterprises */
  app.get("/enterprise", (req, res, next) => {
    return EnterpriseController.getAllEnterprises(req, res);
  });

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", (req, res, next) => {
    return EnterpriseController.getEnterprisesByName(req, res);
  });

  /** Get all enterprises by client */
  app.get("/:client_id/enterprise", (req, res, next) => {
    return EnterpriseController.getAllEnterprisesByClient(req, res);
  });

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name", (req, res, next) => {
    return EnterpriseController.getEnterprisesByClientAndName(req, res);
  });

  /** Get general totals */
  app.get("/totals", (req, res, next) => {
    return ClientController.getGeneralTotals(req, res);
  });

  /** Get a client by _id */
  app.get("/:_id", (req, res, next) => {
    return ClientController.getClientById(req, res);
  });
};
