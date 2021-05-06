"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const View = use("View");
const { web } = require("../../config/web");
const { class_codes } = require("../../app/config/class_config.json");
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
      View.global("getClassLong", function (data) {
        return class_codes[data].long;
      });
    } catch (error) {
      return error;
    }
    await next();
  }
}

module.exports = WebConfig;
