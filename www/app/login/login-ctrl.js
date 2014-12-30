(function () {
    'use strict';

    angular.module('SplitDealApp').controller('LoginCtrl', ['$scope', '$state', 'splitDealApi', LoginCtrl]);

    var vm = this;
    var users;

    function LoginCtrl($scope, $state, splitDealApi) {

        splitDealApi.getUsersData().then(function (data) {
            users = data;
        });

        $scope.userLogin = function (username, password) {

            console.log("userLogin Called");
            $state.go('tab.watchlist');

//            console.log("number of Users " + users.Result[0].Username);
//
//            for (var i = 0; i < users.Count; i++) {
//
//                if (username == users.Result[i].Username && password == users.Result[i].Password ) {
//                    console.log("success");
//                }
//                else {
//                    console.log("false");
//                }
//            }

            //console.log("user Login Is called"+username,password);
            //console.log("Users lo"+users.Result);
        };

    }

})();