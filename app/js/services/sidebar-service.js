'use strict';

function SidebarService() {
  'ngInject';

  const service = {};

  service.selectingLayout = '';

  //service.setSelectingLayout = function(_layout){
  //  selectingLayout = _layout;
  //};
  //
  //service.getSelectingLayout = function(){
  //  return selectingLayout;
  //};

  return service;
}

export default {
  name: 'SidebarService',
  fn: SidebarService
};