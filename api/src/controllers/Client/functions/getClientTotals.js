const data = require('../../../../clients.mock');

function getClientTotals(req, res) {
    let client_id = req.params.client_id;

    let result = data.filter((client) => { return client._id == client_id; })
    .map((client) => {

      const quant_realties = client.enterprises.reduce((a, b) => {
        return parseInt(b.realties) + a
      }, 0)

      let result = {
        quant_enterprises: client.enterprises.length,
        quant_realties: quant_realties
      }
      return result 
    });

    if (result.length > 0) return res.status(201).send({"data": result[0]});
    else return res.status(404).send({"message": "Cliente não encontrado."});
}

module.exports = getClientTotals;