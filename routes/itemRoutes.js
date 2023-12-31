// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const verifyuser=require('../middlewares/user_authentication')

router.get('/views',verifyuser,itemController.getAllItems);
router.get('/views:id',verifyuser, itemController.getItemById);
router.post('/create', itemController.createItem);
router.put('/update:id', itemController.updateItem);
router.delete('/delete:id', itemController.deleteItem);

module.exports = router;
