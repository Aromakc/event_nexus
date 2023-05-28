import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import store  from './store';

const stateLink = withClientState({ store });

const link = ApolloLink.from([stateLink]);

export default link;
