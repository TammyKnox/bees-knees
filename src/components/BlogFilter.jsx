import '../assets/Blog.css';

function BlogFilter(props) {

    const tags = props.tags;
    const selectedTag = props.selectedTag;
    const onFilter = props.onFilter;

    //Allows the user to filter the blog posts.
    function handleFilter(evt) {
        onFilter(evt.target.value);
    }
  
    return (
    <div className="blog-filter">
      <p>Filter by Tag:</p>
      <select
        value={selectedTag}
        onChange={(evt) => onFilter(evt.target.value)}
      >
        <option value="">All</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
    </div>
  );
}

export default BlogFilter;
