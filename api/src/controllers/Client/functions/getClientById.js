const data = require('../../../../clients.mock');

function getClientById(req, res) {
    let _id = req.params._id;

    for (var i = 0; i < data.length; i++) {
      let client = data[i]

      if (client._id == _id) {
        let clientDTO = {
          _id: client._id,
          image_src: client.image_src,
          name: client.name
        }

        return res.status(201).send({"client": clientDTO});
      }
    }

    return res.status(404).send({"message": "Cliente não encontrado."});
}

module.exports = getClientById;