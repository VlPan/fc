var app = angular.module('heroApp', []).controller('MainCtrl', function MainCtrl($scope) {

    this.hero = {
        name: 'Spawn'
    };

    $scope.zip = 'hello'

    this.hello = function(value){
        console.log(value);
        $scope.zip = value;
    }

    this.addNameToHero = function(value, hero){
        console.log(hero + value);;
    }

    this.onClickEvent = function(ctrlDown){
        console.log(ctrlDown);
    }

});








