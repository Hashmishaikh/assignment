import React from 'react';
import './Post.css';

const Post = ({img,title,time,desc}) => {
    return (
        <div className="post">
        <img
          className="postImg"
          src={img}
          alt="Images"
        />
        <div className="postInfo">
          <span className="postTitle">
           
              {title}
            
          </span>
         
        </div>
        <p className="postDesc">
        {desc}
        </p>
       
          <span className="postDate">{time}</span>
          <hr />
      </div>
    )
}

export default Post
