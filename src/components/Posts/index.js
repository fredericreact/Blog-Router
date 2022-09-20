import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'; 

import Post from './Post';

const Posts = ({postsList}) => {
    return (
        <main className='posts'>
            <h1 className='posts-title'>Dev of thrones</h1>
            <div className='posts-list'>
            
        {
            postsList.map((postObject) => (
                <Post key={postObject.id} {...postObject} />
            ))

        }

            </div>
        </main>
    )
}

Posts.propTypes = {
    postsList:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            category:PropTypes.string.isRequired,
            excerpt:PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Posts;