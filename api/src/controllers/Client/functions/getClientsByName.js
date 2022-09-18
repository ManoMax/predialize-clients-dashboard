const data = require('../../../../clients.mock');

function getClientsByName(req, res) {
    let name = req.params.name;
    let array_of_clientsDTO = []

    for (var i = 0; i < data.length; i++) {
      let client = data[i]

      let enterprises_of_client = client.enterprises;
      let quant_realties = 0;

      for (var j = 0 ; j < enterprises_of_client.length ; j++) {
        let enterprise = enterprises_of_client[j];
        quant_realties += parseInt(enterprise.realties);
      }

      if (client.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
        let clientDTO = {
          _id: client._id,
          image_src: client.image_src,
          name: client.name,
          quant_enterprises: client.enterprises.length,
          quant_realties: quant_realties,
        }
        array_of_clientsDTO.push(clientDTO);
      }
    }
    if (array_of_clientsDTO.length > 0) {
      return res.status(201).send({"data": array_of_clientsDTO});
    } else {
      return res.status(404).send({"message": "Nenhum cliente encontrado."});
    }
}

module.exports = getClientsByName;