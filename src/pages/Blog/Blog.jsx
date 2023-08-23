import React, { useEffect } from 'react'
import BlogContent from '../../Components/Blog/BlogContent';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';

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