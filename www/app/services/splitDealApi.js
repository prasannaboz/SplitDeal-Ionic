(function(){
    'use strict';

    angular.module('SplitDealApp').factory('splitDealApi',['$http','$q',splitDealApi]);

    function splitDealApi($http,$q){

        var currentItemId;

        function getMyWatchList(){
            var deferred = $q.defer();

            $http.get("http://api.everlive.com/v1/IMregDJC77R1b1yM/Items/")
                .success(function (data) {
                    deferred.resolve(data);
                    console.log(data);
                })
                .error(function () {
                    console.log("Error via making http calls");
                    deferred.reject();
                });
            return deferred.promise;
        };

        function setItemId(itemId) {

            currentItemId = itemId;
        }

        return{
            getMyWatchList: getMyWatchList,
            setItemId: setItemId
        };
    };

})();