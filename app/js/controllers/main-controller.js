'use strict';

function MainController(SidebarService, _) {
  'ngInject';

  const main = this;

  main.sidebarData = SidebarService.data;

  main.fileChanged = function(event) {
    main.file = event.target.files[0];
  };

  main.handle = function handle(dataURL) {
    // Do your uploading here
  };
}

export default {
  name: 'MainController',
  fn: MainController
};
