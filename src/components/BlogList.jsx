import BlogPost from './BlogPost';

//Creates multiple blog posts in a div and gives the BlogPost component the properties.
function BlogList(props) {
  const posts = props.posts;
  const onDelete = props.onDelete;

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} onDelete={onDelete}></BlogPost>
      ))}
    </div>
  );
}

export default BlogList;