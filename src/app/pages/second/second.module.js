'use strict';

import SecondComponent from './second.component';

const secondPageModule = angular.module('second-module', [
    'ui.router'
])
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        //$urlRouterProvider.otherwise('/');

        $stateProvider
            .state('second', {
                url: '/second',
                component: 'second'
            });
    })
    .component('second', new SecondComponent());

export default secondPageModule;
