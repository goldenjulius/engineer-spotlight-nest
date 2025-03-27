
import { useEffect, useState } from 'react';
import { Server, Cloud, Database, Shield, BarChart, Code } from 'lucide-react';

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
      title: 'Multi-Cloud Architecture',
      description: 'Designing secure and scalable infrastructures on AWS, Azure, GCP, and Oracle Cloud.'
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: 'DevOps & CI/CD Pipelines',
      description: 'Building efficient pipelines with Jenkins, GitLab CI, GitHub Actions, and AWS CodePipeline.'
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: 'Infrastructure as Code',
      description: 'Automating deployments using Terraform, Ansible, CloudFormation, and OpenTofu.'
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: 'Database Management',
      description: 'Managing SQL and NoSQL databases including MySQL, PostgreSQL, MongoDB, and Oracle databases.'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Security & Compliance',
      description: 'Implementing IAM policies, VPNs, and security best practices across cloud environments.'
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: 'Monitoring & Optimization',
      description: 'Setting up monitoring with Prometheus, Grafana, and CloudWatch to optimize performance and cost.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm Samuel Joseph, a certified Cloud and DevOps Engineer with expertise in designing, automating, and optimizing mission-critical deployments across multi-cloud platforms. With experience at Goftech Support, Neulogic Solutions, and CloudPlexo, I've helped organizations enhance system reliability, streamline releases, and deliver innovative solutions aligned with business goals.
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
