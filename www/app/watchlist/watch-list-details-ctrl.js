(function () {
    angular.module('SplitDealApp')
        .controller('WatchListDetailCtrl', ['$stateParams', 'splitDealApi', WatchListDetailCtrl]);

    function WatchListDetailCtrl($stateParams, splitDealApi) {

        var vm = this;

        console.log("$stateParams", $stateParams);

        vm.itemId = $stateP;

        console.log(vm.itemId);

        splitDealApi.getMyWatchList().then(function (data) {


        });
    }

})();