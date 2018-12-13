
# This package is now deprecated, please use the official [SDK](https://www.npmjs.com/package/forge-apis)

[![build status](https://api.travis-ci.org/cyrillef/models.autodesk.io.png)](https://travis-ci.org/cyrillef/models.autodesk.io)
[![Node.js](https://img.shields.io/badge/Node.js-5.11.1-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-3.9.3-blue.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

*Forge API*:
[![oAuth2](https://img.shields.io/badge/oAuth2-v1-green.svg)](http://developer-autodesk.github.io/)
[![Data-Management](https://img.shields.io/badge/Data%20Management-v2-green.svg)](http://developer-autodesk.github.io/)
[![OSS](https://img.shields.io/badge/OSS-v2-green.svg)](http://developer-autodesk.github.io/)
[![Model-Derivative](https://img.shields.io/badge/Model%20Derivative-v2-green.svg)](http://developer-autodesk.github.io/)
[![Viewer](https://img.shields.io/badge/Forge%20Viewer-v2.10-green.svg)](http://developer-autodesk.github.io/)


# forge-data-management
Asynchronous Javascript/Node.js library for the Autodesk Forge Data Management API.

This SDK was generated from YAML using a modified version of the [Swagger tools](https://github.com/swagger-api/).
Modified version located [here](https://github.com/cyrillef/swagger-codegen).

Samples using this SDKs available [here](https://github.com/Autodesk-Forge).


## Installation

#### npm
```shell
npm install forge-data-management --save
```

#### For browser
The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.


## Getting Started
Please follow the [installation](#installation) instruction and execute the following JS code:

This libray can either use callbacks ot Promises. Do not provide a callback parameter to use Promises.

#### callback version
```javascript
var ForgeDataManagement =require ('forge-data-management') ;

var defaultClient =ForgeDataManagement.ApiClient.instance ;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code =defaultClient.authentications ['oauth2_access_code'] ;
oauth2_access_code.accessToken ="YOUR ACCESS TOKEN" ;

var api =new ForgeDataManagement.FoldersApi()
 ;
var projectId ="projectId_example" ; // {String} the `project id`
 ;
var folderId ="folderId_example" ; // {String} the `folder id`


var callback =function (error, data, response) {
  if ( error ) {
    console.error (error) ;
  } else {
    console.log ('API called successfully. Returned data: ' + data) ;
  }
};
api.getFolder(projectIdfolderId, , callback) ;

```

#### Promise version
```javascript
var ForgeDataManagement =require ('forge-data-management') ;

var defaultClient =ForgeDataManagement.ApiClient.instance ;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code =defaultClient.authentications ['oauth2_access_code'] ;
oauth2_access_code.accessToken ="YOUR ACCESS TOKEN" ;

var api =new ForgeDataManagement.FoldersApi()
 ;
var projectId ="projectId_example" ; // {String} the `project id`
 ;
var folderId ="folderId_example" ; // {String} the `folder id`


api.getFolder(projectIdfolderId, ).then (function (data) {
  console.log ('API called successfully. Returned data: ' + data) ;
}, function (error) {
  console.error (error) ;
}) ;

```


## Documentation for API Endpoints

All URIs are relative to *https://developer.api.autodesk.com/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ForgeDataManagement.FoldersApi* | [**getFolder**](docs/FoldersApi.md#getFolder) | **GET** /data/v1/projects/{project_id}/folders/{folder_id} | 
*ForgeDataManagement.FoldersApi* | [**getFolderContents**](docs/FoldersApi.md#getFolderContents) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/contents | 
*ForgeDataManagement.FoldersApi* | [**getFolderParent**](docs/FoldersApi.md#getFolderParent) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/parent | 
*ForgeDataManagement.FoldersApi* | [**getFolderRefs**](docs/FoldersApi.md#getFolderRefs) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/refs | 
*ForgeDataManagement.FoldersApi* | [**getFolderRelationshipsRefs**](docs/FoldersApi.md#getFolderRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs | 
*ForgeDataManagement.FoldersApi* | [**postFolderRelationshipsRef**](docs/FoldersApi.md#postFolderRelationshipsRef) | **POST** /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs | 
*ForgeDataManagement.HubsApi* | [**getHub**](docs/HubsApi.md#getHub) | **GET** /project/v1/hubs/{hub_id} | 
*ForgeDataManagement.HubsApi* | [**getHubProjects**](docs/HubsApi.md#getHubProjects) | **GET** /project/v1/hubs/{hub_id}/projects | 
*ForgeDataManagement.HubsApi* | [**getHubs**](docs/HubsApi.md#getHubs) | **GET** /project/v1/hubs | 
*ForgeDataManagement.ItemsApi* | [**getDataHealth**](docs/ItemsApi.md#getDataHealth) | **GET** /data/v1/health | 
*ForgeDataManagement.ItemsApi* | [**getItem**](docs/ItemsApi.md#getItem) | **GET** /data/v1/projects/{project_id}/items/{item_id} | 
*ForgeDataManagement.ItemsApi* | [**getItemParentFolder**](docs/ItemsApi.md#getItemParentFolder) | **GET** /data/v1/projects/{project_id}/items/{item_id}/parent | 
*ForgeDataManagement.ItemsApi* | [**getItemRefs**](docs/ItemsApi.md#getItemRefs) | **GET** /data/v1/projects/{project_id}/items/{item_id}/refs | 
*ForgeDataManagement.ItemsApi* | [**getItemRelationshipsRefs**](docs/ItemsApi.md#getItemRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/items/{item_id}/relationships/refs | 
*ForgeDataManagement.ItemsApi* | [**getItemTip**](docs/ItemsApi.md#getItemTip) | **GET** /data/v1/projects/{project_id}/items/{item_id}/tip | 
*ForgeDataManagement.ItemsApi* | [**getItemVersions**](docs/ItemsApi.md#getItemVersions) | **GET** /data/v1/projects/{project_id}/items/{item_id}/versions | 
*ForgeDataManagement.ItemsApi* | [**postItemRelationshipsRef**](docs/ItemsApi.md#postItemRelationshipsRef) | **POST** /data/v1/projects/{project_id}/items/{item_id}/relationships/refs | 
*ForgeDataManagement.ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getProject) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id} | 
*ForgeDataManagement.ProjectsApi* | [**getProjectHealth**](docs/ProjectsApi.md#getProjectHealth) | **GET** /project/v1/health | 
*ForgeDataManagement.ProjectsApi* | [**getProjectHub**](docs/ProjectsApi.md#getProjectHub) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id}/hub | 
*ForgeDataManagement.ProjectsApi* | [**postItem**](docs/ProjectsApi.md#postItem) | **POST** /data/v1/projects/{project_id}/items | 
*ForgeDataManagement.ProjectsApi* | [**postStorage**](docs/ProjectsApi.md#postStorage) | **POST** /data/v1/projects/{project_id}/storage | 
*ForgeDataManagement.ProjectsApi* | [**postVersion**](docs/ProjectsApi.md#postVersion) | **POST** /data/v1/projects/{project_id}/versions | 
*ForgeDataManagement.VersionsApi* | [**getVersion**](docs/VersionsApi.md#getVersion) | **GET** /data/v1/projects/{project_id}/versions/{version_id} | 
*ForgeDataManagement.VersionsApi* | [**getVersionItem**](docs/VersionsApi.md#getVersionItem) | **GET** /data/v1/projects/{project_id}/versions/{version_id}/item | 
*ForgeDataManagement.VersionsApi* | [**getVersionRefs**](docs/VersionsApi.md#getVersionRefs) | **GET** /data/v1/projects/{project_id}/versions/{version_id}/refs | 
*ForgeDataManagement.VersionsApi* | [**getVersionRelationshipsRefs**](docs/VersionsApi.md#getVersionRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/versions/{version_id}/relationships/refs | 
*ForgeDataManagement.VersionsApi* | [**postVersionRelationshipsRef**](docs/VersionsApi.md#postVersionRelationshipsRef) | **POST** /data/v1/projects/{project_id}/versions/{version_id}/relationships/refs | 



## Documentation for Models

 - [ForgeDataManagement.BadInputResponse](docs/BadInputResponse.md)
 - [ForgeDataManagement.BaseAttributesCreatedUpdated](docs/BaseAttributesCreatedUpdated.md)
 - [ForgeDataManagement.BaseAttributesCreatedUpdatedAttributes](docs/BaseAttributesCreatedUpdatedAttributes.md)
 - [ForgeDataManagement.BaseAttributesExtensionObject](docs/BaseAttributesExtensionObject.md)
 - [ForgeDataManagement.ConflictResponse](docs/ConflictResponse.md)
 - [ForgeDataManagement.CreateItem](docs/CreateItem.md)
 - [ForgeDataManagement.CreateRef](docs/CreateRef.md)
 - [ForgeDataManagement.CreateStorage](docs/CreateStorage.md)
 - [ForgeDataManagement.CreateVersion](docs/CreateVersion.md)
 - [ForgeDataManagement.Folder](docs/Folder.md)
 - [ForgeDataManagement.FolderResponse](docs/FolderResponse.md)
 - [ForgeDataManagement.ForbiddenResponse](docs/ForbiddenResponse.md)
 - [ForgeDataManagement.Health](docs/Health.md)
 - [ForgeDataManagement.HealthResponse](docs/HealthResponse.md)
 - [ForgeDataManagement.Hub](docs/Hub.md)
 - [ForgeDataManagement.HubResponse](docs/HubResponse.md)
 - [ForgeDataManagement.HubsResponse](docs/HubsResponse.md)
 - [ForgeDataManagement.Item](docs/Item.md)
 - [ForgeDataManagement.ItemCreatedResponse](docs/ItemCreatedResponse.md)
 - [ForgeDataManagement.ItemResponse](docs/ItemResponse.md)
 - [ForgeDataManagement.JsonApiAttributes](docs/JsonApiAttributes.md)
 - [ForgeDataManagement.JsonApiCollection](docs/JsonApiCollection.md)
 - [ForgeDataManagement.JsonApiDocument](docs/JsonApiDocument.md)
 - [ForgeDataManagement.JsonApiDocumentBase](docs/JsonApiDocumentBase.md)
 - [ForgeDataManagement.JsonApiError](docs/JsonApiError.md)
 - [ForgeDataManagement.JsonApiLink](docs/JsonApiLink.md)
 - [ForgeDataManagement.JsonApiLinks](docs/JsonApiLinks.md)
 - [ForgeDataManagement.JsonApiLinksPaging](docs/JsonApiLinksPaging.md)
 - [ForgeDataManagement.JsonApiLinksRelated](docs/JsonApiLinksRelated.md)
 - [ForgeDataManagement.JsonApiLinksSelf](docs/JsonApiLinksSelf.md)
 - [ForgeDataManagement.JsonApiMeta](docs/JsonApiMeta.md)
 - [ForgeDataManagement.JsonApiMetaLink](docs/JsonApiMetaLink.md)
 - [ForgeDataManagement.JsonApiRelationships](docs/JsonApiRelationships.md)
 - [ForgeDataManagement.JsonApiRelationshipsLinksExternalResource](docs/JsonApiRelationshipsLinksExternalResource.md)
 - [ForgeDataManagement.JsonApiRelationshipsLinksInternal](docs/JsonApiRelationshipsLinksInternal.md)
 - [ForgeDataManagement.JsonApiRelationshipsLinksInternalResource](docs/JsonApiRelationshipsLinksInternalResource.md)
 - [ForgeDataManagement.JsonApiRelationshipsLinksRefs](docs/JsonApiRelationshipsLinksRefs.md)
 - [ForgeDataManagement.JsonApiRelationshipsLinksRefsLinks](docs/JsonApiRelationshipsLinksRefsLinks.md)
 - [ForgeDataManagement.JsonApiResource](docs/JsonApiResource.md)
 - [ForgeDataManagement.JsonApiTypeId](docs/JsonApiTypeId.md)
 - [ForgeDataManagement.JsonApiVersion](docs/JsonApiVersion.md)
 - [ForgeDataManagement.JsonApiVersionJsonapi](docs/JsonApiVersionJsonapi.md)
 - [ForgeDataManagement.NotFoundResponse](docs/NotFoundResponse.md)
 - [ForgeDataManagement.Project](docs/Project.md)
 - [ForgeDataManagement.ProjectResponse](docs/ProjectResponse.md)
 - [ForgeDataManagement.ProjectsResponse](docs/ProjectsResponse.md)
 - [ForgeDataManagement.RefsResponse](docs/RefsResponse.md)
 - [ForgeDataManagement.RelRef](docs/RelRef.md)
 - [ForgeDataManagement.Storage](docs/Storage.md)
 - [ForgeDataManagement.StorageCreatedResponse](docs/StorageCreatedResponse.md)
 - [ForgeDataManagement.Version](docs/Version.md)
 - [ForgeDataManagement.VersionCreatedResponse](docs/VersionCreatedResponse.md)
 - [ForgeDataManagement.VersionResponse](docs/VersionResponse.md)
 - [ForgeDataManagement.VersionsResponse](docs/VersionsResponse.md)



## Documentation for Authorization


### oauth2_access_code

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://developer.api.autodesk.com/authentication/v1/authorize
- **Scopes**: 
  - data:read: The application will be able to read the end user’s data within the Autodesk ecosystem.
  - data:write: The application will be able to create, update, and delete data on behalf of the end user within the Autodesk ecosystem.
  - data:create: The application will be able to create data on behalf of the end user within the Autodesk ecosystem.
  - data:search: The application will be able to search the end user’s data within the Autodesk ecosystem.
  - bucket:create: The application will be able to create an OSS bucket it will own.
  - bucket:read: The application will be able to read the metadata and list contents for OSS buckets that it has access to.
  - bucket:update: The application will be able to set permissions and entitlements for OSS buckets that it has permission to modify.
  - bucket:delete: The application will be able to delete a bucket that it has permission to delete.
  - code:all: The application will be able to author and execute code on behalf of the end user (e.g., scripts processed by the Design Automation API).
  - account:read: For Product APIs, the application will be able to read the account data the end user has entitlements to.
  - account:write: For Product APIs, the application will be able to update the account data the end user has entitlements to.
  - user-profile:read: The application will be able to read the end user’s profile data.

### oauth2_application

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - data:read: The application will be able to read the end user’s data within the Autodesk ecosystem.
  - data:write: The application will be able to create, update, and delete data on behalf of the end user within the Autodesk ecosystem.
  - data:create: The application will be able to create data on behalf of the end user within the Autodesk ecosystem.
  - data:search: The application will be able to search the end user’s data within the Autodesk ecosystem.
  - bucket:create: The application will be able to create an OSS bucket it will own.
  - bucket:read: The application will be able to read the metadata and list contents for OSS buckets that it has access to.
  - bucket:update: The application will be able to set permissions and entitlements for OSS buckets that it has permission to modify.
  - bucket:delete: The application will be able to delete a bucket that it has permission to delete.
  - code:all: The application will be able to author and execute code on behalf of the end user (e.g., scripts processed by the Design Automation API).
  - account:read: For Product APIs, the application will be able to read the account data the end user has entitlements to.
  - account:write: For Product APIs, the application will be able to update the account data the end user has entitlements to.
  - user-profile:read: The application will be able to read the end user’s profile data.



## Documentation & Support
For more information, please visit [https://developer.autodesk.com/en/docs/data/v2/](https://developer.autodesk.com/en/docs/data/v2/)

For support, please use [http://stackoverflow.com/questions/tagged/autodesk-data-management](http://stackoverflow.com/questions/tagged/autodesk-data-management)

--------

## License

This SDK is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.


