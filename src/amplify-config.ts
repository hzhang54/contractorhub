// src/amplify-config.ts
export const amplifyConfig = {
  Auth: {
    region: process.env.NEXT_PUBLIC_region || 'us-east-1',
    userPoolId: process.env.NEXT_PUBLIC_userpoolId,
    userPoolWebClientId: process.env.NEXT_PUBLIC_userPoolWebClientId,
    identityPoolId: process.env.NEXT_PUBLIC_identityPoolId,
  },
    Storage: {
    AWSS3: {
      bucket: process.env.NEXT_PUBLIC_bucket,
      region: process.env.NEXT_PUBLIC_region || 'us-east-1',
      identityPoolId: process.env.NEXT_PUBLIC_identityPoolId,
    }
  },
  API: {
    graphql_endpoint: process.env.NEXT_PUBLIC_appSyncURL,
    graphql_headers: async () => {
      try {
        const { Auth } = await import('aws-amplify');
        const session = await Auth.currentSession();
        return {
          Authorization: session.getIdToken().getJwtToken(),
        };
      } catch (error) {
        console.error('Error getting auth token:', error);
        return {};
      }
    },
  },
  aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_appSyncURL,
  aws_appsync_region: process.env.NEXT_PUBLIC_region || 'us-east-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
};
