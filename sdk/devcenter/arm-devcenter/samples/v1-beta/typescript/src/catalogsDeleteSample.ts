/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes a catalog resource.
 *
 * @summary Deletes a catalog resource.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/Catalogs_Delete.json
 */
async function catalogsDelete() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "rg1";
  const devCenterName = "Contoso";
  const catalogName = "{catalogName}";
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.catalogs.beginDeleteAndWait(
    resourceGroupName,
    devCenterName,
    catalogName
  );
  console.log(result);
}

catalogsDelete().catch(console.error);
