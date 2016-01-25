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