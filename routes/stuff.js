const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const stuffController = require('../controller/stuff')

router.get('/', auth, stuffController.getThings)
router.post('/', auth, multer, stuffController.createThing)
router.get('/:id', auth, stuffController.getOneThing)
router.put('/:id', auth, stuffController.modifyThing)
router.delete('/:id', auth, stuffController.deleteThing)

module.exports = router