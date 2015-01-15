/**
* Orders.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      customer_id: {
          model: 'customers'
      },
      employee_id: {
          model: 'employees'
      },
      order_date:{
          type: 'date'
      },
      required_date: {
          type: 'date'
      },
      shipper_id:{
          model: 'shippers'
      },
      freight_cost:{
          type: 'float'
      },
      ship_date:{
          type: 'date'
      },
      ship_to:{
          type: 'json'
      },
      details:{
          collection: 'order_details',
          via: 'order'
      }
  }
};

