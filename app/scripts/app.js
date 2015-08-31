/**
 * Created by tarunbajaj on 22/08/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$location', '$http', function ($location, $http) {

    //console.log('In Main Ctrl : ');

    var self = this;
    self.items = [];
    //self.items = [
    //    {id: 1, label: 'First', done: true},
    //    {id: 2, label: 'Second', done: false}
    //];

    self.getDoneClass = function(item) {
        return {
            finished: item.done,
            unfinished: !item.done
        };
    };

    this.countries = [
        {label: 'USA', id: 1},
        {label: 'India', id: 2},
        {label: 'Other', id: 3}
    ];

    this.selectedCountryId = 2;
    this.selectedCountry = this.countries[1];

    self.navigate = function()
    {
        $location.path('/some/where');
    };

    $http.get('/api/note').then(function(response) {
        self.items = response.data;
    }, function(errResponse) {
        self.errorMessage = errResponse.data.msg;
    });

}]);