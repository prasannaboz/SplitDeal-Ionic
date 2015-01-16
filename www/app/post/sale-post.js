(function () {
    'use strict';
    angular
        .module("SplitDealApp")
        .controller("SalePostCtrl", SalePostCtrl);

    SalePostCtrl.$inject = ['$scope', 'salePostDataApi'];

    function SalePostCtrl($scope, salePostDataApi) {
        var vm = this;
        vm.saveSalePostData = saveSalePostData;
        $scope.master = {};

        function saveSalePostData(SalePost) {
            salePostDataApi.createSalePost(SalePost);
            SalePost = " ";
            //console.log("saveSalePostData=", SalePost);
        }
    }
})();