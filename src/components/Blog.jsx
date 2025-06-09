import {useState} from 'react';
import BlogList from './BlogList';
import BlogForm from './BlogForm';
import BlogFilter from './BlogFilter';
import BakeryLocator from './BakeryLocator';
import '../assets/Blog.css';

//blogPosts JSON Data
const blogPosts = [
    {
        id: 1,
        title: 'Cupcakes Are Magic',
        content: 'Muffin brownie chocolate cotton candy liquorice. Jelly-o sweet roll candy canes donut chocolate jelly-o. Sweet roll gingerbread cake gummi bears gummi bears shortbread. Pudding shortbread bonbon macaroon topping cotton candy gummies pudding caramels. Cupcake powder gummies cookie cupcake liquorice ice cream ice cream macaroon. Gummi bears oat cake marshmallow jujubes chocolate powder croissant dessert. Apple pie biscuit chocolate bar dessert macaroon cheesecake.',
        tags: ['cupcakes', 'dessert']
    },
        {
        id: 2,
        title: 'You Should Start a Bakery',
        content: 'Muffin brownie chocolate cotton candy liquorice. Jelly-o sweet roll candy canes donut chocolate jelly-o. Sweet roll gingerbread cake gummi bears gummi bears shortbread. Pudding shortbread bonbon macaroon topping cotton candy gummies pudding caramels. Cupcake powder gummies cookie cupcake liquorice ice cream ice cream macaroon. Gummi bears oat cake marshmallow jujubes chocolate powder croissant dessert. Apple pie biscuit chocolate bar dessert macaroon cheesecake.',
        tags: ['bakeries', 'business']
    },
    {
        id: 3,
        title: 'Top 5 Cozy Cafes in Illinois',
        content: 'Muffin brownie chocolate cotton candy liquorice. Jelly-o sweet roll candy canes donut chocolate jelly-o. Sweet roll gingerbread cake gummi bears gummi bears shortbread. Pudding shortbread bonbon macaroon topping cotton candy gummies pudding caramels. Cupcake powder gummies cookie cupcake liquorice ice cream ice cream macaroon. Gummi bears oat cake marshmallow jujubes chocolate powder croissant dessert. Apple pie biscuit chocolate bar dessert macaroon cheesecake.',
        tags: ['cafes', 'illinois']
    },
    {
        id: 4,
        title: 'Where Are All The Bakeries?',
        content: 'Muffin brownie chocolate cotton candy liquorice. Jelly-o sweet roll candy canes donut chocolate jelly-o. Sweet roll gingerbread cake gummi bears gummi bears shortbread. Pudding shortbread bonbon macaroon topping cotton candy gummies pudding caramels. Cupcake powder gummies cookie cupcake liquorice ice cream ice cream macaroon. Gummi bears oat cake marshmallow jujubes chocolate powder croissant dessert. Apple pie biscuit chocolate bar dessert macaroon cheesecake.',
        tags: ['bakeries', 'essay']
    },
    {
        id: 5,
        title: 'Why We Love Macaroons',
        content: 'Muffin brownie chocolate cotton candy liquorice. Jelly-o sweet roll candy canes donut chocolate jelly-o. Sweet roll gingerbread cake gummi bears gummi bears shortbread. Pudding shortbread bonbon macaroon topping cotton candy gummies pudding caramels. Cupcake powder gummies cookie cupcake liquorice ice cream ice cream macaroon. Gummi bears oat cake marshmallow jujubes chocolate powder croissant dessert. Apple pie biscuit chocolate bar dessert macaroon cheesecake.',
        tags: ['dessert', 'international']
    }
];

//Parent component for all fo the blog components, and managing state changes and data.
function Blog() {


    const [posts, setPosts] = useState(blogPosts);

    //Allows the user to add posts.
    const addPost = (newPost) => {
        setPosts ([...posts, {...newPost, id: posts.length + 1 }]);
    };

    //Allows the user to delete posts.
    const handleDelete = function(evt, postID) {
        evt.preventDefault();

        setPosts(function(currentPosts) {
            return currentPosts.filter(function(post) {
                return post.id !== postID;
            });
        });
    };

    //creating an array of tags.
    const postTags = []; 
    const allTags = posts.map(post => post.tags);

    //Using a for loop to access the tags in the object. Uses the include method to check for tag of each blog post.
    for (let i = 0; i < allTags.length; i++){ 
        const tags = allTags[i];
        
        for (let j = 0; j < tags.length; j++) {
            const tag = tags[j];
            if (!postTags.includes(tag)){
                postTags.push(tag);
            }
        }
    }

    //Sets the Tags selected from the dropdown to change the state of what's showing.
    const [selectedTags, setSelectedTags] = useState('');

    //Filters the blogs based on the selected tag.
    const filteredPosts = selectedTags === '' ? posts : posts.filter(post => {
        for (let i = 0; i < post.tags.length; i++) {
            if (post.tags[i] === selectedTags) {
            return true;
            }
        }
        return false;
    });

    //Shows the user the number of blog posts being displayed.
    function BlogSummary({ posts }) {
        let count = 0;
        for (let i = 0; i < posts.length; i++) {
            count++;
        }

        return (
            <div className="blog-summary">
            <p>Displaying {count} Posts.</p>
            </div>
        );
    }

    return (
        <div className="blog-container">
        <h2>Mini Blog</h2>

        <BlogFilter
            tags={postTags}
            selectedTag={selectedTags}
            onFilter={setSelectedTags}
        />
        <BlogSummary posts={filteredPosts}></BlogSummary>
        
        <BlogList posts={filteredPosts} onDelete={handleDelete}/>

        <BlogForm onAddPost={addPost}></BlogForm>
                    
        </div>


    );


}

export default Blog;