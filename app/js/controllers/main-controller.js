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


  main.dom2image = function() {
    var canvas = document.getElementById('my-canvas');
    var ctx = canvas.getContext('2d');

    var background=document.getElementById("background-image");
    var avatar=document.getElementById("avatar");
    var message=document.getElementById("message").outerHTML;

    setTimeout(function(){
      canvas.toBlob(function(blob) {
        saveAs(blob, "pretty image.png");
      });

      //saveSvgAsPng(canvas, 'blabla')

    }, 2000)


    ctx.drawImage(background,0,0);
    ctx.drawImage(avatar,100,100);
    ctx.drawImage(message,500,0);


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
