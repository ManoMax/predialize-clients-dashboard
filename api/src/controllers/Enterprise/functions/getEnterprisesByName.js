const data = require('../../../../clients.mock');

function getEnterprisesByName(req, res) {
    let name = req.params.name;
    let array_of_enterprisesDTO = []

    for (var i = 0; i < data.length; i++) {
      let client = data[i]
      let enterprises_of_client = client.enterprises;

      for (var j = 0 ; j < enterprises_of_client.length ; j++) {
        let enterprise = enterprises_of_client[j]

        if (enterprise.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
          let enterpriseDTO = {
            client_name: client.name,
            enterprise
          }
  
          array_of_enterprisesDTO.push(enterpriseDTO)
        }
      }
    }
    if (array_of_enterprisesDTO.length > 0) {
      return res.status(201).send({"data": array_of_enterprisesDTO});
    } else {
      return res.status(404).send({"message": "Nenhuma empresa encontrada."});
    }
}

module.exports = getEnterprisesByName;