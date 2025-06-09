import '../assets/Blog.css';

//Creates the blog post using the info from the post property.
function BlogPost(props) {
  const post = props.post;
  const onDelete = props.onDelete;

  return (
    <div className="blog-post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="tags"><strong>Tags:</strong> {post.tags.join(', ')}</p>
      <button className="delete-button" onClick={(evt) => onDelete(evt, post.id)}>
        Delete
      </button>
    </div>
  );
}

export default BlogPost;
