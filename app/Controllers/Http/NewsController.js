"use strict";
const Database = use("Database");
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const News = use("App/Models/News");

class NewsController {
  async index({ view, request }) {
    const { rows } = await News.all();
    return view.render(request.TEMPLATE_NAME + ".news.index", { news: rows });
  }

  async read({ view, request }) {
    const news = await this.getNewsID(request.params.id);
    return view.render(request.TEMPLATE_NAME + ".news.read.index", { news });
  }

  async getNewsID(id) {
    const news = await News.findBy("id", id);
    return news;
  }

  async create({ response, request }) {
    const news = await News.create({
      title: "WAR BROKE OUT BETWEEN KINGDOMS.",
      author: "Admin",
      body:
        "War broke out between kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the... War broke out between kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the... War broke out between kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the... War broke out between kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the...",
      cover: "default.png",
    });

    return news;
  }
}

module.exports = NewsController;
