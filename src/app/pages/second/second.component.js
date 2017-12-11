'use strict';

import SecondController from './second.controller';
import secondTpl from './second.html';

export default class SecondComponent {
    constructor() {
        this.controller = SecondController;
        this.templateUrl = secondTpl;
    }
}