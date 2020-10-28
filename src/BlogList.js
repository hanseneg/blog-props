import React from 'react'
import BlogPost from './BlogPost'
import Data from './Data'

function BlogList() {
    const blog = Data.map(post => <BlogPost {...post}/>)
    return (
        <div className='blog'>
            <div className='blogList'>
                {blog}
            </div>
            <button className='button'>OLDER POSTS</button>
        </div>
    )
}

export default BlogList
