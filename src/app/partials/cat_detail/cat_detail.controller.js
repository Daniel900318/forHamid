(function() {
    'use strict';

    angular
        .module('charityfulfillment')
        .controller('Cat_detailController', Cat_detailController);

    /** @ngInject */
    function Cat_detailController($scope, $state) {
        $scope.night = 3;
        $scope.nightUp = function(){
        	$scope.night++;
        }
        $scope.nightDown = function(){
        	$scope.night--;
        }
        $scope.goModal = function(){
        	$scope.total = $scope.night * 630
        }
        $scope.goCat = function(){
        	setTimeout(function(){
        	$state.go('home.category')
        	}, 300)
        }
    }
})();
