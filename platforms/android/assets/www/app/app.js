angular
    .module('SplitDealApp',
    ['ionic', 'ngCordova', 'uiGmapgoogle-maps', 'angular-data.DSCacheFactory'])

    .run(function ($ionicPlatform, DSCacheFactory) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            DSCacheFactory("myWatchListCache", {
                storageMode: "localStorage",
                maxAge: 5000,
                deleteOnExpire: "aggressive"
            });
            DSCacheFactory("staticCache", {storageMode: "localStorage"});
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.views.maxCache(10);

        // note that you can also chain configs
        $ionicConfigProvider.backButton.icon('ion-chevron-left');
        $ionicConfigProvider.tabs.position('bottom').style('standard');


        $stateProvider
            // setup an abstract state for the tabs directive
            .state('app', {
                url: '/app/login',
                templateUrl: 'app/login/login.html'

            })

            .state('signup', {
                url: '/app/signup',
                templateUrl: 'app/signup/signup.html'

            })

            .state('location-map', {
                url: '/app/location-map/:id',
                templateUrl: 'app/nearme/location-map.html'

            })

            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "app/layout/tabs.html"
            })


            // Each tab has its own nav history stack:
            .state('tab.watchlist', {
                url: '/watchlist',
                views: {
                    'tab-watchlist': {
                        templateUrl: 'app/watchlist/watchlist.html'
                    }
                }
            })
            .state('tab.watch-list-details', {
                url: "/watchlist/:id",
                views: {
                    'tab-watchlist': {
                        templateUrl: "app/watchlist/watch-list-details.html"
                    }
                }
            })
            .state('tab.location-map', {
                url: "/watchlist/location/:id",
                views: {
                    'tab-watchlist': {
                        templateUrl: "app/nearme/location-map.html"
                    }
                }
            })

            .state('tab.post', {
                url: '/post',
                views: {
                    'tab-mydeals': {
                        templateUrl: 'app/post/post.html'
                    }
                }
            })
            .state('tab.nearme', {
                url: '/nearme',
                views: {
                    'tab-nearme': {
                        templateUrl: 'app/nearme/nearme.html'
                    }
                }
            })
            .state('tab.favourite', {
                url: '/favourite',
                views: {
                    'tab-favourite': {
                        templateUrl: 'app/favourite/favourite.html'
                    }
                }
            })
            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'app/settings/settings.html'
                    }
                }
            });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/login');


    });