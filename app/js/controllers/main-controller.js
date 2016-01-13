'use strict';

function MainController(SidebarService) {
  'ngInject';

  const main = this;

  main.sidebarData = SidebarService.data;
}

export default {
  name: 'MainController',
  fn: MainController
};
