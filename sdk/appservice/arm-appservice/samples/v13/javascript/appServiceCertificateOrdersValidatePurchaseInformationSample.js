/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Validate information for a certificate order.
 *
 * @summary Description for Validate information for a certificate order.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/ValidateAppServiceCertificatePurchaseInformationBySubscription.json
 */
async function validateAppServiceCertificatePurchaseInformationBySubscription() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const appServiceCertificateOrder = {
    autoRenew: true,
    certificates: {
      sampleCertName1: {
        keyVaultId:
          "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/microsoft.keyvault/vaults/SamplevaultName",
        keyVaultSecretName: "SampleSecretName1",
      },
      sampleCertName2: {
        keyVaultId:
          "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/microsoft.keyvault/vaults/SamplevaultName",
        keyVaultSecretName: "SampleSecretName2",
      },
    },
    distinguishedName: "CN=SampleCustomDomain.com",
    keySize: 2048,
    location: "Global",
    productType: "StandardDomainValidatedSsl",
    validityInYears: 2,
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceCertificateOrders.validatePurchaseInformation(
    appServiceCertificateOrder
  );
  console.log(result);
}

validateAppServiceCertificatePurchaseInformationBySubscription().catch(console.error);
