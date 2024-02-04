// MainContent.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function MainContent() {
  return (
    <main>
      <header>
        <button className="menu-btn" id="menu-open">
          <i className='bx bx-menu'></i>
        </button>
        
      </header>

      <div className="separator">
        <div className="info">
          <h3>My Courses</h3>
          
        </div>
        
      </div>

      <div className="analytics">
        <div className="item">
        <Link to="/task1">
            <div className="progress">
              <div className="info">
                <h5>Task1</h5>
                <p>35 Lessons</p>
              </div>
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <i className='bx bx-map-pin'></i>
          </Link>
        </div>
        <div className="item">
        <Link to="/task2">
            <div className="progress">
              <div className="info">
                <h5>Task2</h5>
                <p>30 Lessons</p>
              </div>
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <i className='bx bx-user-voice'></i>
          </Link>
        </div>
        <div className="item">
        <Link to="/task3">
            <div className="progress">
              <div className="info">
                <h5>Task3</h5>
                <p>45 Lessons</p>
              </div>
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <i className='bx bxs-plane-land'></i>
          </Link>
        </div>
        <div className="item">
          <div className="progress">
            <div className="info">
              <h5>Total Courses</h5>
              <p>20 Lessons</p>
            </div>
            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <i className='bx bxs-castle'></i>
        </div>
      </div>

      <div className="separator">
        <div className="info">
          <h3>Planning</h3>
          <a href="#">View All</a>
        </div>
        
      </div>

      <div className="planning">
        <div className="item">
          <div className="left">
            <div className="icon">
              <i className='bx bx-book-alt'></i>
            </div>
            <div className="details">
              <h5>Topic 1</h5>
              <p>8:00 - 10:00</p>
            </div>
          </div>
          <i className='bx bx-dots-vertical-rounded'></i>
        </div>
        <div className="item">
          <div className="left">
            <div className="icon">
              <i className='bx bx-edit-alt'></i>
            </div>
            <div className="details">
              <h5>Topic 2</h5>
              <p>13:00 - 14:00</p>
            </div>
          </div>
          <i className='bx bx-dots-vertical-rounded'></i>
        </div>
        <div className="item">
          <div className="left">
            <div className="icon">
              <i className='bx bx-headphone'></i>
            </div>
            <div className="details">
              <h5>Topic 1</h5>
              <p>15:00 - 16:00</p>
            </div>
          </div>
          <i className='bx bx-dots-vertical-rounded'></i>
        </div>
        <div className="item">
          <div className="left">
            <div className="icon">
              <i className='bx bx-volume-low'></i>
            </div>
            <div className="details">
              <h5>Topic 2</h5>
              <p>19:00 - 20:00</p>
            </div>
          </div>
          <i className='bx bx-dots-vertical-rounded'></i>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
