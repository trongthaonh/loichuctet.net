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

export default [
  {
    name: 'UserApiService',
    fn: UserApiService
  }
];

