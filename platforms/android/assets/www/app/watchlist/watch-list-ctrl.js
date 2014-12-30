(function () {
    'use strict';
    angular.module('SplitDealApp')
        .controller('WatchListCtrl', ['$scope','$state', 'splitDealApi','$cordovaBarcodeScanner', WatchListCtrl]);

    function WatchListCtrl($scope,$state, splitDealApi,$cordovaBarcodeScanner) {
        var vm = this;

        $scope.scan = function () {

            $cordovaBarcodeScanner.scan()
                .then(function (result) {

                    //alert(result.text);
                    $scope.scanResult = result;

                }, function (err) {
                    var scanResult = 'SCAN ERROR (see console)';
                    console.error(err);
                });
        };

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