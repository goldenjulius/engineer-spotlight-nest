
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
    'serverless-api': {
      id: 'serverless-api',
      title: 'Serverless API Platform',
      description: 'A high-performance serverless API built with AWS Lambda, API Gateway, and DynamoDB that handles millions of requests daily.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Terraform', 'CloudWatch', 'Node.js'],
      longDescription: 'This project involved designing a completely serverless API architecture for a high-traffic application. The system was built to automatically scale with traffic and maintain high availability across multiple AWS regions. It integrates with various AWS services for a complete serverless experience, from authentication to data storage and processing.',
      challenges: [
        'Handling millions of daily API requests efficiently',
        'Ensuring data consistency across regions',
        'Implementing robust security measures',
        'Optimizing cold start times for Lambda functions',
        'Managing complex deployment processes'
      ],
      solutions: [
        'Implemented aggressive caching strategies at multiple levels',
        'Designed a multi-region data synchronization system with DynamoDB Global Tables',
        'Utilized AWS Cognito and Lambda authorizers for authentication and authorization',
        'Optimized Lambda functions through code splitting and runtime selection',
        'Created a comprehensive CI/CD pipeline with infrastructure as code'
      ],
      githubUrl: '#',
      liveUrl: '#',
    },
    'kubernetes-cluster': {
      id: 'kubernetes-cluster',
      title: 'Multi-Region Kubernetes Cluster',
      description: 'Designed and implemented a fault-tolerant Kubernetes infrastructure that spans multiple cloud regions for high availability.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      technologies: ['Kubernetes', 'Helm', 'Istio', 'GCP', 'Terraform', 'Prometheus', 'Grafana'],
      longDescription: 'This project focused on building a resilient, multi-region Kubernetes platform to support critical microservices. The architecture includes advanced networking, service mesh capabilities, comprehensive monitoring, and automated disaster recovery procedures. The infrastructure is fully defined as code and can be deployed to any supported cloud provider with minimal changes.',
      challenges: [
        'Ensuring high availability across geographic regions',
        'Managing complex network topologies',
        'Implementing zero-downtime deployments',
        'Monitoring distributed systems effectively',
        'Controlling cloud costs while maintaining performance'
      ],
      solutions: [
        'Designed active-active cluster configuration across regions',
        'Implemented Istio service mesh for advanced traffic control',
        'Created custom Helm charts for standardized deployments',
        'Built comprehensive monitoring dashboards with Prometheus and Grafana',
        'Implemented cluster autoscaling and workload prioritization'
      ],
      githubUrl: '#',
      liveUrl: '#',
    },
    'data-pipeline': {
      id: 'data-pipeline',
      title: 'Real-time Data Pipeline',
      description: 'Built an end-to-end data pipeline that processes terabytes of streaming data with minimal latency.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80',
      technologies: ['Kafka', 'Spark', 'AWS Kinesis', 'Airflow', 'S3', 'Redshift', 'Terraform'],
      longDescription: 'This project involved designing and implementing a high-throughput data processing pipeline capable of ingesting, transforming, and analyzing terabytes of streaming data in near real-time. The architecture uses a combination of managed services and custom components to achieve both high performance and cost efficiency. The system includes data quality checks, monitoring, and alerting capabilities.',
      challenges: [
        'Processing high-volume streaming data with minimal latency',
        'Ensuring data integrity throughout the pipeline',
        'Scaling compute resources dynamically based on workload',
        'Implementing comprehensive data governance',
        'Optimizing storage costs for historical data'
      ],
      solutions: [
        'Designed a hybrid architecture using Kafka and Kinesis for data ingestion',
        'Implemented stateful stream processing with exactly-once semantics',
        'Created auto-scaling Spark clusters for data processing',
        'Developed comprehensive data quality monitoring with automated alerts',
        'Implemented intelligent data tiering and lifecycle policies'
      ],
      githubUrl: '#',
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
