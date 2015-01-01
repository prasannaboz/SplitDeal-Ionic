//Register, Inject, Function Pattern
(function () {
    'use strict';

    angular
        .module('SplitDealApp')
        .factory('splitDealApi', splitDealApi);

    splitDealApi.$inject = ['$http', '$q', '$ionicLoading'];

    function splitDealApi($http, $q, $ionicLoading) {
        var currentItemId;

        //get list of items on watch list
        function getMyWatchList() {
            var deferred = $q.defer();

            $ionicLoading.show({template: 'Loading...'});

            $http.get("http://api.everlive.com/v1/IMregDJC77R1b1yM/Items/")
                .success(function (data) {
                    console.log("watchlist data is called via http");
                    deferred.resolve(data);
                    $ionicLoading.hide();
                })
                .error(function () {
                    console.log("Error via making http calls");
                    $ionicLoading.hide();
                    deferred.reject();
                });
            return deferred.promise;
        }

        function setItemId(itemId) {
            currentItemId = itemId;
        }

        //get all users data
        function getUsersData() {
            var deferred = $q.defer();
            $http.get("http://api.everlive.com/v1/IMregDJC77R1b1yM/Users/")
                .success(function (data) {
                    deferred.resolve(data);
                    console.log(data);
                })
                .error(function () {
                    console.log("Error via making http calls");
                    deferred.reject();
                });
            return deferred.promise;
        }

        return{
            getMyWatchList: getMyWatchList,
            setItemId: setItemId,
            getUsersData: getUsersData
        };
    }
})();