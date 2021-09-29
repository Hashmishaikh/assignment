import React from 'react'
import { Link } from 'react-router-dom';
import './Tab.css'

const Tab = () => {
    return (
        <>
        <div className="tabs">
            <Link className="link" to="/active">
                Post
            </Link>
            <Link className="link" to="/archive">
                Archive
            </Link>
        </div>
        </>
    )
}

export default Tab
