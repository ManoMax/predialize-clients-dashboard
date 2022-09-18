const data = require('../../../../clients.mock');

function getGeneralTotals(req, res) {
    let quant_clients = data.length;
    let quant_enterprises = 0;
    let quant_realties = 0;

    for (var i = 0; i < data.length; i++) {
      let client = data[i]

      let enterprises_of_client = client.enterprises;

      for (var j = 0 ; j < enterprises_of_client.length ; j++) {
        quant_enterprises++;
        let enterprise = enterprises_of_client[j];
        quant_realties += parseInt(enterprise.realties);
      }
    }

    let result = {
      "quant_clients": quant_clients,
      "quant_enterprises": quant_enterprises,
      "quant_realties": quant_realties
    }

    return res.status(404).send({"data": result});
}

module.exports = getGeneralTotals;