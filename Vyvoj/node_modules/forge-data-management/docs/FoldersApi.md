# ForgeDataManagement.FoldersApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFolder**](FoldersApi.md#getFolder) | **GET** /data/v1/projects/{project_id}/folders/{folder_id} | 
[**getFolderContents**](FoldersApi.md#getFolderContents) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/contents | 
[**getFolderParent**](FoldersApi.md#getFolderParent) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/parent | 
[**getFolderRefs**](FoldersApi.md#getFolderRefs) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/refs | 
[**getFolderRelationshipsRefs**](FoldersApi.md#getFolderRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs | 
[**postFolderRelationshipsRef**](FoldersApi.md#postFolderRelationshipsRef) | **POST** /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs | 


<a name="getFolder"></a>
# **getFolder**
> FolderResponse getFolder(projectIdfolderId, )



Returns the folder by ID for any folder within a given project. All folders or sub-folders within a project are associated with their own unique ID, including the root folder. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.FoldersApi();

var projectId = "projectId_example"; // String | the `project id`

var folderId = "folderId_example"; // String | the `folder id`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolder(projectIdfolderId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 

### Return type

[**FolderResponse**](FolderResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getFolderContents"></a>
# **getFolderContents**
> JsonApiCollection getFolderContents(projectIdfolderId, , opts)



Returns a collection of items and folders within a folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.FoldersApi();

var projectId = "projectId_example"; // String | the `project id`

var folderId = "folderId_example"; // String | the `folder id`

var opts = { 
  'filterType': ["filterType_example"], // [String] | filter by the `type` of the `ref` target
  'filterId': ["filterId_example"], // [String] | filter by the `id` of the `ref` target
  'filterExtensionType': ["filterExtensionType_example"] // [String] | filter by the extension type
  'pageNumber': 56, // Integer | specify the page number
  'pageLimit': 56 // Integer | specify the maximal number of elements per page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolderContents(projectIdfolderId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 
 **filterType** | [**[String]**](String.md)| filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 
 **pageNumber** | **Integer**| specify the page number | [optional] 
 **pageLimit** | **Integer**| specify the maximal number of elements per page | [optional] 

### Return type

[**JsonApiCollection**](JsonApiCollection.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getFolderParent"></a>
# **getFolderParent**
> FolderResponse getFolderParent(projectIdfolderId, )



Returns the parent folder (if it exists). In a project, subfolders and resource items are stored under a folder except the root folder which does not have a parent of its own. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.FoldersApi();

var projectId = "projectId_example"; // String | the `project id`

var folderId = "folderId_example"; // String | the `folder id`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolderParent(projectIdfolderId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 

### Return type

[**FolderResponse**](FolderResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getFolderRefs"></a>
# **getFolderRefs**
> JsonApiCollection getFolderRefs(projectIdfolderId, , opts)



Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;folder_id&#x60;. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions). 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.FoldersApi();

var projectId = "projectId_example"; // String | the `project id`

var folderId = "folderId_example"; // String | the `folder id`

var opts = { 
  'filterType': ["filterType_example"], // [String] | filter by the `type` of the `ref` target
  'filterId': ["filterId_example"], // [String] | filter by the `id` of the `ref` target
  'filterExtensionType': ["filterExtensionType_example"] // [String] | filter by the extension type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolderRefs(projectIdfolderId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 
 **filterType** | [**[String]**](String.md)| filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 

### Return type

[**JsonApiCollection**](JsonApiCollection.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getFolderRelationshipsRefs"></a>
# **getFolderRelationshipsRefs**
> RefsResponse getFolderRelationshipsRefs(projectIdfolderId, , opts)



Returns the custom relationships that are associated to the given &#x60;folder_id&#x60;. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions). 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.FoldersApi();

var projectId = "projectId_example"; // String | the `project id`

var folderId = "folderId_example"; // String | the `folder id`

var opts = { 
  'filterType': ["filterType_example"], // [String] | filter by the `type` of the `ref` target
  'filterId': ["filterId_example"], // [String] | filter by the `id` of the `ref` target
  'filterRefType': ["filterRefType_example"], // [String] | filter by `refType`
  'filterDirection': "filterDirection_example", // String | filter by the direction of the reference
  'filterExtensionType': ["filterExtensionType_example"] // [String] | filter by the extension type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolderRelationshipsRefs(projectIdfolderId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 
 **filterType** | [**[String]**](String.md)| filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterRefType** | [**[String]**](String.md)| filter by &#x60;refType&#x60; | [optional] 
 **filterDirection** | **String**| filter by the direction of the reference | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 

### Return type

[**RefsResponse**](RefsResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postFolderRelationshipsRef"></a>
# **postFolderRelationshipsRef**
> postFolderRelationshipsRef(projectIdfolderId, body)



Creates a custom relationship between a folder and another resource within the &#39;data&#39; domain service (folder, item, or version). 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.FoldersApi();

var projectId = "projectId_example"; // String | the `project id`

var folderId = "folderId_example"; // String | the `folder id`

var body = new ForgeDataManagement.CreateRef(); // CreateRef | describe the ref to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postFolderRelationshipsRef(projectIdfolderId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 
 **body** | [**CreateRef**](CreateRef.md)| describe the ref to be created | 

### Return type

null (empty response body)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

