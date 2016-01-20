'use strict';

function MainController(SidebarService, _, Html2CanvasService, Facebook) {
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
    Facebook.login(function(response) {
      html2canvas(document.body).then(function(canvas) {
        var image = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
        window.location.href = image;
      });
    }, {scope: 'public_profile, user_friends'});
  };
}

export default {
  name: 'MainController',
  fn: MainController
};
