(function(){
    angular.module('SplitDealApp')
        .controller('WatchListDetailCtrl',['$stateParams','splitDealApi',WatchListDetailCtrl]);

    function WatchListDetailCtrl($stateParams,splitDealApi){

        var vm = this;

        console.log("$stateParams",$stateParams);

        vm.itemId = $stateParams.id;

        splitDealApi.getMyWatchList().then(function (data) {
            vm.items = data;

            var item = _.chain(vm.items.Items)
                        .find("id")
        });
    }

})();