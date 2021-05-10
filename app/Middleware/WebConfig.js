"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const View = use("View");

const { web, theme } = require("../../app/Config/web_config.json");
const { eng } = require("../Lang/eng/main.json");
const {
  getPkLevel,
  getCharacterStatusCode,
  getMapName,
  getClassShort,
  getClassLong,
  getStatusAccount,
  getVipNameAccount,
} = require("../Functions/Main");

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

      View.global("dateFormat", (date) => {
        const newDate = new Intl.DateTimeFormat("pt-BR").format(date);
        return newDate;
      });

      View.global("getVipNameAccount_", (AccountLevel) => getVipNameAccount(AccountLevel));

      View.global("getStatusAccount", (status) => getStatusAccount(status));

      View.global("getClassLong", (classCode) => getClassLong(classCode));

      View.global("getClassShort", (classCode) => getClassShort(classCode));

      View.global("getMapName", (map) => getMapName(map));

      View.global("getPkLevel", (pk) => getPkLevel(pk));

      View.global("getCharacterStatusCode", (code) =>
        getCharacterStatusCode(code)
      );
      View.global("lang", function (key) {
        if (web.lang === "eng") {
          return eng[key];
        }
        if (web.lang === "pt_br") {
          return pt_br[key];
        }
        return eng[key];
      });
    } catch (error) {
      console.log(console.error);
    }
    await next();
  }
}

module.exports = WebConfig;
