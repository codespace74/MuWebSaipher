"use strict";

class RankingController {
  async rankingTopGuild({ view }) {
    return view.render("ranking/top-guilds/index", {});
  }
  async rankingTopPlayers({ view }) {
    return view.render("ranking/top-players/index", {});
  }
}

module.exports = RankingController;
