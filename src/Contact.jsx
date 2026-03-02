import './Contact.css'

function Contact() {
  return (
    <>
      
      <section className="contact-hero">
        <h1>Contact CrèmeCraft</h1>
        <p>We’d love to sweeten your day</p>
      </section>

      
      <section className="contact-section">
       
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Whether you have a question, a custom order, or a special request,
            we’re here to help you create something delightful.
          </p>

          <div className="info-item">
            <span>Email</span>
            <p>hello@cremecraft.com</p>
          </div>

          <div className="info-item">
            <span>Phone</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <span>Location</span>
            <p>Bangalore, India</p>
          </div>
        </div>

        
        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact

{/*import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './Contact.css'

function MyForm() {
  const [name, setName] = useState("")
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      
      <button onClick={() => setShowModal(true)}>
        Open Form
      </button>

     
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✖
            </button>

            <form>
              <label>
                Enter your name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <p>Current value: {name}</p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

createRoot(document.getElementById('root')).render(<MyForm />)*/}
