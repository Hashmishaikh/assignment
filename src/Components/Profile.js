import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
      <div className="profileWrapper">
        <div className="profileTitle">
          <span className="profileTitleUpdate">Update Your Account</span>
          <span className="profileTitleDelete">Delete Account</span>
        </div>
        <form className="profileForm">
          <label>Profile Picture</label>
          <div className="profilePP">
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="profilePPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="profilePPInput"
            />
          </div>
          <label>Name</label>
          <input type="text" placeholder="Hashmi" name="name" />
          <label>Contact Number</label>
          <input type="text" placeholder="9623735296" name="name" />
          <label>Email</label>
          <input type="email" placeholder="hashmi@gmail.com" name="email" />
          <label>Location</label>
          <input type="text" placeholder="Mumbai,Maharashtra" name="name" />
          <button className="profileSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      </div>
    )
}

export default Profile
