
import React from 'react';
import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/common/Header';
import { Content, Header } from 'antd/es/layout/layout';
import Home from './views/AppHome';

function App() { 
  return (
    <Layout className='mainLayout'>
      <Header>
      <AppHeader />
      </Header>   
      <Content>
        <Home />
      </Content>
  </Layout>
  );
}

export default App;
