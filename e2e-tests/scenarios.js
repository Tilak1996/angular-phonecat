'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('phonecatApp', function() {

  beforeEach(function() {
    browser.get('index.html');
  });

  it('should filter as user types into the `Search` box', function() {
    var phonelist = element.all(by.repeater('phone in $ctrl.phones'));
    var query = element(by.model('$ctrl.query'));

    expect(phonelist.count()).toBe(3);

    //Test if we type nexus in it
    query.sendKeys('nexus');
    expect(phonelist.count()).toBe(1);
    query.clear();

    //Test if we type motorola in it
    query.sendKeys('motorola');
    expect(phonelist.count()).toBe(2);
  });

});
