'use strict';

function MainController(SidebarService, _, Html2CanvasService) {
  'ngInject';

  const main = this;

  main.sidebarData = SidebarService.data;
  main.cardMessage = "YOLO YOLO YOLO YOLO YOLO YOLO YOLO YOLO YOLO YOLO YOLO YOLO YOLO YOLO YOLO ";


  main.fileChanged = function(event) {
    main.file = event.target.files[0];
  };

  main.handle = function handle(dataURL) {
    // Do your uploading here
  };

  main.captureCard = function(){
    html2canvas(document.body).then(function(canvas) {
      document.body.appendChild(canvas);
    });
  };
}

export default {
  name: 'MainController',
  fn: MainController
};
