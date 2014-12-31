(function () {
    'use strict';

    angular.module('SplitDealApp').controller('LocationMapCtrl', ['$stateParams', 'splitDealApi', LocationMapCtrl]);

    function LocationMapCtrl($stateParams, splitDealApi) {

        var vm = this;
        vm.locationId = $stateParams.id;
        //console.log("Location Id= ", vm.locationId);
        vm.map = {
            center: {
                latitude: 38.897677,
                longitude: -77.036530
            },
            zoom: 12
        };

        vm.marker = {};

        splitDealApi.getMyWatchList().then(function (data) {
            //console.log("Location for watch",data.Result);

            vm.data = _.find(data.Result, {Id: vm.locationId});

            //console.log("Location for watch 2",vm.data);

            vm.marker = {
                latitude: vm.data.Location.latitude,
                longitude: vm.data.Location.longitude,
                title: "This is marker with specific lat long",
                showWindow: true
            };

            vm.map.center.latitude = vm.data.Location.latitude;
            vm.map.center.longitude = vm.data.Location.longitude;
        });
    };

})();