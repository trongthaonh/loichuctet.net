'use strict';

function MainController(SidebarService, Html2CanvasService, Facebook, $) {
  'ngInject';

  const main = this;

  main.sidebarData = SidebarService.data;
  main.cardMessage = "Năm mới Tết đến Rước hên vào nhà Quà cáp bao la Mọi nhà no đủ";

  var downloadImage = function(){
    var cardLayout = document.getElementsByClassName("card-layout");
    html2canvas(cardLayout, {
      onrendered: function(canvas) {
        Canvas2Image.saveAsPNG(canvas);
      }
    });
  };

  main.captureCard = function(){
    Facebook.getLoginStatus(function(response) {
      if(response.status != "connected"){
        Facebook.login(function(response) {
          if(response.status == "connected"){
            downloadImage();
          }
        }, {scope: 'public_profile, user_friends, user_photos'});
      } else{
        downloadImage();
      }
    });
  };

  // Move Facebook like button
  //var $moveable = $('.fb-like');
  //$(document).mousemove(function(e){
  //  $moveable.css({'top': e.pageY - 100,'left': e.pageX - 500});
  //});
}

export default {
  name: 'MainController',
  fn: MainController
};
