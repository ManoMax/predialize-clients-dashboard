const data = require('../../../../clients.mock');

function getGeneralTotals(req, res) {
    let quant_clients = data.length;

    let quant_enterprises = data.reduce((a, b) => {
      return parseInt(b.enterprises.length + a);
    }, 0)

    let quant_realties = data.map((client) => { return client.enterprises })
    .map((enterprises_of_each_client) => {
      let nums = 0;
      enterprises_of_each_client.forEach(enterprise => { nums += parseInt(enterprise.realties); })
      return nums;
    })
    .reduce((a, b) => { return b + a }, 0);

    let result = {
      "quant_clients": quant_clients,
      "quant_enterprises": quant_enterprises,
      "quant_realties": quant_realties
    }

    return res.status(200).send({"data": result});
}

module.exports = getGeneralTotals;