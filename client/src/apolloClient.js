import { ApolloClient, InMemoryCache } from '@apollo/client';
import { link } from './apolloLink';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/',
  cache: new InMemoryCache(),
  link,
});

export default client;
