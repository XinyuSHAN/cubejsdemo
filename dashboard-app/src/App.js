import './body.css';
import 'antd/dist/antd.css';
import React from 'react';
import '@ant-design/compatible';
import { ApolloProvider } from '@apollo/react-hooks';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import client from './graphql/client';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
const API_URL = "http://localhost:4000";
const CUBEJS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc4NDQ0ODIsImV4cCI6MTYwNzkzMDg4Mn0.mgZj7nkONuw1GeBFLd8iBnnoiI2Ds-CCirU_sxjXmKg";
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`
});

const AppLayout = ({
  children
}) => <Layout style={{
  height: '100%'
}}>
    <Header />
    <Layout.Content>
     <Dashboard />
    </Layout.Content>
  </Layout>;

const App = ({
  children
}) => <CubeProvider cubejsApi={cubejsApi}>
    <ApolloProvider client={client}>
      <AppLayout>{children}</AppLayout>
    </ApolloProvider>
  </CubeProvider>;

export default App;