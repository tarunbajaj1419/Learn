/**
 * Created by tarunbajaj on 22/08/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', [function () {

    console.log('In Main Ctrl : ');

    var self = this;
    self.items = [
        {id: 1, label: 'First', done: true},
        {id: 2, label: 'Second', done: false}
    ];
    self.getDoneClass = function(item) {
        return {
            finished: item.done,
            unfinished: !item.done
        };
    };
}]);