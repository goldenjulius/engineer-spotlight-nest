
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 'terraform-infrastructure',
      title: 'Multi-Environment Infrastructure',
      description: 'Implemented Terraform IaC for dynamic environments (Test, Dev, Staging, Prod), reducing provisioning time from days to minutes.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      technologies: ['Terraform', 'AWS', 'Azure', 'CI/CD'],
    },
    {
      id: 'serverless-solution',
      title: 'Serverless Event Processing',
      description: 'Integrated serverless solutions using AWS Lambda, API Gateway, and S3, achieving 99.99% availability for event-driven workflows.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      technologies: ['AWS Lambda', 'API Gateway', 'S3', 'Event-Driven'],
    },
    {
      id: 'database-architecture',
      title: 'High-Performance Database Architecture',
      description: 'Administered database architecture for 50+ high-profile clients, improving query performance by 20% and ensuring data integrity.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      technologies: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-accent/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Explore some of my recent cloud engineering and DevOps projects that showcase my expertise in designing scalable and resilient solutions.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass rounded-xl overflow-hidden hover-scale transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-primary font-medium transition-all duration-300 hover:opacity-80 group"
                >
                  View Details
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
