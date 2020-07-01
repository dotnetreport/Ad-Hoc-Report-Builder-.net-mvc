

function setupController($scope, $element, $attrs) {
    var reportViewModel = this;
}
angular.module('dotnetreport').component('setupTable', {
    templateUrl: '/views/components-view/report_setup_table.html',
    bindings: {
        tables: '='
    },
    controller: setupController,
    controllerAs: 'reportViewModel'
});