const data = require('../../../../clients.mock');

function getClientById(req, res) {
    let _id = req.params._id;

    let result = data.filter((client) => { return client._id === _id; })
    .map((client) => {
      return {
        _id: client._id,
        image_src: client.image_src,
        name: client.name
      }
    });

    if (result.length > 0) return res.status(201).send({"client": result[0]});
    else return res.status(404).send({"message": "Cliente não encontrado."});
}

module.exports = getClientById;