
  import cake from './assets/cake.jpg'
import './About.css'

function About() {
  return (
      <>
     
      <section className="about-hero">
        <h1>About CrèmeCraft</h1>
        <p>Where elegance meets indulgence</p>
      </section>

   
      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            CrèmeCraft was born from a passion for refined desserts and timeless
            flavors. Every creation reflects our belief that desserts should be
            as elegant as they are indulgent.
          </p>

          <p>
            We blend premium ingredients, thoughtful techniques, and artistic
            presentation to deliver desserts that feel special—every single time.
          </p>
        </div>

        <div className="about-image">
          <img src={cake} alt="About CrèmeCraft" />
        </div>
      </section>

    
    </>
  )
}

export default About

    