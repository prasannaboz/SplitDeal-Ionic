(function () {
    'use strict';
    angular
        .module('SplitDealApp')
        .controller('WatchListDetailCtrl',WatchListDetailCtrl);

    WatchListDetailCtrl.$inject = ['$stateParams', '$state', 'splitDealApi'];

    function WatchListDetailCtrl($stateParams, $state, splitDealApi) {

        var vm = this;

        vm.gotoRefine = gotoRefine ;
        vm.itemId = $stateParams.id;


        function gotoRefine() {
            $state.go('refine');
        }

        splitDealApi.getMyWatchList().then(function (data) {

            vm.itemDetail = _(data.Result).chain()
                .find({'Id': vm.itemId})
                .pick('ItemDescription', 'Location', 'ItemName', 'ModifiedAt')
                .value();
        });
    }

})();