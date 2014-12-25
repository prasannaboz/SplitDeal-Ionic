(function(){
    'use strict';

    angular.module('SplitDealApp').controller('NearMeCtrl',[NearMeCtrl]);

    function NearMeCtrl(){
        var vm = this;

        vm.map = {
            center:{
                latitude:38.897677,
                longitude: -77.036530
            },
            zoom:12
        };

        vm.marker = {}
        console.log("Near Map Executed");
    };

})();