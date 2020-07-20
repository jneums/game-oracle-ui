import React from 'react';
import {
    Configuration,
    Layout,
    useLayoutNavigation,
    Text,
    Button,
  } from 'react-md';
  import GameInfo from './GameInfo'
  import Prediction from './Prediction'
  import './App.scss';
  
  // see @react-md/layout package for info on the main navigation
  const routes = {};
  function App() {
    return (
      <Configuration>
        <Layout
          title="Predict a Games Popularity"
          navHeaderTitle="Game Oracle"
          treeProps={useLayoutNavigation(routes, window.location.pathname)}
        >
        <GameInfo />
        <Prediction />
        </Layout>
      </Configuration>
    );
  }

export default App;
