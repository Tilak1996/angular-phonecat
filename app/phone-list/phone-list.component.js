angular.
    module('phoneList').        //Defined phoneList module from phone-list.module.js
        component('phoneList', {
            // URL where the HTML template is present
            templateUrl: 'phone-list/phone-list.template.html',
          controller: function PhoneListController() {
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Motorola XOOM with Wi-Fi',
                    snippet: 'The next generation tablet.'
                }, {
                    name: 'Motorola XOOM',
                    snippet: 'The Next, Next generation tablet.'
                }
            ];
          }
        });