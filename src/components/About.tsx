
import { useEffect, useState } from 'react';
import { Server, Cloud, Database, Shield, BarChart } from 'lucide-react';

const About = () => {
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
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: 'Cloud Architecture',
      description: 'Designing robust, scalable cloud infrastructures on AWS, Azure, and GCP.'
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: 'Infrastructure as Code',
      description: 'Automating deployments with Terraform, CloudFormation, and Pulumi.'
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: 'Database Solutions',
      description: 'Implementing and optimizing cloud-native database services.'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Security & Compliance',
      description: 'Ensuring cloud environments meet industry security standards.'
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: 'Cost Optimization',
      description: 'Strategically reducing cloud spend while maintaining performance.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm Samuel Joseph, a cloud engineer with over 5 years of experience in designing and implementing scalable, secure, and cost-effective cloud solutions. With deep expertise in AWS, Azure, and GCP, I help organizations leverage cloud technologies to achieve their business objectives and digital transformation goals.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`glass rounded-xl p-6 hover-scale transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
