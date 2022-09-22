import React from 'react';
import PropTypes from 'prop-types';
import DOMpurify from 'dompurify';
import {Link} from 'react-router-dom';

const Post = ({title, category, excerpt, slug}) => {
    return (
        <article className='post'>
        <Link to={`/article/${slug}`}>
           <h2 className='post-title'>{title}</h2>
        </Link>
           <div className='post-category'>{category}</div>
           <p className='post-excerpt' dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(excerpt)}}/>
        </article>
    )
}


Post.propTypes = {
title: PropTypes.string.isRequired,
category: PropTypes.string.isRequired,
excerpt : PropTypes.string.isRequired,
slug:PropTypes.string.isRequired,
}

export default Post;