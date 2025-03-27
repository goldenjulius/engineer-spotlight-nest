
import { useState, useEffect } from 'react';

const Skills = () => {
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
    
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      name: 'Cloud Platforms',
      skills: [
        { name: 'AWS', proficiency: 95 },
        { name: 'Microsoft Azure', proficiency: 90 },
        { name: 'Google Cloud Platform', proficiency: 85 },
        { name: 'DigitalOcean', proficiency: 80 },
      ]
    },
    {
      name: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', proficiency: 95 },
        { name: 'CloudFormation', proficiency: 85 },
        { name: 'Ansible', proficiency: 80 },
        { name: 'Pulumi', proficiency: 75 },
      ]
    },
    {
      name: 'Containerization & Orchestration',
      skills: [
        { name: 'Docker', proficiency: 95 },
        { name: 'Kubernetes', proficiency: 90 },
        { name: 'Helm', proficiency: 85 },
        { name: 'Service Mesh (Istio)', proficiency: 75 },
      ]
    },
    {
      name: 'DevOps Practices',
      skills: [
        { name: 'CI/CD Pipelines', proficiency: 90 },
        { name: 'GitOps', proficiency: 85 },
        { name: 'Infrastructure Monitoring', proficiency: 90 },
        { name: 'Site Reliability Engineering', proficiency: 80 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              My expertise spans across multiple cloud platforms and infrastructure technologies, allowing me to design and implement comprehensive cloud solutions.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.name}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.1 * (catIndex + 1)}s` }}
            >
              <h3 className="text-xl font-medium mb-6">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-accent rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.proficiency}%` : '0%',
                          transitionDelay: `${0.2 * (index + 1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
