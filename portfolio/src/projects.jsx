jsx
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Description du projet 1",
      image: "/project1.jpg"
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Description du projet 2",
      image: "/project2.jpg"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects