(function () {
    'use strict';
    angular.module('SplitDealApp')
        .controller('WatchListDetailCtrl', ['$stateParams', 'splitDealApi', WatchListDetailCtrl]);

    function WatchListDetailCtrl($stateParams, splitDealApi) {

        var vm = this;
        //console.log("$stateParams", $stateParams);
        vm.itemId = $stateParams.id;

        //console.log("Item Id", vm.itemId);

        splitDealApi.getMyWatchList().then(function (data) {

            vm.itemDetail = _(data.Result).chain()
                            .find({'Id':vm.itemId})
                            .pick('ItemDescription','Location','ItemName','ModifiedAt')
                            .value();
        });
    }

})();