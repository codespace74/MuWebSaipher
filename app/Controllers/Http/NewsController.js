"use strict";

class NewsController {
  async index({ view }) {
    return view.render("news/index", {});
  }

  async read({ view }) {
    return view.render("news/read/index", {});
  }
}

module.exports = NewsController;
