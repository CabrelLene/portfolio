
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  )
}

export default Contact