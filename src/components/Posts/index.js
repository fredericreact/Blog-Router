import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'; 

import Post from './Post';

const Posts = () => {
    return (
        <main className='posts'>
            <h1 className='posts-title'>Dev of thrones</h1>
            <div className='posts-list'>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </main>
    )
}

export default Posts;