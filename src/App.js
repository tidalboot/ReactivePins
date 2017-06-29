import React from 'react';
import './App.css';
import Listings from './Listings';

 const App = () => {
   return (
   <div className="App">Welcome to Blizzpins!
     <Listings name="Tidalboot"/>  
     <Listings name="RyanCosans"/>
     <Listings name="JeffKaplan"/>
   </div>);
 };

 export default App;