"use strict";
const Database = use("Database");

class NewsController {
  async index({ view }) {
    /* const news = await Database.connection("mssql")
      .table("blog_posts")
      .select("*");
    Database.close(["mssql"]); */
    return view.render("news.index", {});
  }

  async read({ view }) {
    return view.render("news.read.index", {});
  }
}

module.exports = NewsController;
