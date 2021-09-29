import React from 'react';
import './ArchPost.css';

const ArchPost = ({img,title,desc,time}) => {
    return (
        <div className="arch">
        <img
          className="archImg"
          src={img}
          alt="Images"
        />
        <div className="archInfo">
          <span className="postTitle">
           
              {title}
            
          </span>
         
        </div>
        <p className="archDesc">
        {desc}
        </p>
       
          <span className="archDate">{time}</span>
          <hr />
      </div>
    )
}

export default ArchPost;
