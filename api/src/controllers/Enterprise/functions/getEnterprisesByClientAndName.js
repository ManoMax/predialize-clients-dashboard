const data = require('../../../../clients.mock');

function getEnterprisesByClientAndName(req, res) {
    let client_id = req.params.client_id;
    let name = req.params.name;

    for (var i = 0; i < data.length; i++) {
      let client = data[i]

      if (client._id == client_id) {
        let enterprises_of_client = client.enterprises;
        let array_of_enterprisesDTO = []

        for (var j = 0 ; j < enterprises_of_client.length ; j++) {
          let enterprise = enterprises_of_client[j]
  
          if (enterprise.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
            let enterpriseDTO = {
              _id: enterprise._id,
              image_src: enterprise.image_src,
              name: enterprise.name,
              realties: parseInt(enterprise.realties)
            }
            array_of_enterprisesDTO.push(enterpriseDTO)
          }
        }
        if (array_of_enterprisesDTO.length > 0) {
          return res.status(201).send({"enterprises": array_of_enterprisesDTO});
        } else {
          return res.status(404).send({"message": "Nenhuma empresas encontrada"});
        }
      }
    }
    return res.status(404).send({"message": "Cliente não encontrado."});
}

module.exports = getEnterprisesByClientAndName;