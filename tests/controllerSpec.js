/**
 * Created by tarunbajaj on 22/08/15.
 */

describe('Controller: MainCtrl', function () {

    beforeEach(module('myApp'));

    var ctrl, $loc, http;

    beforeEach(inject(function ($controller, $location, $httpBackend) {


        ctrl = $controller('MainCtrl');
        $loc = $location;

        http = $httpBackend;
        http.expectGET('/api/note').respond([{id: 1, label: 'Mock'}]);

    }));

    it('should have items available on load', function () {
        expect(ctrl.items).toEqual([
            {id: 1, label: 'First', done: true},
            {id: 2, label: 'Second', done: false}
        ]);
    });

    it('should have highlight items based on state', function () {

        var item = {id: 1, label: 'First', done: true};

        var actualClass = ctrl.getDoneClass(item);

        expect(actualClass.finished).toBeTruthy();
        expect(actualClass.unfinished).toBeFalsy();

        item.done = false;

        actualClass = ctrl.getDoneClass(item);

        expect(actualClass.finished).toBeFalsy();
        expect(actualClass.unfinished).toBeTruthy();
    });

    it('should navigate', function(){
        $loc.path('/some');
        ctrl.navigate();
        expect($loc.path()).toEqual('/some/where');
    });

    it('should load items from server', function() {
        expect(ctrl.items).toEqual([]);

        http.flush();
        expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
    });
});
