const data = require('../../../../clients.mock');

function getAllClients(req, res) {
    
    let result = data.map((item) => {

        const quant_realties = item.enterprises.reduce((a, b) => {
            return parseInt(b.realties) + a
        }, 0)
        
        let clientDTO = {
            _id: item._id,
            image_src: item.image_src,
            name: item.name,
            quant_enterprises: item.enterprises.length,
            quant_realties: quant_realties
        }
        return clientDTO
    })

    return res.status(200).send({ "data": result });
}

module.exports = getAllClients;