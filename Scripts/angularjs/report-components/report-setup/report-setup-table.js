

function setupController($scope, $element, $attrs) {
    var reportViewModel = this;
}
angular.module('dotnetreport').component('setupTable', {
    templateUrl: '/',
    bindings: {
        tables: '='
    },
    controller: setupController,
    controllerAs: 'reportViewModel'
});