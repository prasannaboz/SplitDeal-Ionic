(function () {
    'use strict';
    angular
        .module('SplitDealApp')
        .controller('MydealsCtrl', MydealsCtrl);

    MydealsCtrl.$inject = ['$scope', '$cordovaCamera'];

    function MydealsCtrl($scope, $cordovaCamera) {

        var vm = this;
        //$scope.message = "Message From Mydeals Controller";
        $scope
            .takePicture = function () {
            console.log("take picture");
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: false
            };

            // udpate camera image directive
            $cordovaCamera
                .getPicture(options).then(function (imageData) {
                    $scope.cameraimage = "data:image/jpeg;base64," + imageData;
                }, function (err) {
                    console.log('Failed because: ' + message);
                });
        };
    }

})();