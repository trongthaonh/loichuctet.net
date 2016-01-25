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
        messagePlaceholder: {
          top: '622px',
          left: '60px',
          width: '420px',
          fontSize: '24px',
          color: '#f7d433'
        }
      },
      {
        background: {
          width: '800px',
          height: '400px',
          url: 'images/layout-thiep-07.png'
        },
        imagePlaceholder: {
          top: '-3px',
          right: '0px',
          width: '380px',
          height: '406px'
        },
        btnSelectImage: {
          top: '400px',
          right: '160px',
          width: '144px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '86px',
          left: '50px',
          width: '410px',
          fontSize: '24px'
        }
      },
      {
        background: {
          width: '800px',
          height: '400px',
          url: 'images/layout-thiep-08.png'
        },
        imagePlaceholder: {
          top: '-3px',
          left: '0px',
          width: '380px',
          height: '406px'
        },
        btnSelectImage: {
          top: '400px',
          left: '160px',
          width: '144px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '86px',
          right: '50px',
          width: '410px',
          fontSize: '24px'
        }
      },
      {
        background: {
          width: '800px',
          height: '555px',
          url: 'images/layout-thiep-09.jpg'
        },
        imagePlaceholder: {
          top: '38px',
          left: '425px',
          width: '160px',
          height: '160px'
        },
        btnSelectImage: {
          top: '197px',
          left: '434px',
          width: '144px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '260px',
          left: '274px',
          width: '479px',
          fontSize: '24px'
        }
      },
      {
        background: {
          width: '800px',
          height: '555px',
          url: 'images/layout-thiep-10.jpg'
        },
        imagePlaceholder: {
          top: '76px',
          left: '225px',
          width: '160px',
          height: '160px'
        },
        btnSelectImage: {
          top: '237px',
          left: '233px',
          width: '144px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '285px',
          left: '69px',
          width: '479px',
          fontSize: '24px',
          color: '#f7d433'
        }
      },
      {
        background: {
          width: '800px',
          height: '555px',
          url: 'images/layout-thiep-11.jpg'
        },
        imagePlaceholder: {
          top: '75px',
          left: '559px',
          width: '129px',
          height: '129px',
          'box-shadow': '4px 4px 13px rgba(150, 150, 150, 1)'
        },
        btnSelectImage: {
          top: '205px',
          left: '560px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '205px',
          left: '150px',
          width: '272px',
          height: '144px',
          fontSize: '20px',
          color: '#fff',
          'text-shadow': '4px 4px 13px rgba(150, 150, 150, 1)'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-12.jpg'
        },
        imagePlaceholder: {
          top: '210px',
          left: '309px',
          width: '170px',
          height: '170px',
          'box-shadow': '4px 4px 13px rgba(0, 0, 0, 1)'
        },
        btnSelectImage: {
          top: '180px',
          left: '329px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '406px',
          left: '240px',
          width: '302px',
          height: '176px',
          fontSize: '18px',
          color: '#c31911'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-13.jpg'
        },
        imagePlaceholder: {
          top: '27px',
          left: '327px',
          width: '146px',
          height: '146px'
        },
        btnSelectImage: {
          top: '-4px',
          left: '333px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '189px',
          left: '69px',
          width: '668px',
          height: '324px',
          fontSize: '18px',
          color: '#fff'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-14.jpg'
        },
        imagePlaceholder: {
          top: '499px',
          left: '104px',
          width: '189px',
          height: '189px',
          'box-shadow': '4px 4px 13px rgba(0, 0, 0, 1)'
        },
        btnSelectImage: {
          top: '689px',
          left: '137px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '499px',
          left: '339px',
          width: '392px',
          height: '195px',
          fontSize: '18px',
          'text-align': 'left',
          'text-shadow': '4px 4px 13px rgba(0, 0, 0, 1)'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-15.jpg'
        },
        imagePlaceholder: {
          top: '357px',
          left: '573px',
          width: '149px',
          height: '149px'
        },
        btnSelectImage: {
          top: '507px',
          left: '573px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '534px',
          left: '128px',
          width: '563px',
          height: '205px',
          fontSize: '20px',
          color: '#fff',
          fontFamily: 'inherit'
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