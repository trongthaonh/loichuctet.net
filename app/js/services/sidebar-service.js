'use strict';

function SidebarService() {
  'ngInject';

  const service = {};

  service.data = {
    activeTab : 'layout',
    selectingLayout: {},
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
          fontSize: '24px'
          //height: '300px'
        }
      }
    ]
  };

  service.data.selectingLayout = service.data.layouts[0];

  return service;
}

export default [{
  name: 'SidebarService',
  fn: SidebarService
}];