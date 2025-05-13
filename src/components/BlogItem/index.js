// Write your JS code here
import './index.css'

const BlogItem = ({blog}) => (
  <div className="blog-item">
    <div className="header-container">
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-date">{blog.publishedDate}</p>
    </div>
    <div>
      <p className="blog-description">{blog.description}</p>
    </div>
    <hr className="seperator" />
  </div>
)

export default BlogItem
