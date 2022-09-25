const data = require('../../../../clients.mock');

function getAllEnterprises(req, res) {
    let array_of_enterprisesDTO = []

    for (var i = 0; i < data.length; i++) {
      let client = data[i]
      let enterprises_of_client = client.enterprises;

      for (var j = 0 ; j < enterprises_of_client.length ; j++) {
        let enterprise = enterprises_of_client[j];

        enterprise.client_name = client.name;

        array_of_enterprisesDTO.push(enterprise);
      }
    }

    return res.status(201).send({"data": array_of_enterprisesDTO});
}

module.exports = getAllEnterprises;