'use strict';

/**
 * client-address router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-address.client-address');
