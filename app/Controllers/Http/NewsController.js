"use strict";
const Database = use("Database");

class NewsController {
  async index({ view }) {
    const news = await Database.connection("mysql")
      .table("blog_posts")
      .select("*");
    Database.close(["mysql"]);
    return view.render("news/index", {});
  }

  async read({ view }) {
    return view.render("news/read/index", {});
  }
}

module.exports = NewsController;
