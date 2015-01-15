/**
 * Employees.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        title: {
            type: 'string'
        },
        first_name: {
            type: 'string'
        },
        last_name: {
            type: 'string'
        },
        position: {
            type: 'string'
        },
        birth_date: {
            type: 'date'
        },
        hire_date: {
            type: 'date'
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
        reports_to: {
            model: 'employees'
        },
        territories: {
            collection: 'territories',
            via: 'employees',
            dominant: true
        }
    }
};
