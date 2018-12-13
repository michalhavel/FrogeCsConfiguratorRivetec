# ForgeDataManagement.HubsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHub**](HubsApi.md#getHub) | **GET** /project/v1/hubs/{hub_id} | 
[**getHubProjects**](HubsApi.md#getHubProjects) | **GET** /project/v1/hubs/{hub_id}/projects | 
[**getHubs**](HubsApi.md#getHubs) | **GET** /project/v1/hubs | 


<a name="getHub"></a>
# **getHub**
> HubResponse getHub(hubId, )



Returns data on a specific &#x60;hub_id&#x60;. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.HubsApi();

var hubId = "hubId_example"; // String | the `hub id` for the current operation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHub(hubId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hubId** | **String**| the &#x60;hub id&#x60; for the current operation | 

### Return type

[**HubResponse**](HubResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getHubProjects"></a>
# **getHubProjects**
> ProjectsResponse getHubProjects(hubId, , opts)



Returns a collection of projects for a given &#x60;hub_id&#x60;. A project represents an A360 project or a BIM 360 project which is set up under an A360 hub or BIM 360 account, respectively. Within a hub or an account, multiple projects can be created to be used. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.HubsApi();

var hubId = "hubId_example"; // String | the `hub id` for the current operation

var opts = { 
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
apiInstance.getHubProjects(hubId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hubId** | **String**| the &#x60;hub id&#x60; for the current operation | 
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 

### Return type

[**ProjectsResponse**](ProjectsResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getHubs"></a>
# **getHubs**
> HubsResponse getHubs(opts)



Returns a collection of accessible hubs for this member. A Hub represents an A360 Team/Personal hub or a BIM 360 account. 

### Example
```javascript
var ForgeDataManagement = require('forge-data-management');
var defaultClient = ForgeDataManagement.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2_access_code
var oauth2_access_code = defaultClient.authentications['oauth2_access_code'];
oauth2_access_code.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ForgeDataManagement.HubsApi();

var opts = { 
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
apiInstance.getHubs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 

### Return type

[**HubsResponse**](HubsResponse.md)

### Authorization

[oauth2_access_code](../README.md#oauth2_access_code)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

