# ForgeDataManagement.ItemsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataHealth**](ItemsApi.md#getDataHealth) | **GET** /data/v1/health | 
[**getItem**](ItemsApi.md#getItem) | **GET** /data/v1/projects/{project_id}/items/{item_id} | 
[**getItemParentFolder**](ItemsApi.md#getItemParentFolder) | **GET** /data/v1/projects/{project_id}/items/{item_id}/parent | 
[**getItemRefs**](ItemsApi.md#getItemRefs) | **GET** /data/v1/projects/{project_id}/items/{item_id}/refs | 
[**getItemRelationshipsRefs**](ItemsApi.md#getItemRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/items/{item_id}/relationships/refs | 
[**getItemTip**](ItemsApi.md#getItemTip) | **GET** /data/v1/projects/{project_id}/items/{item_id}/tip | 
[**getItemVersions**](ItemsApi.md#getItemVersions) | **GET** /data/v1/projects/{project_id}/items/{item_id}/versions | 
[**postItemRelationshipsRef**](ItemsApi.md#postItemRelationshipsRef) | **POST** /data/v1/projects/{project_id}/items/{item_id}/relationships/refs | 


<a name="getDataHealth"></a>
# **getDataHealth**
> HealthResponse getDataHealth()



Returns the health information for the &#x60;data&#x60; domain. The health check assesses the current working status of the &#39;data&#39; domain service. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');

var apiInstance = new ForgeDataManagement.ItemsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDataHealth(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HealthResponse**](HealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getItem"></a>
# **getItem**
> ItemResponse getItem(projectIditemId)



Returns a resource item by ID for any item within a given project. Resource items represent word documents, fusion design files, drawings, spreadsheets, etc. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ItemsApi();

var projectId = "projectId_example"; // String | the `project id`

var itemId = "itemId_example"; // String | the `item id`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItem(projectIditemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **itemId** | **String**| the &#x60;item id&#x60; | 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getItemParentFolder"></a>
# **getItemParentFolder**
> FolderResponse getItemParentFolder(projectIditemId)



Returns the \&quot;parent\&quot; folder for the given item. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ItemsApi();

var projectId = "projectId_example"; // String | the `project id`

var itemId = "itemId_example"; // String | the `item id`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemParentFolder(projectIditemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **itemId** | **String**| the &#x60;item id&#x60; | 

### Return type

[**FolderResponse**](FolderResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getItemRefs"></a>
# **getItemRefs**
> JsonApiCollection getItemRefs(projectIditemId, opts)



Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;item_id&#x60;. Custom relationships can be established between an item and other resources within the &#39;data&#39; domain service (folders, items, and versions). 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ItemsApi();

var projectId = "projectId_example"; // String | the `project id`

var itemId = "itemId_example"; // String | the `item id`

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
apiInstance.getItemRefs(projectIditemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **itemId** | **String**| the &#x60;item id&#x60; | 
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

<a name="getItemRelationshipsRefs"></a>
# **getItemRelationshipsRefs**
> RefsResponse getItemRelationshipsRefs(projectIditemId, opts)



Returns the custom relationships that are associated to the given &#x60;item_id&#x60;. Custom relationships can be established between an item and other resources within the &#39;data&#39; domain service (folders, items, and versions). 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ItemsApi();

var projectId = "projectId_example"; // String | the `project id`

var itemId = "itemId_example"; // String | the `item id`

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
apiInstance.getItemRelationshipsRefs(projectIditemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **itemId** | **String**| the &#x60;item id&#x60; | 
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

<a name="getItemTip"></a>
# **getItemTip**
> VersionResponse getItemTip(projectIditemId)



Returns the \&quot;tip\&quot; version for the given item. Multiple versions of a resource item can be uploaded in a project. The tip version is the most recent one. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ItemsApi();

var projectId = "projectId_example"; // String | the `project id`

var itemId = "itemId_example"; // String | the `item id`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemTip(projectIditemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **itemId** | **String**| the &#x60;item id&#x60; | 

### Return type

[**VersionResponse**](VersionResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getItemVersions"></a>
# **getItemVersions**
> VersionsResponse getItemVersions(projectIditemId, opts)



Returns versions for the given item. Multiple versions of a resource item can be uploaded in a project. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ItemsApi();

var projectId = "projectId_example"; // String | the `project id`

var itemId = "itemId_example"; // String | the `item id`

var opts = { 
  'filterType': ["filterType_example"], // [String] | filter by the `type` of the `ref` target
  'filterId': ["filterId_example"], // [String] | filter by the `id` of the `ref` target
  'filterExtensionType': ["filterExtensionType_example"] // [String] | filter by the extension type
  'filterVersionNumber': [56], // [Integer] | filter by `versionNumber`
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
apiInstance.getItemVersions(projectIditemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **itemId** | **String**| the &#x60;item id&#x60; | 
 **filterType** | [**[String]**](String.md)| filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 
 **filterVersionNumber** | [**[Integer]**](Integer.md)| filter by &#x60;versionNumber&#x60; | [optional] 
 **pageNumber** | **Integer**| specify the page number | [optional] 
 **pageLimit** | **Integer**| specify the maximal number of elements per page | [optional] 

### Return type

[**VersionsResponse**](VersionsResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postItemRelationshipsRef"></a>
# **postItemRelationshipsRef**
> postItemRelationshipsRef(projectIditemIdbody)



Creates a custom relationship between an item and another resource within the &#39;data&#39; domain service (folder, item, or version). 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ItemsApi();

var projectId = "projectId_example"; // String | the `project id`

var itemId = "itemId_example"; // String | the `item id`

var body = new ForgeDataManagement.CreateRef(); // CreateRef | describe the ref to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postItemRelationshipsRef(projectIditemIdbody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **itemId** | **String**| the &#x60;item id&#x60; | 
 **body** | [**CreateRef**](CreateRef.md)| describe the ref to be created | 

### Return type

null (empty response body)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

