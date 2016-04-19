(function() {
    'use strict';

    angular
        .module('charityfulfillment')
        .controller('CategoryController', CategoryController);

    /** @ngInject */
    function CategoryController($scope, $state) {
        $scope.categorys = [
        	{
        		image: './assets/category/cat/Hotels.png',
        		name: 'Hotels'
        	},
        	{
        		image: './assets/category/cat/Restaurants.png',
        		name: 'Meals'
        	},
        	{
        		image: './assets/category/cat/Electronics.png',
        		name: 'Devices'
        	},
        	{
        		image: './assets/category/cat/Stores.png',
        		name: 'Stores'
        	},
        	{
        		image: './assets/category/cat/OnDemand.png',
        		name: 'Demand'
        	},
        	{
        		image: './assets/category/cat/GiftCards.png',
        		name: 'GCards'
        	},
        	{
        		image: './assets/category/cat/Tickets.png',
        		name: 'Tickets'
        	},
        	{
        		image: './assets/category/cat/Other.png',
        		name: 'Other'
        	},
        	
        ]
        $scope.selectedCat = [
            {
                image: './assets/category/hotels/AllDest_21-Phoenix-Scottscdale-Area.jpg',
                title: 'Phoenix',
                content: '630 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_01-Orlando.jpg',
                title: 'Olando',
                content: '575 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_02-LasVegasArea.jpg',
                title: 'Las Vegas',
                content: '630 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_09-LosCabos.jpg',
                title: 'Los Cabos',
                content: '630 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_04-MyrtleBeach.jpg',
                title: 'Myrtle Beach',
                content: '630 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_04-MyrtleBeach.jpg',
                title: 'Myrtle Beach',
                content: '630 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_04-MyrtleBeach.jpg',
                title: 'Myrtle Beach',
                content: '630 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_04-MyrtleBeach.jpg',
                title: 'Myrtle Beach',
                content: '630 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_04-MyrtleBeach.jpg',
                title: 'Myrtle Beach',
                content: '630 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_04-MyrtleBeach.jpg',
                title: 'Myrtle Beach',
                content: '630 points per day'
            },
            {
                image: './assets/category/hotels/AllDest_04-MyrtleBeach.jpg',
                title: 'Myrtle Beach',
                content: '630 points per day'
            },{
                image: './assets/category/hotels/AllDest_04-MyrtleBeach.jpg',
                title: 'Myrtle Beach',
                content: '630 points per day'
            }
        ]
        $scope.info = {
            title: 'THE POINTS',
            avail: '10,730',
            pending: '3,500'
        }
        $scope.active = 0;
        $scope.selectCat = function(index){
            $scope.active = index;
        }
        $scope.isActive = function(index){
            if($scope.active == index){
                return true
            }else{
                return false
            }
        }
        $scope.selectedItem = 0;
        $scope.down = function(){
            $scope.selectedItem++
            // $scope.$apply()
            console.log('yes', $scope.selectedItem)
        }
        $scope.up = function(index){
            if(index < 1) return
            $scope.selectedItem--
            // $scope.$apply()
        }
    }
})();
