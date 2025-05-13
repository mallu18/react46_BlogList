// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = ({blogs}) => (
  <div className="blog-list">
    {blogs.map(blog => (
      <BlogItem key={blog.id} blog={blog} />
    ))}
  </div>
)

export default BlogList
