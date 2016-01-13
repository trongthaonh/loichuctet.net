'use strict';

function SidebarController(SidebarService) {
  'ngInject';

  const sidebar = this;

  sidebar.data = SidebarService.data;

  sidebar.selectTheTab = function (_tabName) {
    sidebar.data.activeTab = _tabName;
  };

  sidebar.selectTheLayout = function(_layout){
    sidebar.data.selectingLayout = _layout;
  };
}

export default {
  name: 'SidebarController',
  fn: SidebarController
};
