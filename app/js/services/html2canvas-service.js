'use strict';

function Html2CanvasService($window, html2canvas) {
  'ngInject';

  $window.html2canvas = html2canvas;

  return $window.html2canvas;
}

export default [{
  name: 'Html2CanvasService',
  fn: Html2CanvasService
}];