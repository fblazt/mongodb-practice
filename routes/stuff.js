const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const stuffController = require('../controller/stuff')

router.get('/', auth, stuffController.getThings)
router.post('/', auth, stuffController.createThing)
router.get('/:id', auth, stuffController.getOneThing)
router.put('/:id', auth, stuffController.modifyThing)
router.delete('/:id', auth, stuffController.deleteThing)

module.exports = router