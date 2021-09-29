import React from 'react';
import Post from './Post';

const Posts = () => {
    return (
        <div className="posts">
        <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="Winter Season" time="13:52, 29 Sep 2021" desc="This is the Description" />
        <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Lady"  time="16:36, 28 Sep 2021" desc="This is the Description no 2" />
        <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="Money Plant"  time="11:20, 28 Sep 2021" desc="This is the Descrption no 3"/>
        <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="Comb"  time="09:34, 28 Sep 2021" desc="This is the Description no 4"/>
        <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="White Lotus"  time="08:39, 28 Sep 2021" desc="This is Description no 5"/>
      </div>
    )
}

export default Posts
