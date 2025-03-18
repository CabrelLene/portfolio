jsx
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>À propos de moi</h2>
      <div className="about-content">
        <img src="/profile.jpg" alt="Profile" />
        <p>Développeur passionné avec expertise en React et technologies web modernes.</p>
      </div>
    </section>
  )
}

export default About