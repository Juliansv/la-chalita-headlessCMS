'use strict';

/**
 * list-of-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-of-product.list-of-product');
