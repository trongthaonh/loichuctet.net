'use strict';

function UserApiService($resource, AppSettings) {
  'ngInject';

  return $resource(
    AppSettings.apiUrl + "/FacebookUsers/:id",{ id: "@id" },
    {
      "create": {
        url: AppSettings.apiUrl + "/FacebookUsers",
        method: "POST"
      },
      "upsert": {
        url: AppSettings.apiUrl + "/FacebookUsers",
        method: "PUT"
      },
      "updateAll": {
        url: AppSettings.apiUrl + "/FacebookUsers/update",
        method: "POST"
      },
      "find": {
        isArray: true,
        url: AppSettings.apiUrl + "/FacebookUsers",
        method: "GET"
      },
      "findById": {
        url: AppSettings.apiUrl + "/FacebookUsers/:id",
        method: "GET"
      },
      "exists": {
        url: AppSettings.apiUrl + "/FacebookUsers/:id/exists",
        method: "GET"
      },
      "deleteById": {
        url: AppSettings.apiUrl + "/FacebookUsers/:id",
        method: "DELETE"
      },
      "count": {
        url: AppSettings.apiUrl + "/FacebookUsers/count",
        method: "GET"
      }
    }
  );
}


function ContainerApiService($resource, AppSettings) {
  'ngInject';

  return $resource(
    AppSettings.apiUrl + "/containers/:id",{ id: "@id" },
    {
      "getContainers": {
        isArray: true,
        url: AppSettings.apiUrl + "/containers",
        method: "GET"
      },
      "createContainer": {
        url: AppSettings.apiUrl + "/containers",
        method: "POST"
      },
      "destroyContainer": {
        url: AppSettings.apiUrl + "/containers/:container",
        method: "DELETE"
      },
      "getContainer": {
        url: AppSettings.apiUrl + "/containers/:container",
        method: "GET"
      },
      "getFiles": {
        isArray: true,
        url: AppSettings.apiUrl + "/containers/:container/files",
        method: "GET"
      },
      "getFile": {
        url: AppSettings.apiUrl + "/containers/:container/files/:file",
        method: "GET"
      },
      "removeFile": {
        url: AppSettings.apiUrl + "/containers/:container/files/:file",
        method: "DELETE"
      },
      "upload": {
        url: AppSettings.apiUrl + "/containers/:container/upload",
        method: "POST"
      },
      "download": {
        url: AppSettings.apiUrl + "/containers/:container/download/:file",
        method: "GET"
      }
    }
  );
}

export default [
  {
    name: 'UserApiService',
    fn: UserApiService
  },
  {
    name: 'ContainerApiService',
    fn: ContainerApiService
  }
];

