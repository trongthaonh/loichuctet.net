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

  sidebar.selectSampleMessage = function(_message){
    sidebar.data.message = _message.replace(/<br *\/?>/gi, '\n');
  };


  sidebar.fileChanged = function(event) {
    sidebar.data.file = event.target.files[0];
  };

  sidebar.cropImage = function(_dataURI){
    sidebar.data.dataURI = _dataURI;
    sidebar.data.userSelectedImage = true;
  };
}

export default {
  name: 'SidebarController',
  fn: SidebarController
};
