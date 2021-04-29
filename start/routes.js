"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("home/home");

Route.get("/downloads", "DownloadController.index");
Route.get("/register", "RegisterController.index");
Route.get("/news", "NewsController.index");
