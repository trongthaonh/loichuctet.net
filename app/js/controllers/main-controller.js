'use strict';

function MainController(SidebarService, _, Html2CanvasService, Facebook) {
  'ngInject';

  const main = this;

  main.sidebarData = SidebarService.data;
  main.cardMessage = "Năm mới Tết đến Rước hên vào nhà Quà cáp bao la Mọi nhà no đủ";


  main.fileChanged = function(event) {
    main.file = event.target.files[0];
  };

  main.handle = function handle(dataURL) {
    // Do your uploading here
  };

  main.captureCard = function(){
    Facebook.login(function(response) {
      Facebook.api('me/photos?fields=source,name,id', function(_res){
        console.log(_res);
      });
      document.getElementById("main").style.overflow = 'visible';
      var cardLayout = document.getElementsByClassName("card-layout");
      html2canvas(cardLayout, {
        onrendered: function(canvas) {
          document.getElementById("main").style.overflow = 'auto';
          var image = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
          window.location.href = image;
        }
      });
    }, {scope: 'public_profile, user_friends, user_photos'});
  };
}

export default {
  name: 'MainController',
  fn: MainController
};
