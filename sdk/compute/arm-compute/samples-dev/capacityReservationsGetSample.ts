/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CapacityReservationsGetOptionalParams,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The operation that retrieves information about the capacity reservation.
 *
 * @summary The operation that retrieves information about the capacity reservation.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/capacityReservationExamples/CapacityReservation_Get.json
 */
async function getACapacityReservation() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "myResourceGroup";
  const capacityReservationGroupName = "myCapacityReservationGroup";
  const capacityReservationName = "myCapacityReservation";
  const expand = "instanceView";
  const options: CapacityReservationsGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.capacityReservations.get(
    resourceGroupName,
    capacityReservationGroupName,
    capacityReservationName,
    options
  );
  console.log(result);
}

getACapacityReservation().catch(console.error);
