"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "HomeController.index");

Route.get("/downloads", "DownloadController.index");

Route.get("/register", "RegisterController.index").middleware(["isAuth"]);
Route.post("/register", "RegisterController.create")
  .as("createAccount")
  .middleware(["isAuth"]);
Route.get("/news", "NewsController.index");
Route.get("/news/read/:id", "NewsController.read");
Route.get("/news/create", "NewsController.create");

Route.get("/login", "AccountPanelController.login").middleware(["isAuth"]);
Route.post("/auth", "AccountPanelController.auth")
  .as("authAccount")
  .middleware(["isAuth"]);
Route.get("/logout", "AccountPanelController.logout").as("authAccount");

Route.get("/account-panel", "AccountPanelController.index").middleware([
  "auth",
]);

Route.get("/ranking/top-guilds", "RankingController.rankingTopGuild");
Route.get("/ranking/top-players", "RankingController.rankingTopPlayers");
