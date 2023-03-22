'use strict';

/**
 * client-address service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-address.client-address');
