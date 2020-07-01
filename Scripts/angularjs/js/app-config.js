angular.module('dotnetreport').config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/setup', {
                    template: '<table-setup></table-setup>'
                }).
                otherwise('/setup');
        }
    ]);