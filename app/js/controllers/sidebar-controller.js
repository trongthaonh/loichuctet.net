'use strict';

function SidebarController($scope, SidebarService) {
  'ngInject';

  $scope.layoutList = [
    'images/layout-thiep-01.jpg',
    'images/layout-thiep-02.jpg',
    'images/layout-thiep-03.jpg',
    'images/layout-thiep-04.jpg'
  ];

  $scope.selectTheLayout = function(_layout){
    SidebarService.setSelectingLayout(_layout);
    //SidebarService.setSelectingLayout(_layout);
  };

  $scope.activeTab = "layout";
  $scope.activeTheTab = function(_tabName){
    $scope.activeTab = _tabName;
  }
}

export default {
  name: 'SidebarController',
  fn: SidebarController
};
