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


  main.downloadCard = function() {
    // Create card canvas
    var cardCanvas = document.createElement('canvas');
    cardCanvas.id = "card-canvas";
    cardCanvas.width = 800;
    cardCanvas.height = 800;

    var cardCtx = cardCanvas.getContext('2d');

    var message = document.getElementById("message");
    html2canvas(message, {
      onrendered: function(canvas) {
        var imageElement = document.createElement('img');
        imageElement.src = canvas.toDataURL("image/png");

        var background = document.getElementById("background-image");
        var avatar = document.getElementById("avatar");

        // Get position
        var backgroundRect = background.getBoundingClientRect();
        var avatarRect = avatar.getBoundingClientRect();
        var messageRect = message.getBoundingClientRect();

        // Calculate position
        var sX1 = avatarRect.left - backgroundRect.left;
        var sY1 = avatarRect.top - backgroundRect.top;

        var sX2 = messageRect.left - backgroundRect.left;
        var sY2 = messageRect.top - backgroundRect.top;

        cardCtx.drawImage(background,0,0);
        cardCtx.drawImage(avatar,sX1,sY1);
        cardCtx.drawImage(imageElement,sX2,sY2);

        setTimeout(function(){
          cardCanvas.toBlob(function(blob) {
            saveAs(blob, "loichuctet.net.png");
          });
        }, 0);
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
