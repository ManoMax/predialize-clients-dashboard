const data = require("../clients.mock");

const ClientController = require("./controllers/Client/ClientController");
const EnterpriseController = require("./controllers/Enterprise/EnterpriseController");

module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", ClientController.getAllClients);

  /** Get clients by name */
  app.get("/name/:name", ClientController.getClientsByName);
  
  /** Get client totals */
  app.get("/:client_id/totals", ClientController.getClientTotals);

  /** Get all enterprises */
  app.get("/enterprise", EnterpriseController.getAllEnterprises);

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", EnterpriseController.getEnterprisesByName);

  /** Get all enterprises by client */
  app.get("/:client_id/enterprise", EnterpriseController.getAllEnterprisesByClient);

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name", EnterpriseController.getEnterprisesByClientAndName);

  /** Get general totals */
  app.get("/totals", ClientController.getGeneralTotals);

  /** Get a client by _id */
  app.get("/:_id", ClientController.getClientById);
};
