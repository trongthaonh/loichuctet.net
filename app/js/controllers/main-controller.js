'use strict';

function MainController($scope, SidebarService) {
  'ngInject';

  $scope.selectingLayout = SidebarService.getSelectingLayout();
}

export default {
  name: 'MainController',
  fn: MainController
};
