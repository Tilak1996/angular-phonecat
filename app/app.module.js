//Define phonecat app module
var phonecatApp = angular.module('phonecatApp',[
    //It is dependent on another module i.e. phone-list.module.js
    'phoneList'
]);

//Define PhoneListController in phonecatApp module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
    
});