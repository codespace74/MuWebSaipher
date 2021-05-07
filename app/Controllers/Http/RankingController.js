"use strict";

class RankingController {
  async rankingTopGuild({ view, request }) {
    return view.render(request.TEMPLATE_NAME + ".ranking.top-guilds.index", {});
  }
  async rankingTopPlayers({ view, request }) {
    return view.render(request.TEMPLATE_NAME + ".ranking.top-players.index", {});
  }
}

module.exports = RankingController;
