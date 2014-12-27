(function () {
    'use strict';
    angular.module('SplitDealApp')
        .controller('WatchListCtrl', ['$state', 'splitDealApi', WatchListCtrl]);

    function WatchListCtrl($state, splitDealApi) {
        var vm = this;

        splitDealApi.getMyWatchList().then(function (data) {
            vm.items = data;
        });

        vm.setItemId = function (itemId) {
            splitDealApi.setItemId(itemId);
            $state.go('tab.watch-list-details');

            console.log("Item Id", itemId);
        };
    };
})();