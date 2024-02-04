// Dashboard.jsx
import React from 'react';
//import { Outlet } from 'react-router-dom';
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import  './Dashboard.css';



function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
      <RightSidebar />
  </div>
  );
}

export default Dashboard;
