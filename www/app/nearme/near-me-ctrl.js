(function () {
    'use strict';

    angular.module('SplitDealApp').controller('NearMeCtrl', ['$stateParams', NearMeCtrl]);

    function NearMeCtrl($StateParams) {

        var vm = this;

        vm.locationId = $StateParams.id;
        console.log("Location Id= ", vm.locationId);

        vm.map = {
            center:{
                latitude:38.897677,
                longitude:-77.036530
            },
            zoom:12
        };
        vm.marker = {}
    };

})();