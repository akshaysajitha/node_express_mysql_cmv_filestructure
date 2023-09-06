// controllers/itemController.js
const Item = require('../models/item');

exports.getAllItems = (req, res) => {
  Item.getAll((err, items) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).json(items);
  });
};

exports.getItemById = (req, res) => {
  const id = req.params.id;
  Item.getById(id, (err, item) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (!item) {
      res.status(404).json({ error: 'Item not found' });
      return;
    }
    res.status(200).json(item);
  });
};

exports.createItem = (req, res) => {
  const newItem = req.body;
  Item.create(newItem, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(201).json({ message: 'Item created successfully' });
  });
};

exports.updateItem = (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  Item.update(id, updatedItem, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).json({ message: 'Item updated successfully' });
  });
};

exports.deleteItem = (req, res) => {
  const id = req.params.id;
  Item.delete(id, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(204).send();
  });
};
