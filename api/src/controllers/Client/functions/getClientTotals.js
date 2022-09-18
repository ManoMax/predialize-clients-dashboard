const data = require('../../../../clients.mock');

function getClientTotals(req, res) {
    let client_id = req.params.client_id;

    for (var i = 0; i < data.length; i++) {
      let client = data[i]

      if (client._id == client_id) {
        let enterprises_of_client = client.enterprises;
        let quant_realties = 0;

        for (var j = 0 ; j < enterprises_of_client.length ; j++) {
          let enterprise = enterprises_of_client[j];
          quant_realties += parseInt(enterprise.realties);
        }

        let result = {
          quant_enterprises: enterprises_of_client.length,
          quant_realties: quant_realties
        }

        return res.status(201).send({"data": result});
      }
    }

    return res.status(404).send({"message": "Cliente não encontrado."});
}

module.exports = getClientTotals;