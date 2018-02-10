"use strict"

describe('PhoneListController', function() {
    // it('Should create a `phones` model with 3 phones.', function() {
    //     var scope = {};
    //     var ctrl = new PhoneListController(scope);

    //     expect(scope.phones.length).toBe(2);
    // });
    beforeEach(module('phonecatApp'));
    it('Should create a `phones` model with 3 phones.', inject(function($controller) {
        var scope = [];
        var ctrl = $controller('PhoneListController', {$scope: scope});

        expect(scope.phones.length).toBe(3);
    }));
});