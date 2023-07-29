const express = require('express')

const router = express.Router()

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.addContact);

router.put("/:id", ctrl.updateById);

router.delete("/:id", ctrl.removeContact);


// router.get('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
