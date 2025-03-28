// src/components/Projects.jsx
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 7rem 0;
  background: var(--bg-primary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.75rem;
    height: 4px;
    width: 60px;
    background: var(--accent);
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 7rem;
`;

const ProjectItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  &:nth-of-type(even) {
    direction: rtl;
    
    .project-content {
      direction: ltr;
      text-align: right;
      
      h3::after {
        left: auto;
        right: 0;
      }
      
      .tech-stack {
        justify-content: flex-end;
      }
      
      .project-links {
        justify-content: flex-end;
      }
    }
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    
    &:nth-of-type(even) {
      direction: ltr;
      
      .project-content {
        text-align: left;
        
        h3::after {
          left: 0;
          right: auto;
        }
        
        .tech-stack {
          justify-content: flex-start;
        }
        
        .project-links {
          justify-content: flex-start;
        }
      }
    }
  }
`;

// Mobile Phone Mockup Component
const PhoneMockup = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: -16px;
    left: -10px;
    right: -10px;
    bottom: -16px;
    background: #222;
    border-radius: 32px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 10px;
    background: #111;
    border-radius: 10px;
    z-index: 2;
  }
`;

const PhoneScreen = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  z-index: 2;
  aspect-ratio: 9/16;
`;

// Browser Mockup Component
const BrowserMockup = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 36px;
    background: #f0f0f0;
    border-bottom: 1px solid #ddd;
    z-index: 2;
    
    .dark-mode & {
      background: #333;
      border-color: #444;
    }
  }
  
  &::after {
    content: '• • •';
    position: absolute;
    top: 0;
    left: 16px;
    line-height: 36px;
    color: #777;
    font-size: 20px;
    letter-spacing: 2px;
    z-index: 3;
    
    .dark-mode & {
      color: #aaa;
    }
  }
`;

const BrowserScreen = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  aspect-ratio: 16/9;
  padding-top: 36px;
`;

const Screenshot = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    height: 3px;
    width: 40px;
    background: var(--accent);
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const TechItem = styled.span`
  background: var(--bg-tertiary);
  color: var(--accent);
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent-transparent);
    transform: translateY(-2px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--accent);
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  // Helper function to determine if project is mobile or web
  const isMobileProject = (projectId) => {
    return projectId === 1 || projectId === 2; // StatusGuru and IIT Delhi Library App are mobile
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {isMobileProject(project.id) ? (
                <PhoneMockup>
                  <PhoneScreen>
                    <Screenshot src={project.image} alt={project.title} />
                  </PhoneScreen>
                </PhoneMockup>
              ) : (
                <BrowserMockup>
                  <BrowserScreen>
                    <Screenshot src={project.image} alt={project.title} />
                  </BrowserScreen>
                </BrowserMockup>
              )}
              
              <ProjectContent className="project-content">
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <TechItem key={i}>{tech}</TechItem>
                  ))}
                </TechStack>
                
                <ProjectLinks className="project-links">
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={18} /> Source Code
                    </ProjectLink>
                  )}
                  {project.live && (
                    <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={16} /> Live Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectItem>
          ))}
        </ProjectsContainer>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;