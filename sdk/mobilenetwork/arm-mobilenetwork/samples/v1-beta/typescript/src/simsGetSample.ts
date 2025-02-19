/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets information about the specified SIM.
 *
 * @summary Gets information about the specified SIM.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/SimGet.json
 */
async function getSim() {
  const subscriptionId = "subid";
  const resourceGroupName = "testResourceGroupName";
  const simGroupName = "testSimGroup";
  const simName = "testSimName";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.sims.get(
    resourceGroupName,
    simGroupName,
    simName
  );
  console.log(result);
}

getSim().catch(console.error);
