'use strict';

function SidebarService($http, _) {
  'ngInject';

  const service = {};

  service.data = {
    activeTab : 'font',
    selectingLayout: {},
    fontsList: [],
    layouts: [
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-05.jpg'
        },
        imagePlaceholder: {
          top: '300px',
          left: '182px',
          width: '144px',
          height: '144px'
        },
        btnSelectImage: {
          top: '444px',
          left: '182px',
          width: '144px',
          height: '30px'
        },
        messagePlaceholder:{
          top: '622px',
          left: '60px',
          width: '420px',
          fontSize: '24px',
          fontFamily: 'inherit',
          color: "#FACC3C"
        }
      }
    ]
  };

  service.data.selectingLayout = service.data.layouts[0];

  // Load google fonts
  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCU-tywp4zsEcoWq2oi69yENRBZ4NE-fyU'
  }).then(function successCallback(response) {
    service.data.fontsList = response.data.items;

    let fontFamilies = [];
    _.each(response.data.items, function(i){
      if(fontFamilies.length < 10){
        fontFamilies.push(i.family)
      }
    });

    WebFont.load({
      google: {
        families: fontFamilies
      }
    });
  }, function errorCallback(response) {
    console.log(response)
  });

  return service;
}

export default [{
  name: 'SidebarService',
  fn: SidebarService
}];