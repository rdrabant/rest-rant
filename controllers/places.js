const router = require('express').Router()

//GET	/places	Places index page
router.get('/', (req, res) => {
    res.send('GET /places')
})

//POST	/places	Create new place
router.post('/', (req, res) => {
    //res.send('GET /places')
})


//GET	/places/new	Form page for creating a new place
router.get('/new', (req, res) => {
    //res.send('GET /places')
})

//GET	/places/:id	Details about a particular place
router.get('/places/:id', (req, res) => {
    //res.send('GET /places')
})

//PUT	/places/:id	Update a particular place
router.put('/places/:id', (req, res) => {
    //res.send('GET /places')
})

//GET	/places/:id/edit	Form page for editing an existing place
router.get('/places/:id/edit', (req, res) => {
    //res.send('GET /places')
})


//DELETE	/places/:id	Delete a particular place
router.delete('/places/:id', (req, res) => {
    //res.send('GET /places')
})

//POST		Create a rant (comment) about a particular place
router.post('/places/:id/rant', (req, res) => {
    //res.send('GET /places')
})

//DELETE	/places/:id/rant/:rantId	Delete a rant (comment) about a particular place
router.delete('/places/:id/rant/:rantId', (req, res) => {
    //res.send('GET /places')
})




module.exports = router