import React, { useEffect } from 'react'
import BlogContent from '../../Components/Blog/BlogContent';

const Blog = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  return (
    <div>
        <BlogContent />
    </div>
  )
}

export default Blog