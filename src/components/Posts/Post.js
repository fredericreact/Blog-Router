import React from 'react';
import PropTypes from 'prop-types';
import DOMpurify from 'dompurify';

const Post = ({title, category, excerpt}) => {
    return (
        <article className='post'>
           <h2 className='post-title'>{title}</h2>
           <div className='post-category'>{category}</div>
           <p className='post-excerpt' dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(excerpt)}}/>
        </article>
    )
}


Post.propTypes = {
title: PropTypes.string.isRequired,
category: PropTypes.string.isRequired,
excerpt : PropTypes.string.isRequired,

}

export default Post;