'use strict';

/**
 * default-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::default-card.default-card');
