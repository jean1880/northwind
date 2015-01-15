/**
* Suppliers.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
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
          model: 'regions'
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

