(function() {
  'use strict';

  angular
    .module('charityfulfillment')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
