import React, { PureComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.scss';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
