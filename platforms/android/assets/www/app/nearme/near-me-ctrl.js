(function () {

    angular.module('SplitDealApp').controller('NearMeCtrl', ['$ionicLoading', NearMeCtrl]);

    function NearMeCtrl($scope, $ionicLoading) {

        $scope.mapCreated = function (map) {
            $scope.map = map;

            navigator.geolocation.getCurrentPosition(function (pos) {
                console.log('Got pos', pos);
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.loading.hide();
            }, function (error) {
                alert('Unable to get location: ' + error.message);
            });
            console.log("mapCreated is executed");
        };
    };

})();