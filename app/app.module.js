//Define phonecat app module
var phonecatApp = angular.module('phonecatApp',[
    //It is dependent on another module i.e. phone-list.module.js
    'phoneList'
]);

//Define PhoneListController in phonecatApp module
// phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
//     $scope.phones = [
//         {
//             name: 'Nexus S',
//             snippet: 'Fast just got faster with Nexus S.'
//         }, {
//             name: 'Motorola XOOM with Wi-Fi',
//             snippet: 'The next generation tablet.'
//         }, {
//             name: 'Motorola XOOM',
//             snippet: 'The Next, Next generation tablet.'
//         }
//     ];
// });