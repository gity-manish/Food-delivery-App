import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'; // Missing import
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

const [category,setCategory] = useState("All");


  return (
    <div className="home-container">
      <Header /> 
      <ExploreMenu  category={category} setCategory={setCategory}/> 
      <FoodDisplay category={category}/>
    </div>
  );
};

export default Home;