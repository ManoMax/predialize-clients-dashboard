const data = require('../../../../clients.mock');

function getAllClients(req, res) {
    let array_of_clientsDTO = []
    for (var i = 0; i < data.length; i++) {
        let client = data[i]

        let enterprises_of_client = client.enterprises;
        let quant_realties = 0;

        for (var j = 0; j < enterprises_of_client.length; j++) {
            let enterprise = enterprises_of_client[j];
            quant_realties += parseInt(enterprise.realties);
        }

        let clientDTO = {
            _id: client._id,
            image_src: client.image_src,
            name: client.name,
            quant_enterprises: client.enterprises.length,
            quant_realties: quant_realties,
        }
        array_of_clientsDTO.push(clientDTO);
    }

    return res.status(200).send({ "data": array_of_clientsDTO });
}

module.exports = getAllClients;