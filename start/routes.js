"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "HomeController.index");

Route.get("/downloads", "DownloadController.index");

Route.get("/register", "RegisterController.index");
Route.post("/register", "RegisterController.create").as('createAccount');
Route.get("/news", "NewsController.index");
Route.get("/news/read/:id", "NewsController.read");

Route.get("/login", "AccountPanelController.login");
Route.post("/auth", "AccountPanelController.auth").as('authAccount');
Route.get("/logout", "AccountPanelController.logout").as('authAccount');

Route.get("/account-panel", "AccountPanelController.index").middleware(['auth']);

Route.get("/ranking/top-guilds", "RankingController.rankingTopGuild");
Route.get("/ranking/top-players", "RankingController.rankingTopPlayers");
