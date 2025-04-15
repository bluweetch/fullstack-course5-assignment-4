"use strict";

(() => {
  angular.module("MenuData").service("MenuService", MenuService);

  MenuService.$inject = ["$http"];

  /**
   * @param {angular.IHttpService} $http
   */
  function MenuService($http) {
    const service = this;

    service.getCategories = () => {
      return $http({
        method: "get",
        url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json",
      }).then((response) => {
        const data = response.data;

        return Object.values(data).flatMap(({ category }) => category);
      });
    };

    service.getCategory = (categoryShortName) => {
      return $http({
        method: "get",
        url: `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${categoryShortName}.json`,
      }).then((response) => {
        const data = response.data;

        if (!data) {
          return null;
        }

        return {
          ...data.category,
          menu_items: data.menu_items,
        };
      });
    };
  }
})();
