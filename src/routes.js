"use strict";

(() => {
  angular.module("MenuApp").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", {
      url: "/",
      templateUrl: "src/views/home.html",
    });

    $stateProvider.state("categories", {
      url: "/categories",
      controller: "CategoriesController as controller",
      templateUrl: "src/views/categories.html",
    });

    $stateProvider.state("items", {
      url: "/items/{categoryShortName}",
      controller: "ItemsController as controller",
      templateUrl: "src/views/items.html",
    });
  }
})();
