(function () {
    'use strict';
    angular.module('SplitDealApp')
        .directive('map', function () {
            return {
                restrict: 'E',
                scope: {
                    onCreate: '&'
                },
                link: function ($scope, $element) {
                    function initialize() {
                        var myCenter = new google.maps.LatLng(51.508742, -0.120850);
                        var mapOptions = {
                            center: myCenter,
                            zoom: 16,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };



                        var map = new google.maps.Map($element[0], mapOptions);

                        var marker = new google.maps.Marker({
                            position: myCenter,
                            title: 'Click to zoom'
                        });

                        marker.setMap(map);

                        var infowindow = new google.maps.InfoWindow({
                            content: 'Information About Marker'
                        });
                        infowindow.open(map,marker);

                    }

                    if (document.readyState === "complete") {
                        initialize();
                    } else {
                        google.maps.event.addDomListener(window, 'load', initialize);
                    }
                }
            }
        });
})();