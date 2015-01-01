(function () {
    'use strict';
    angular.module('SplitDealApp').controller('MydealsCtrl', ['$scope', '$cordovaCamera', MydealsCtrl]);


    function MydealsCtrl($scope, $cordovaCamera) {
        //$scope.message = "Message From Mydeals Controller";
        $scope.takePicture = function () {
            console.log("take picture");
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA
            };

            // udpate camera image directive
            $cordovaCamera.getPicture(options).then(function (imageData) {
                $scope.cameraimage = "data:image/jpeg;base64," + imageData;
            }, function (err) {
                console.log('Failed because: ' + message);
            });
        };

    };

})();