'use strict';

//@ts-ignore

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories; 

module.exports = createCoreController('api::order.order');
