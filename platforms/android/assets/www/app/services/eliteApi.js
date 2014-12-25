(function () {
    'use strict';

    angular.module('eliteApp').factory('eliteApi', ['$http', '$q', eliteApi]);

    function eliteApi($http, $q) {

        var currentLeagueId;

        function getLeagues() {
            var deferred = $q.defer();

            $http.get("http://elite-schedule.net/api/leaguedata/")
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function () {
                    console.log("Error via making http calls");
                    deferred.reject();
                });
            return deferred.promise;
        }

        function getLeagueData() {
            var deferred = $q.defer();

            $http.get("http://elite-schedule.net/api/leaguedata/2024")
                .success(function (data, status) {
                    console.log("Received schedule via http", data, status);
                    deferred.resolve(data);
                    //callback(data);
                })
                .error(function () {
                    console.log("Error via making http calls");
                    deferred.reject();
                });
            return deferred.promise;
        };

        function setLeagueId(leagueId) {

            currentLeagueId = leagueId;
        }

        return{
            getLeagues: getLeagues,
            getLeagueData: getLeagueData,
            setLeagueId: setLeagueId

        };
    };
})();