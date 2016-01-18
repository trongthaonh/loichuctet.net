'use strict';

function SidebarService() {
  'ngInject';

  const service = {};

  service.data = {
    activeTab : 'layout',
    selectingLayout: 'images/layout-thiep-05.jpg',
    layoutList: [
      'images/layout-thiep-01.jpg',
      'images/layout-thiep-02.jpg',
      'images/layout-thiep-03.jpg',
      'images/layout-thiep-04.jpg',
      'images/layout-thiep-05.jpg'
    ]
  };

  return service;
}

export default [{
  name: 'SidebarService',
  fn: SidebarService
}];