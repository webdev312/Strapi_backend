'use strict';

/**
 * Testflow01.js controller
 *
 * @description: A set of functions called "actions" for managing `Testflow01`.
 */

module.exports = {

  /**
   * Retrieve testflow01 records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.testflow01.search(ctx.query);
    } else {
      return strapi.services.testflow01.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a testflow01 record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.testflow01.fetch(ctx.params);
  },

  /**
   * Count testflow01 records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.testflow01.count(ctx.query);
  },

  /**
   * Create a/an testflow01 record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.testflow01.add(ctx.request.body);
  },

  /**
   * Update a/an testflow01 record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.testflow01.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an testflow01 record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.testflow01.remove(ctx.params);
  }
};
