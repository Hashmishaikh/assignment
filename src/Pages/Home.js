import React from 'react';
import './Home.css'
import Posts from '../Components/Posts';
import Sidebar from '../Components/Sidebar';
import Wall from '../Components/Wall';
import Tab from '../Components/Tab';


const Home = () => {
    return (
        <>
       <>
      <Wall />
      <Tab />
      <div className="home">
        <Posts />
       
        <Sidebar />
      </div>
    </>
        </>
    )
}

export default Home
