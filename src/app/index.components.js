'use strict';

import footerModule from './components/footer/footer.module';
import secondModule from './pages/second/second.module';

export default angular.module('index.components', [
	footerModule.name,
	secondModule.name
]);
