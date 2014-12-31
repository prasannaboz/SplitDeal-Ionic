(function () {
    'use strict';
    angular.module('SplitDealApp')
        .controller('BarcodeScannerCtrl',
        ['$scope', '$cordovaBarcodeScanner', '$cordovaOauth', BarcodeScannerCtrl]);

    function BarcodeScannerCtrl($scope, $cordovaBarcodeScanner, $cordovaOauth) {
        var vm = this;

        //barcode scanner
        $scope.scan = function () {
            $cordovaBarcodeScanner.scan()
                .then(function (result) {
                    //alert(result.text);
                    $scope.scanResult = result;
                }, function (err) {
                    var scanResult = 'SCAN ERROR (see console)';
                    console.error(err);
                });
        };


        //oauth
        $scope.googleLogin = function () {
            $cordovaOauth.google("53403813997-23amgkdaart0ddsmatqevtt5dv56luh0.apps.googleusercontent.com",
                ["oauth2:https://www.googleapis.com/auth/plus.me",
                    "https://www.googleapis.com/auth/userinfo.profile"])
                .then(function (result) {
                    console.log("Oauth Result=", result)
                    $scope.oauthResult = result;
                }, function (error) {
                    $scope.oauthResult = "OAUTH ERROR (see console)";
                    console.log(error);
                });
        };

    };
})();
