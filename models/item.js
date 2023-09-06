// models/item.js
const db = require('../db');

class Item {
  static getAll(callback) {
    db.query('SELECT * FROM products', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM products WHERE id = ?', [id], callback);
  }

  static create(newItem, callback) {
    db.query('INSERT INTO products SET ?', newItem, callback);
  }

  static update(id, updatedItem, callback) {
    db.query('UPDATE products SET ? WHERE id = ?', [updatedItem, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM products WHERE id = ?', [id], callback);
  }
}

module.exports = Item;
