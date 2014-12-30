(function () {
    'use strict';
    angular.module('SplitDealApp')
        .controller('BarcodeScannerCtrl',
        ['$scope', '$cordovaBarcodeScanner','$cordovaOauth', BarcodeScannerCtrl]);

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
            $cordovaOauth.google("53403813997-elrk3c92ku9vt0gq8h40g2a5a4k4evmk.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function (result) {
                $scope.oauthResult = result;
            }, function (error) {
                $scope.oauthResult = "OAUTH ERROR (see console)";
                console.log(error);
            });
        };

    };
})();
