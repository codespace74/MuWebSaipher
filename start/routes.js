"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

/**
 * Home Router
 */
Route.get("/", "HomeController.index");

/**
 * Register Router
 */
Route.get("/register", "RegisterController.index").middleware(["isAuth"]);
Route.post("/register", "RegisterController.create")
  .as("createAccount")
  .middleware(["isAuth"]);
/**
 * News Router
 */

Route.get("/news", "NewsController.index");
Route.get("/news/read/:id", "NewsController.read");
Route.get("/news/create", "NewsController.create");

/**
 * Authentication Router
 */
Route.get("/login", "AccountPanelController.login").middleware(["isAuth"]);
Route.post("/auth", "AccountPanelController.auth")
  .as("authAccount")
  .middleware(["isAuth"]);
Route.get("/logout", "AccountPanelController.logout").as("authAccount");

/**
 * Account Router
 */
Route.get("/account-panel", "AccountPanelController.index").middleware([
  "auth",
]);
Route.get("/account-panel/characters", "CharacterController.index").middleware([
  "auth",
]);

Route.get(
  "/account-panel/character/:name",
  "CharacterController.profile"
).middleware(["auth"]);

/**
 * Ranking Router
 */
Route.get("/ranking/top-guilds", "RankingController.rankingTopGuild");
Route.get("/ranking/top-players", "RankingController.rankingTopPlayers");

/**
 * Download Router
 */
Route.get("/downloads", "DownloadController.index");
Route.get("/downloads/create", "DownloadController.create");
