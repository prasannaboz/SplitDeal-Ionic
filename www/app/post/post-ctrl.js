(function () {
    'use strict';
    angular
        .module('SplitDealApp')
        .controller('PostCtrl', PostCtrl);

    //PostCtrl.$inject = [];

    function PostCtrl() {

        var vm = this;
        //$scope.message = "Message From Mydeals Controller";

        console.log("post ctrl called");


    }

})();