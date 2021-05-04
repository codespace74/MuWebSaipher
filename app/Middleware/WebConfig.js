"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const View = use("View");
const { web } = require("../../config/web");
class WebConfig {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request }, next) {
    try {
      View.global("title", web.title);
      View.global("servers", web.title);
    } catch (error) {
      return error;
    }
    await next();
  }
}

module.exports = WebConfig;
