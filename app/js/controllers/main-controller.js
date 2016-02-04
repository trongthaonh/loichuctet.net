'use strict';

function MainController(SidebarService, Html2CanvasService, Facebook, $, AppSettings) {
  'ngInject';

  const main = this;

  main.sidebarData = SidebarService.data;
  main.currentAction = 0;

  // Set like fanpage status default
  if(!localStorage.lct_liked){
    localStorage.setItem("lct_liked", '0');
  }

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

        if(main.sidebarData.selectingLayout.background.zIndex){
          cardCtx.drawImage(avatar,sX1,sY1, parseInt(avatar.style.width, 10), parseInt(avatar.style.height, 10));
          cardCtx.drawImage(background,0,0);
        } else{
          cardCtx.drawImage(background,0,0);
          cardCtx.drawImage(avatar,sX1,sY1, parseInt(avatar.style.width, 10), parseInt(avatar.style.height, 10));
        }
        cardCtx.drawImage(imageElement,sX2,sY2);

        if(typeof _callback == 'function'){
          _callback(cardCanvas);
        }
      }
    });
  };

  var likeBefore = function(_callback){
    if(localStorage.lct_liked === '0'){
      Facebook.parseXFBML();
      swal({
        title: "Nhấn nút Like để tiếp tục",
        text: '<div class="fb-like" data-href="https://www.facebook.com/loichuctetynghia" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>',
        html: true
      });
    } else {
      if(typeof _callback == 'function'){
        _callback();
      }
    }
  };

  var likePopup = function(){
    if(localStorage.lct_liked === '0'){
      Facebook.parseXFBML();
      swal({
        title: "Nhấn nút Like để ủng hộ LoiChucTet.Net",
        text: '<div class="fb-like" data-href="https://www.facebook.com/loichuctetynghia" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>',
        html: true
      });
    }
  };

  var share = function(_callback){
    domToCanvas(function(_canvas){
      _canvas.toBlob(function(_blob) {
        _blob.lastModifiedDate = new Date();
        _blob.name = "loichuctet.net.png";


        // Upload image
        var fd = new FormData();
        fd.append('file', _blob);

        $.ajax({
          method: "POST",
          url: AppSettings.apiUrlUS + "/containers/images/upload",
          data: fd,
          processData: false,
          contentType: false
        })
        .done(function(response) {
          var imageUrl = AppSettings.apiUrlUS + "/containers/images/download/" + response.result.files.file[0].name;
          FB.ui({
            method: 'feed',
            title: "Lời Chúc Tết 2016",
            app_id: 1252568694759524,
            link: "http://apps.loichuctet.net",
            picture: imageUrl,
            caption: "Gửi lời chúc tết Bính Thân đến những người thân yêu nhất của bạn",
            redirect_uri: "http://apps.loichuctet.net"
          }, function(response){
            if(typeof _callback == 'function'){
              _callback();
            }
          });
        });
      });
    });
  };

  var download = function(_callback){
    domToCanvas(function(_canvas){
      _canvas.toBlob(function(blob) {
        saveAs(blob, "my_card.loichuctet.net.png");

        if(typeof _callback == 'function'){
          _callback();
        }
      });
    });
  };

  main.downloadCard = function() {
    download(likePopup);
  };

  main.shareCard = function(){
    share(likePopup);
  };

  Facebook.subscribe('edge.create', function() {
    localStorage.setItem("lct_liked", '1');
    swal({
      title: "Cảm ơn bạn đã ủng hộ nhóm phát triển!",
      text: "Cùng <b>Lời Chúc Tết</b> chia sẻ những lời chúc tết ý nghĩa đến những người thân yêu nhất của bạn!",
      type: "success",
      html: true
    });
  });

  Facebook.subscribe('edge.remove', function() {
    localStorage.setItem("lct_liked", '0');
  });

}

export default {
  name: 'MainController',
  fn: MainController
};
