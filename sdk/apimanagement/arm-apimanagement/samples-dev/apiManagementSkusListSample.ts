/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the list of Microsoft.ApiManagement SKUs available for your Subscription.
 *
 * @summary Gets the list of Microsoft.ApiManagement SKUs available for your Subscription.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListSku.json
 */
async function listsAllAvailableResourceSkUs() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.apiManagementSkus.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listsAllAvailableResourceSkUs().catch(console.error);
