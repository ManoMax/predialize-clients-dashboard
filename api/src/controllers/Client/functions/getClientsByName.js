const data = require('../../../../clients.mock');

function getClientsByName(req, res) {
    let name = req.params.name;

    let result = data.filter((client) => {
      return client.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    })
    .map((client) => {

      const quant_realties = client.enterprises.reduce((a, b) => {
          return parseInt(b.realties) + a
      }, 0)
      
      let clientDTO = {
        _id: client._id,
        image_src: client.image_src,
        name: client.name,
        quant_enterprises: client.enterprises.length,
        quant_realties: quant_realties,
      }
      return clientDTO
    });
    
    if (result.length > 0) return res.status(201).send({"data": result});
    else return res.status(404).send({"message": "Nenhum cliente encontrado."});
}

module.exports = getClientsByName;