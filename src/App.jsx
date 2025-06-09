
import beesKneeslogomark from './assets/images/bees-knees-logomark.svg';
import ImageSlider from './components/ImageSlider.jsx';
import Blog from './components/Blog';
import BakeryLocator from './components/BakeryLocator.jsx';
import './App.css'

function App() {

  return (
    <>
      <img className="main-logo" src={beesKneeslogomark} alt="Bee's Knees Logo" />
      <h1 className="main-title">the bee's knees</h1>

      <ImageSlider></ImageSlider>

      <section className="container intro">
        <h2>Looking for a Sweet Treat?</h2>

        <p>Welcome to sweet the Bee's Knees. The best place to find local sweets. Try out our bakery and cafe locator or taks some time to read a blog or two. If you're feeling really ambitious, try out our Treat Planner.</p>
      </section>

      <section className="container blog-posts">
        <Blog></Blog>
      </section>
      <section className="container bakery-locator">
        <BakeryLocator></BakeryLocator>
      </section>
    </>
  )
}

export default App
