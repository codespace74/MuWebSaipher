"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Download = use("App/Models/Download");

class DownloadController {
  async index({ view, request }) {
    var { rows } = await Download.all();
    if (rows.length <= 0) {
      rows = null
    }
    return view.render(request.TEMPLATE_NAME + ".download.index", { downloads: rows });
  }

  async create({ view }) {
    const download = await Download.create({
      name: "Client Mu",
      link: "https://www.google.com/client.exe",
      mirror: "Mega",
      size: "1.5GB",
      type: "exe",
    });

    return download;
  }
}

module.exports = DownloadController;
