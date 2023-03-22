'use strict';

/**
 * client-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-payment.client-payment');
