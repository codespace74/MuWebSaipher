"use strict";

class NewsController {
  async index({ view }) {
    return view.render("news/index", {});
  }
}

module.exports = NewsController;
