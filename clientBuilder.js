import {ClientBuilder} from '@commercetools/sdk-client-v2';
import {createApiBuilderFromCtpClient} from '@commercetools/platform-sdk';

export const projectKey = ['demo'];
const oauthUri = 'https://auth.europe-west1.gcp.commercetools.com';
const baseUri = 'https://api.europe-west1.gcp.commercetools.com';

const scopes = ['removed'];
const credentials = {
  clientId: ['removed'],
  clientSecret: ['removed'],
};

const client = new ClientBuilder()
  .defaultClient(baseUri, credentials, oauthUri, projectKey)
  .build();

export const getApiRoot = () => {
  const apiRoot = createApiBuilderFromCtpClient(client);

  return apiRoot;
};
