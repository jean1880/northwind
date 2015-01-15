/**
* Order_details.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      product_id: {
          model: 'products'
      },
      quantity: {
          type: 'integer'
      },
      unit_price: {
          type: 'float'
      },
      discount: {
          type: 'float'
      },
      order: {
          model: 'orders'
      }
  }
};

