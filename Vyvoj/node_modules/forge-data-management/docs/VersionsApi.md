# ForgeDataManagement.VersionsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVersion**](VersionsApi.md#getVersion) | **GET** /data/v1/projects/{project_id}/versions/{version_id} | 
[**getVersionItem**](VersionsApi.md#getVersionItem) | **GET** /data/v1/projects/{project_id}/versions/{version_id}/item | 
[**getVersionRefs**](VersionsApi.md#getVersionRefs) | **GET** /data/v1/projects/{project_id}/versions/{version_id}/refs | 
[**getVersionRelationshipsRefs**](VersionsApi.md#getVersionRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/versions/{version_id}/relationships/refs | 
[**postVersionRelationshipsRef**](VersionsApi.md#postVersionRelationshipsRef) | **POST** /data/v1/projects/{project_id}/versions/{version_id}/relationships/refs | 


<a name="getVersion"></a>
# **getVersion**
> VersionResponse getVersion(projectIdversionId, )



Returns the version with the given &#x60;version_id&#x60;. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.VersionsApi();

var projectId = "projectId_example"; // String | the `project id`

var versionId = "versionId_example"; // String | the `version id`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVersion(projectIdversionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **versionId** | **String**| the &#x60;version id&#x60; | 

### Return type

[**VersionResponse**](VersionResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getVersionItem"></a>
# **getVersionItem**
> ItemResponse getVersionItem(projectIdversionId, )



Returns the item the given version is associated with. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.VersionsApi();

var projectId = "projectId_example"; // String | the `project id`

var versionId = "versionId_example"; // String | the `version id`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVersionItem(projectIdversionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **versionId** | **String**| the &#x60;version id&#x60; | 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getVersionRefs"></a>
# **getVersionRefs**
> JsonApiCollection getVersionRefs(projectIdversionId, , opts)



Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;version_id&#x60;. Custom relationships can be established between a version of an item and other resources within the &#39;data&#39; domain service (folders, items, and versions). 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.VersionsApi();

var projectId = "projectId_example"; // String | the `project id`

var versionId = "versionId_example"; // String | the `version id`

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
apiInstance.getVersionRefs(projectIdversionId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **versionId** | **String**| the &#x60;version id&#x60; | 
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

<a name="getVersionRelationshipsRefs"></a>
# **getVersionRelationshipsRefs**
> RefsResponse getVersionRelationshipsRefs(projectIdversionId, , opts)



Returns the custom relationships that are associated to the given &#x60;version_id&#x60;. Custom relationships can be established between a version of an item and other resources within the &#39;data&#39; domain service (folders, items, and versions). 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.VersionsApi();

var projectId = "projectId_example"; // String | the `project id`

var versionId = "versionId_example"; // String | the `version id`

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
apiInstance.getVersionRelationshipsRefs(projectIdversionId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **versionId** | **String**| the &#x60;version id&#x60; | 
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

<a name="postVersionRelationshipsRef"></a>
# **postVersionRelationshipsRef**
> postVersionRelationshipsRef(projectIdversionId, body)



Creates a custom relationship between a version and another resource within the &#39;data&#39; domain service (folder, item, or version). 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.VersionsApi();

var projectId = "projectId_example"; // String | the `project id`

var versionId = "versionId_example"; // String | the `version id`

var body = new ForgeDataManagement.CreateRef(); // CreateRef | describe the ref to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postVersionRelationshipsRef(projectIdversionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **versionId** | **String**| the &#x60;version id&#x60; | 
 **body** | [**CreateRef**](CreateRef.md)| describe the ref to be created | 

### Return type

null (empty response body)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

