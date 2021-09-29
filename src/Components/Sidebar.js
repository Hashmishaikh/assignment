import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
          />
          <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i className="link" to="/posts?cat=Life">
                Life
              </i>
            </li>
            <li className="sidebarListItem">
              <i className="link" to="/posts?cat=Music">
                Music
              </i>
            </li>
            <li className="sidebarListItem">
              <i className="link" to="/posts?cat=Sport">
                Sport
              </i>
            </li>
            <li className="sidebarListItem">
              <i className="link" to="/posts?cat=Style">
                Style
              </i>
            </li>
            <li className="sidebarListItem">
              <i className="link" to="/posts?cat=Tech">
                Tech
              </i>
            </li>
            <li className="sidebarListItem">
              <i className="link" to="/posts?cat=Cinema">
                Cinema
              </i>
            </li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    )
}

export default Sidebar
