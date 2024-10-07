import React from 'react'

const sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="btns">
                    <div class="library">
                        <span className="fluent--library-32-filled"></span>
                        Your Library
                    </div>
                    <span className="heroicons--plus-16-solid"></span>
                </div>
                <div className="sidebar3 overflow-scroll">
                    <div className="sidebar2 p-3">
                        <h1>Create your first playlist</h1>
                        <p>It's easy,we'll help you</p>
                        <button type="button" className="btn p-2 mt-3 rounded-full text-black bg-white">Create playlist</button>
                    </div>

                    <div class="sidebar2 p-3">
                        <h1>Let's find some podcast to follow</h1>
                        <p>We'll keep you updated on new episodes</p>
                        <button type="button" class="btn p-2 mt-3 rounded-full text-black bg-white">Browse podcasts</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sidebar