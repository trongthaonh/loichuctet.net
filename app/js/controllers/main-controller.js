'use strict';

function MainController(SidebarService, Html2CanvasService, Facebook, $, AppSettings) {
  'ngInject';

  const main = this;

  main.sidebarData = SidebarService.data;
  main.cardMessage = "Năm mới Tết đến Rước hên vào nhà Quà cáp bao la Mọi nhà no đủ";

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

  var domToCanvas = function(_callback){
    // Create card canvas
    var cardCanvas = document.createElement('canvas');
    cardCanvas.id = "card-canvas";

    var cardLayout = document.getElementsByClassName("card-layout")[0];
    cardCanvas.width = cardLayout.clientWidth;
    cardCanvas.height = cardLayout.clientHeight;

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
        cardCtx.drawImage(avatar,sX1,sY1, parseInt(avatar.style.width, 10), parseInt(avatar.style.height, 10));
        cardCtx.drawImage(imageElement,sX2,sY2);

        if(typeof _callback == 'function'){
          _callback(cardCanvas);
        }
      }
    });
  };

  main.downloadCard = function() {
    domToCanvas(function(_canvas){
      _canvas.toBlob(function(blob) {
        saveAs(blob, "my_card.loichuctet.net.png");
      });
    });
  };

  main.shareCard = function(){
    domToCanvas(function(_canvas){
      _canvas.toBlob(function(_blob) {
        _blob.lastModifiedDate = new Date();
        _blob.name = "loichuctet.net.png";


        // Upload image
        var fd = new FormData();
        fd.append('file', _blob);

        $.ajax({
          method: "POST",
          url: AppSettings.apiUrl + "/containers/images/upload",
          data: fd,
          processData: false,
          contentType: false
        })
        .done(function(response) {
          var imageUrl = AppSettings.apiUrl + "/containers/images/download/" + response.result.files.file[0].name;
          FB.ui({
            method: 'feed',
            app_id: 1252568694759524,
            link: "http://apps.loichuctet.net",
            picture: imageUrl,
            caption: "Gửi lời chúc tết Bính Thân đến những người thân yêu nhất của bạn",
            redirect_uri: "http://apps.loichuctet.net"
          }, function(response){
            console.log("OK");
          });
        });
      });
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
