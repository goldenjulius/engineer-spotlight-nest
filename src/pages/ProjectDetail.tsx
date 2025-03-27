
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // This would typically come from an API or CMS
  const projects: Record<string, Project> = {
    'terraform-infrastructure': {
      id: 'terraform-infrastructure',
      title: 'Multi-Environment Infrastructure',
      description: 'Implemented Terraform IaC for dynamic environments (Test, Dev, Staging, Prod), reducing provisioning time from days to minutes.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80',
      technologies: ['Terraform', 'AWS', 'Azure', 'CI/CD', 'Infrastructure as Code', 'OpenTofu'],
      longDescription: 'Streamlined infrastructure management by implementing Terraform IaC for dynamic environments (Test, Dev, Staging, Prod), reducing provisioning and re-deployment time from days to minutes. This project involved converting AWS CDK-based infrastructure to Terraform, reducing code complexity by 30% and improving deployment consistency, resulting in a 20% decrease in operational incidents.',
      challenges: [
        'Managing multiple environments with consistent configurations',
        'Converting existing AWS CDK code to Terraform',
        'Ensuring secure handling of sensitive variables',
        'Implementing proper state management',
        'Integrating with existing CI/CD pipelines'
      ],
      solutions: [
        'Created modular Terraform code with environment-specific configurations',
        'Implemented Terragrunt for DRY infrastructure code',
        'Used AWS Secrets Manager for sensitive data',
        'Set up remote state with S3 and DynamoDB for locking',
        'Integrated with GitHub Actions for automated deployment'
      ],
      githubUrl: 'https://github.com/samuelcj',
      liveUrl: '#',
    },
    'serverless-solution': {
      id: 'serverless-solution',
      title: 'Serverless Event Processing',
      description: 'Integrated serverless solutions using AWS Lambda, API Gateway, and S3, achieving 99.99% availability for event-driven workflows.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
      technologies: ['AWS Lambda', 'API Gateway', 'S3', 'CloudWatch', 'DynamoDB', 'Serverless Framework'],
      longDescription: 'Collaborated with the team to integrate serverless solutions using AWS Lambda, API Gateway, and S3, achieving 99.99% availability for event-driven workflows while reducing compute costs by 30% and improving scalability to handle high-volume traffic. The system processes incoming events, transforms data, and triggers additional workflows based on business rules.',
      challenges: [
        'Designing for high availability and scalability',
        'Managing cold start latency',
        'Handling API request throttling',
        'Implementing proper monitoring and alerting',
        'Cost optimization for varying workloads'
      ],
      solutions: [
        'Implemented multi-region deployment for high availability',
        'Used provisioned concurrency for critical functions',
        'Configured API Gateway throttling and caching',
        'Set up comprehensive CloudWatch dashboards and alarms',
        'Implemented automatic scaling based on usage patterns'
      ],
      githubUrl: 'https://github.com/samuelcj',
      liveUrl: '#',
    },
    'database-architecture': {
      id: 'database-architecture',
      title: 'High-Performance Database Architecture',
      description: 'Administered database architecture for 50+ high-profile clients, improving query performance by 20% and ensuring data integrity.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1600&q=80',
      technologies: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Amazon RDS', 'Amazon Aurora', 'DynamoDB'],
      longDescription: 'Administered database architecture for 50+ high-profile clients such as FBNQuest, United Capitals, and Norrenberger, improving query performance by 20%. The project involved designing efficient database schemas, implementing proper indexing strategies, and setting up replication for high availability and disaster recovery.',
      challenges: [
        'Managing diverse database requirements across clients',
        'Ensuring high availability and disaster recovery',
        'Optimizing performance for complex queries',
        'Implementing secure access control',
        'Data migration with minimal downtime'
      ],
      solutions: [
        'Created standardized database templates with client-specific customizations',
        'Implemented multi-AZ deployments with read replicas',
        'Performed query optimization and proper indexing',
        'Set up fine-grained IAM permissions and encryption',
        'Developed automated migration scripts with validation'
      ],
      githubUrl: 'https://github.com/samuelcj',
      liveUrl: '#',
    },
  };

  const project = projects[id || ''];

  if (!project) {
    return (
      <MainLayout>
        <div className="section-container flex flex-col items-center justify-center min-h-[60vh]">
          <h2 className="text-3xl font-display font-bold mb-4">Project Not Found</h2>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/#projects')}
            className="button-effect px-6 py-3 rounded-lg bg-primary text-white font-medium hover-scale flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pt-24 pb-16">
        <div 
          className={`w-full h-64 sm:h-96 bg-accent/50 relative transition-all duration-700 ${
            isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
          }`}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        </div>
        
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/#projects')}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </button>
            
            <div 
              className={`transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-effect px-4 py-2 rounded-lg border border-border hover:bg-accent/50 font-medium flex items-center"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-effect px-4 py-2 rounded-lg bg-primary text-white font-medium flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Project
                  </a>
                )}
              </div>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-display font-medium mb-4">Project Overview</h2>
                <p className="mb-8">{project.longDescription}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-xl font-medium mb-4">Challenges</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.challenges?.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-xl font-medium mb-4">Solutions</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.solutions?.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetail;
