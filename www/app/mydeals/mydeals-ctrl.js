(function(){
    'use strict';
    angular.module('SplitDealApp').controller('MydealsCtrl', ['$scope', MydealsCtrl]);


    function MydealsCtrl ($scope){
            $scope.message = "Message From Mydeals Controller";
    };

})();