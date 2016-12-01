angular.module('inventories').service('InventoryService', ['$http',
  function handleService($http) {
    this.openProductDetail = (params) => {
      return $http.get(
        `/api/inventories/product?productId=${params.productId}&sku=${params.sku}`
      );
    };

    this.totalProducts = (params) => {
      return $http.get(
        `/api/inventories/products?selectedChannel=${params.selectedChannel}`
      );
    };
  },
]);
