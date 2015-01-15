/**
* Products.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      'ProductID': 'integer',
      'ProductName': 'string',
      'category_id': {
          model: 'categories'
      },
      'supplier_id': {
          model: 'suppliers'
      },
      'QuantityPerUnit': 'string',
      'UnitPrice': 'float',
      'UnitsInStock': 'integer',
      'UnitsOnOrder': 'integer',
      'ReorderLevel': 'integer',
      'Discontinued': 'integer'
  }
};

