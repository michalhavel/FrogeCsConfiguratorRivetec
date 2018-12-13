# ForgeDataManagement.ProjectsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProject**](ProjectsApi.md#getProject) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id} | 
[**getProjectHealth**](ProjectsApi.md#getProjectHealth) | **GET** /project/v1/health | 
[**getProjectHub**](ProjectsApi.md#getProjectHub) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id}/hub | 
[**postItem**](ProjectsApi.md#postItem) | **POST** /data/v1/projects/{project_id}/items | 
[**postStorage**](ProjectsApi.md#postStorage) | **POST** /data/v1/projects/{project_id}/storage | 
[**postVersion**](ProjectsApi.md#postVersion) | **POST** /data/v1/projects/{project_id}/versions | 


<a name="getProject"></a>
# **getProject**
> ProjectResponse getProject(hubId, projectId)



Returns a project for a given &#x60;project_id&#x60;. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ProjectsApi();

var hubId = "hubId_example"; // String | the `hub id` for the current operation

var projectId = "projectId_example"; // String | the `project id`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProject(hubId, projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hubId** | **String**| the &#x60;hub id&#x60; for the current operation | 
 **projectId** | **String**| the &#x60;project id&#x60; | 

### Return type

[**ProjectResponse**](ProjectResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getProjectHealth"></a>
# **getProjectHealth**
> HealthResponse getProjectHealth()



Returns health information for the &#x60;project&#x60; domain. The health check assesses the current working status of the &#39;project&#39; domain service. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');

var apiInstance = new ForgeDataManagement.ProjectsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjectHealth(callback);
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

<a name="getProjectHub"></a>
# **getProjectHub**
> HubResponse getProjectHub(hubId, projectId)



Returns the hub for a given &#x60;project_id&#x60;. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ProjectsApi();

var hubId = "hubId_example"; // String | the `hub id` for the current operation

var projectId = "projectId_example"; // String | the `project id`


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjectHub(hubId, projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hubId** | **String**| the &#x60;hub id&#x60; for the current operation | 
 **projectId** | **String**| the &#x60;project id&#x60; | 

### Return type

[**HubResponse**](HubResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postItem"></a>
# **postItem**
> ItemCreatedResponse postItem(projectIdbody)



Creates a new item in the &#39;data&#39; domain service. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ProjectsApi();

var projectId = "projectId_example"; // String | the `project id`

var body = new ForgeDataManagement.CreateItem(); // CreateItem | describe the item to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postItem(projectIdbody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **body** | [**CreateItem**](CreateItem.md)| describe the item to be created | 

### Return type

[**ItemCreatedResponse**](ItemCreatedResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postStorage"></a>
# **postStorage**
> StorageCreatedResponse postStorage(projectIdbody)



Creates a storage location in the OSS where data can be uploaded to. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ProjectsApi();

var projectId = "projectId_example"; // String | the `project id`

var body = new ForgeDataManagement.CreateStorage(); // CreateStorage | describe the file the storage is created for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postStorage(projectIdbody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **body** | [**CreateStorage**](CreateStorage.md)| describe the file the storage is created for | 

### Return type

[**StorageCreatedResponse**](StorageCreatedResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postVersion"></a>
# **postVersion**
> VersionCreatedResponse postVersion(projectIdbody)



Creates a new version of an item in the &#39;data&#39; domain service. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.ProjectsApi();

var projectId = "projectId_example"; // String | the `project id`

var body = new ForgeDataManagement.CreateVersion(); // CreateVersion | describe the version to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postVersion(projectIdbody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **body** | [**CreateVersion**](CreateVersion.md)| describe the version to be created | 

### Return type

[**VersionCreatedResponse**](VersionCreatedResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

