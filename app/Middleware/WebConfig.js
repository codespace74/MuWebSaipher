"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const View = use("View");
const { web } = require("../../config/web");

const { class_codes } = require("../../app/Config/class_config.json");
const { map_codes } = require("../../app/Config/map_config.json");
const { theme } = require("../../app/Config/web_config.json");
const {
  code_types,
  pk_levels_code,
} = require("../../app/Config/pk_level_and _character_config.json");

class WebConfig {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request }, next) {
    request.TEMPLATE_NAME = theme.name;

    try {
      View.global("title", web.title);

      View.global("servers", web.title);

      View.global("TEMPLATE_NAME", theme.name);

      View.global("getClassLong", function (data) {
        return class_codes[data].long;
      });

      View.global("getClassShort", function (data) {
        return class_codes[data].short;
      });

      View.global("getMapName", function (data) {
        return map_codes[data];
      });

      View.global("getPkLevel", function (data) {
        return pk_levels_code[data];
      });

      View.global("getCharacterStatusCode", function (data) {
        return code_types[data];
      });

    } catch (error) {
      return error;
    }
    await next();
  }
}

module.exports = WebConfig;
