'use strict';


import _ from 'lodash/core';

import angularLogo from '_images/angular.png';

export default class MainController {
    constructor($log, $state) {
        'ngInject';
        this.$log = $log;
        this.$stateProvider = $state;
    }

    $onInit() { 

        this.lodash_version = _.VERSION;


        this.angularLogo = angularLogo;

        this.goToSecond = function () {
            this.$stateProvider.go('second');
        }
    }

}