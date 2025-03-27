import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(to bottom, #f8f8f8, #e8e8e8);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, rgba(0,0,0,0.03), transparent);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background: linear-gradient(90deg, #00bfff, #0077ff);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #00bfff, #1e90ff, #4169e1);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
`;

const ProjectImage = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ProjectCard}:hover &::after {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 0;
    background: linear-gradient(to bottom, #00bfff, #0077ff);
    transition: height 0.3s ease;
    z-index: -1;
  }
  
  ${ProjectCard}:hover &::before {
    height: 100%;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #333;
  transition: color 0.3s ease;
  
  ${ProjectCard}:hover & {
    color: #0077ff;
  }
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1.2rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`;

const TechTag = styled.span`
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  color: #555;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  
  ${ProjectCard}:hover & {
    background: linear-gradient(135deg, #e6f7ff, #cceeff);
    color: #0077ff;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  position: relative;
  
  svg {
    margin-right: 0.4rem;
  }
  
  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #00bfff, #1e90ff);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #00bfff;
  }
  
  &:hover:before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

function Projects() {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>My Projects</SectionTitle>
      
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
                {project.technologies.length > 3 && (
                  <TechTag>+{project.technologies.length - 3}</TechTag>
                )}
              </ProjectTech>
              <ProjectLinks>
                {project.github && (
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </ProjectLink>
                )}
                {project.live && (
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;