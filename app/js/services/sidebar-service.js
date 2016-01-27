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
          height: '205px',
          fontFamily: 'inherit',
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
          height: '205px',
          fontFamily: 'inherit',
          fontSize: '24px',
          color: '#f7d433'
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
          height: '205px',
          fontFamily: 'inherit',
          fontSize: '24px',
          color: '#f7d433'
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
          height: '205px',
          fontFamily: 'inherit',
          fontSize: '24px',
          color: '#f7d433'
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
          height: '205px',
          fontFamily: 'inherit',
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
          fontFamily: 'inherit',
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
          fontFamily: 'inherit',
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
          fontFamily: 'inherit',
          fontSize: '18px',
          'text-align': 'left',
          'text-shadow': '4px 4px 13px rgba(0, 0, 0, 1)'
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-16.jpg'
        },
        imagePlaceholder: {
          top: '265px',
          left: '344px',
          width: '145px',
          height: '145px'
        },
        btnSelectImage: {
          top: '507px',
          left: '573px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '427px',
          left: '231px',
          width: '369px',
          height: '130px',
          fontSize: '20px',
          fontFamily: 'inherit'
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
          fontFamily: 'inherit',
          color: "#FACC3C"
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-17.jpg'
        },
        imagePlaceholder: {
          top: '27px',
          left: '290px',
          width: '229px',
          height: '229px'
        },
        btnSelectImage: {
          top: '507px',
          left: '573px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '286px',
          left: '71px',
          width: '662px',
          height: '123px',
          fontSize: '20px',
          fontFamily: 'inherit',
          color: "#FFF"
        }
      },
      {
        background: {
          width: '800px',
          height: '800px',
          url: 'images/layout-thiep-18.jpg'
        },
        imagePlaceholder: {
          top: '146px',
          left: '50px',
          width: '276px',
          height: '348px'
        },
        btnSelectImage: {
          top: '507px',
          left: '573px',
          width: '130px',
          height: '30px'
        },
        messagePlaceholder: {
          top: '208px',
          left: '352px',
          width: '381px',
          height: '216px',
          fontSize: '20px',
          fontFamily: 'inherit',
          color: "#FFF"
        }
      }
    ]
  };

  service.data.selectingLayout = service.data.layouts[0];

  // Load google fonts
  service.data.fontsList = ['Rancho', 'Open Sans Condensed', 'Lobster', 'Noto Serif', 'Alegreya Sans SC', 'Roboto Mono', 'Open Sans', 'Noticia Text', 'Cousine', 'Roboto Slab'];
  WebFont.load({
    google: {
      families: service.data.fontsList
    }
  });

  return service;
}

export default [{
  name: 'SidebarService',
  fn: SidebarService
}];