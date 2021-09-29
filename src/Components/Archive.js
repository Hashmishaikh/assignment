import React from 'react'
import ArchPost from './ArchPost';
// import './Archive.css'

const Archive = () => {
    return (
        <div>
        <h3 className="head" style={{marginLeft:"150px",marginBottom:"12px"}}>Archive</h3>
        <div className="post">
            <ArchPost img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="Winter Season" time="12:00, 28 Sep 2021" desc="This is the Description" />
            <ArchPost img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="White Lotus" time="04:45, 29 Sep 2021" desc="This is Description no 5" />
            <ArchPost img="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Plants" time="07:38, 11 sep 2021" desc="This is the Archive Post"/>
            </div>
        </div>
    )
}

export default Archive;
