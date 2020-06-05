const express = require('express')
const router = express.Router()

const stuffController = require('../controller/stuff')

router.get('/', stuffController.getThings)
router.post('/', stuffController.createThing)
router.get('/:id', stuffController.getOneThing)
router.put('/:id', stuffController.modifyThing)
router.delete('/:id', stuffController.deleteThing)

module.exports = router