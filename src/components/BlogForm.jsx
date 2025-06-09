
function BlogForm(props) {


  //Creates a new post object
  function onSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;

    //Splits the tags in the string.
    const enteredTags = form.elements.tags.value.split(',');
    const tagArray = [];

    //Adds the split tags to the tagArray.
    for (let i = 0; i < enteredTags.length; i++) {
      tagArray.push(enteredTags[i]);
    }

    //Creates a new object with the form submission.
    const newPost = {
      title: form.elements.title.value,
      content: form.elements.content.value,
      tags: tagArray,
    };

    //Calls addPost
    props.onAddPost(newPost);
    

  }

  return (
    <form onSubmit={onSubmit} className="blog-form">
      <h4>Contribute to the Blog</h4>

      <label>Title:</label><br />
      <input name="title" type="text" required /><br />

      <label>Content:</label><br />
      <textarea name="content" required /><br />

      <label>Tags (comma-separated):</label><br />
      <input name="tags" type="text" /><br />

      <button type="submit">Add Post</button>
    </form>
  );
}

export default BlogForm;
