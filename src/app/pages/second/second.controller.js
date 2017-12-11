'use strict';


import  _ from 'lodash/core';


export default class SecondController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
    }

    $onInit() {
        console.log('Hello, intialized!');
        this.lodash_version = _.VERSION;
        
    }
}