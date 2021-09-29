import React from 'react';
import './InputPost.css'

const InputPosts = () => {
    return (
        <div className="InPost">
            <img
                className="InPostImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className="InPostForm">
                <div className="InPostFormGroup">
                    <label htmlFor="fileInput">
                        <i className="InPostIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="InPostInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="InPostFormGroup">
                    <textarea
                        className="InPostInput writeText"
                        placeholder="Write Description...."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="InPostSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default InputPosts
