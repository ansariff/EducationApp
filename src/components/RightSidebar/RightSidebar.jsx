// RightSidebar.jsx
import React from 'react';

function RightSidebar() {
  return (
    <aside className="right-section">
      {/* <div className="top">
        <i className='bx bx-bell'></i>
        <div className="profile">
          <div className="left">
            <img src="assets/p1.jpg" alt="Profile" />
            <div className="user">
              <h5>DINO</h5>
              <a href="#">View Profile</a>
            </div>
          </div>
          <i className='bx bxs-chevron-right'></i>
        </div>
      </div> */}

      <div className="separator" id="first">
        <h4>Statistics</h4>
      </div>

      <div className="stats">
        <div className="item">
          <div className="top">
            <p>Courses</p>
            <p>Completed</p>
          </div>
          <div className="bottom">
            <div className="line"></div>
            <h3>02</h3>
          </div>
        </div>
        <div className="item">
          <div className="top">
            <p>Total Points</p>
            <p>Gained</p>
          </div>
          <div className="bottom">
            <div className="line"></div>
            <h3>250</h3>
          </div>
        </div>
        <div className="item">
          <div className="top">
            <p>Courses</p>
            <p>In Progress</p>
          </div>
          <div className="bottom">
            <div className="line"></div>
            <h3>03</h3>
          </div>
        </div>
        <div className="item">
          <div className="top">
            <p>Tasks</p>
            <p>Finished</p>
          </div>
          <div className="bottom">
            <div className="line"></div>
            <h3>250</h3>
          </div>
        </div>
      </div>

      <div className="separator">
        <h4>Weekly Work</h4>
      </div>

      <div className="weekly">
        <div className="title">
          <div className="line"></div>
          <h5>Week Status</h5>
        </div>
        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div className="progress"><p>3/4</p></div>
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
