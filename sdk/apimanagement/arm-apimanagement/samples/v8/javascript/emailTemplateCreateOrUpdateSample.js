/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates an Email Template.
 *
 * @summary Updates an Email Template.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateTemplate.json
 */
async function apiManagementCreateTemplate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const templateName = "newIssueNotificationMessage";
  const parameters = {
    subject: "Your request for $IssueName was successfully received.",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.emailTemplate.createOrUpdate(
    resourceGroupName,
    serviceName,
    templateName,
    parameters
  );
  console.log(result);
}

apiManagementCreateTemplate().catch(console.error);
