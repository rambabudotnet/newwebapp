import React, { Component } from 'react'; // Corrected import statement
import Layout from './components/layout';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component { // Changed from Componenet to Component
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}
