/**
* Customers.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      code: {
          type: 'string'
      },
      name: {
          type: 'string'
      },
      address: {
          type: 'string'
      },
      city: {
          type: 'string'
      },
      region: {
          type: 'string'
      },
      postal_code: {
          type: 'string'
      },
      country: {
          type: 'string'
      },
      phone: {
          type: 'string'
      },
      fax: {
          type: 'string'
      },
      contacts: {
          type: 'array'
      }
  }
};

