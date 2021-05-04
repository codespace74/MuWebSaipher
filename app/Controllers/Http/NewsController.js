"use strict";
const Database = use("Database");
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const News = use("App/Models/News");

class NewsController {
  async index({ view }) {
    var news = await News.all();
    return view.render("news.index", {});
  }

  async read({ view }) {
    return view.render("news.read.index", {});
  }

  async create({ response, request }) {
    const news = await Database.connection("sqlite")
      .create("blog_posts")
      .select("*");
    Database.close(["sqlite"]);
  }
}

module.exports = NewsController;
