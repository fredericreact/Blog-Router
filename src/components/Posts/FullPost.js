import React from 'react';
import PropTypes from 'prop-types';
import DOMpurify from 'dompurify';
import NotFound from '../NotFound';
import { useParams } from 'react-router-dom';

const FullPost = ({posts}) => {
    const {titredelarticle} = useParams();


   const searchedArticle = posts.find((articleObject) => titredelarticle===articleObject.slug)


    if(!searchedArticle) {
        return(
         <NotFound/>
        );
    }

    const {title, content, category}  = searchedArticle ;
    return (
        <article className='post full'>
           <h2 className='post-title'>{title}</h2>
           <div className='post-category'>{category}</div>
           <p className='post-content' dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(content)}}/>
        </article>
    )
}


FullPost.propTypes = {
title: PropTypes.string.isRequired,
category: PropTypes.string.isRequired,
content : PropTypes.string.isRequired,

}

export default FullPost;