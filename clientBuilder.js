import {ClientBuilder, Client} from '@commercetools/sdk-client-v2';
import {createApiBuilderFromCtpClient} from '@commercetools/platform-sdk';

export const projectKey = 'removed';
const oauthUri = 'https://auth.us-central1.gcp.commercetools.com';
const baseUri = 'https://api.us-central1.gcp.commercetools.com';
const scopes = ['removed'];
const credentials = {
  clientId: 'removed',
  clientSecret: 'removed',
};

const client = new ClientBuilder()
  .defaultClient(baseUri, credentials, oauthUri, projectKey)
  .build();

export const getApiRoot = () => {
  const apiRoot = createApiBuilderFromCtpClient(client);

  return apiRoot;
};
