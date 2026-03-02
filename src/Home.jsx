import cake from './assets/cake.jpg'
import brownie from './assets/brownie.jpg'
import strawberry from './assets/strawberry.jpg'
import './Home.css'
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="dessert">
        <img src={cake} className="desserts" alt="cake" />
        <img src={brownie} className="desserts" alt="brownie" />
        <img src={strawberry} className="desserts" alt="strawberry" />

        <div className="text-box">
          <h1>Welcome to CrèmeCraft</h1>
          <h3>“Crafted with care, finished with sweetness.”</h3>
        </div>
      </div>
      <section className="value-section">
  <p>
    At CrèmeCraft, every dessert is a refined creation—crafted with premium
    ingredients, meticulous technique, and an unwavering passion for excellence.
  </p>
</section>
{/* TRENDING RECIPES */}
<section className="trending-section">
  <h2>Trending Recipes</h2>

  <div className="trending-flex">
    <div className="trend-card">
      <img src={cake} alt="Chocolate Cake" />
      <p>Chocolate Cake</p>
    </div>

    <div className="trend-card">
      <img src={brownie} alt="Fudge Brownie" />
      <p>Fudge Brownie</p>
    </div>

    <div className="trend-card">
      <img src={strawberry} alt="Strawberry Delight" />
      <p>Strawberry Delight</p>
    </div>
  </div>
</section>

{/* CATEGORIES */}
<section className="category-section">
  <h2>Our Categories</h2>

  <div className="category-flex">
     <Link to="/cakes" className="category-card">Cakes</Link>

    <Link to="/pastries" className="category-card">Pastries</Link>
    <Link to="/brownies" className="category-card">Brownies</Link>
    <Link to='/chocolate' className="category-card">Chocolate</Link>
     <Link to='/fruitsweets' className="category-card">Fruitsweets</Link>
    <Link to='/BakeryFushion' className="category-card">BakeryFushion</Link>
    
    
    
  </div>
</section>

    </>
  )
}

export default Home
