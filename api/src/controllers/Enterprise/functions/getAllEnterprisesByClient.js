const data = require('../../../../clients.mock');

function getAllEnterprisesByClient(req, res) {
    let client_id = req.params.client_id;

    for (var i = 0; i < data.length; i++) {
      let client = data[i]

      if (client._id == client_id) {
        let enterprises_of_client = client.enterprises;
        let array_of_enterprisesDTO = []

        for (var j = 0 ; j < enterprises_of_client.length ; j++) {
          let enterprise = enterprises_of_client[j]
          let enterpriseDTO = {
            _id: enterprise._id,
            image_src: enterprise.image_src,
            name: enterprise.name,
          }

          array_of_enterprisesDTO.push(enterpriseDTO)
        }
        return res.status(201).send({"enterprises": array_of_enterprisesDTO});
      }
    }

    return res.status(404).send({"message": "Cliente não encontrado."});
}

module.exports = getAllEnterprisesByClient;