import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store';
// import client from './apolloClient';
import App from './App';

import { fetchPosts } from './slices/posts.slice';
import { fetchUsers } from './slices/users.slice';
import { fetchOrganizers } from './slices/organizers.slice';
// import { fetchUsers } from './slices/users.slice';
// import { ApolloProvider } from '@apollo/client';

store.dispatch(fetchPosts());
store.dispatch(fetchOrganizers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='237187140266-h6lt4klehlqi0mtghfainmmqi8lv5d34.apps.googleusercontent.com'>
    <Provider store={store}>
      {/* <ApolloProvider client={client}> */}
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
      {/* </ApolloProvider> */}
    </Provider>
  </GoogleOAuthProvider>
);
