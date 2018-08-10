

module.exports = {
    getInventory: (req, res) => {
        console.log('we got a request to send the inventory to front end')

        req.app.get('db').getInventory().then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log('they say we have an error: ' + err);
            res.sendStatus(500)

        })
    },

    addToInventory: (req, res) => {
        console.log('they just asked us to add to the db')
        let { imgurl, productname, price } = req.body;
        req.app.get('db').addInventory(imgurl, productname, price).then(response => {
            console.log(response);
            res.status(200).send(response)
        }).catch(err => {
            console.log('they say we have an error: ' + err);
            res.sendStatus(500)
        })
    },

    editItem: (req, res) => {
        let { id } = req.params;
        let { imgurl, productname, price } = req.body;
        console.log(`lets edit an item with id of ${id}`);

    },

    removeItem: (req, res) => {
        console.log(`we are supposed to get rid of an item now with id: ${req.params.id}`);
        let { id } = req.params;

        req.app.get('db').removeOneItem(id)
            .then((response) => {
                console.log(response);
                res.status(200).send(response);
            })
            .catch(err => {
                console.log('they say we have an error: ' + err);
                res.sendStatus(500)
            })

    }

}