"use strict";

(() => {
  angular
    .module("MenuApp", ["ui.router", "MenuData"])
    .controller("CategoriesController", CategoriesController)
    .controller("ItemsController", ItemsController);

  ItemsController.$inject = ["$state", "MenuService"];

  function ItemsController($state, menuService) {
    const controller = this;

    controller.category = null;

    controller.$onInit = () => {
      const categoryShortName = $state.params.categoryShortName;

      const goHome = () => {
        $state.go("categories");
      };

      if (!categoryShortName) {
        return goHome();
      }

      menuService
        .getCategory(categoryShortName)
        .then((category) => {
          if (!category) {
            return goHome();
          }

          controller.category = category;
        })
        .catch(() => {
          goHome();
        });
    };
  }

  CategoriesController.$inject = ["MenuService"];

  function CategoriesController(menuService) {
    const controller = this;

    controller.categories = [];

    controller.$onInit = () => {
      menuService.getCategories().then((categories) => {
        controller.categories = categories;
      });
    };
  }
})();
