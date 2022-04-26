import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

const Home = () => (
  <main className="home container">
    <h2 className="caption-l2">Welcome to our page!</h2>
    <div className="main-text">
      <LoremIpsum />
    </div>
    <div className="main-text">
      <LoremIpsum />
    </div>
  </main>
);

export default Home;
