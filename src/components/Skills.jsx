import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { FaCode, FaLayerGroup, FaDatabase, FaTools } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #141E30 0%, #243B55 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0,191,255,0.05) 0%, transparent 50%);
    animation: rotate 30s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  z-index: 1;
  
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: linear-gradient(120deg, rgba(0,191,255,0.1) 0%, rgba(0,191,255,0.2) 100%);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  &:hover:before {
    opacity: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #00bfff, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  font-size: 1.8rem;
  color: #00bfff;
  margin-right: 1rem;
  background: linear-gradient(135deg, #00bfff, #0077ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  padding: 0.7rem 1rem;
  margin-bottom: 0.7rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, #00bfff, #0077ff);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.12);
  }
  
  &:hover:after {
    opacity: 1;
  }
`;

function Skills() {
  return (
    <SkillsSection id="skills">
      <SectionTitle>Skills</SectionTitle>
      
      <SkillsContainer>
        <SkillCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CardHeader>
            <IconWrapper><FaCode /></IconWrapper>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <SkillsList>
            {skills.languages.map((skill, index) => (
              <SkillItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </SkillItem>
            ))}
          </SkillsList>
        </SkillCard>
        
        <SkillCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <CardHeader>
            <IconWrapper><FaLayerGroup /></IconWrapper>
            <CardTitle>Frameworks</CardTitle>
          </CardHeader>
          <SkillsList>
            {skills.frameworks.map((skill, index) => (
              <SkillItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </SkillItem>
            ))}
          </SkillsList>
        </SkillCard>
        
        <SkillCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CardHeader>
            <IconWrapper><FaDatabase /></IconWrapper>
            <CardTitle>Databases</CardTitle>
          </CardHeader>
          <SkillsList>
            {skills.databases.map((skill, index) => (
              <SkillItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </SkillItem>
            ))}
          </SkillsList>
        </SkillCard>
        
        <SkillCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <CardHeader>
            <IconWrapper><FaTools /></IconWrapper>
            <CardTitle>Tools</CardTitle>
          </CardHeader>
          <SkillsList>
            {skills.tools.map((skill, index) => (
              <SkillItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </SkillItem>
            ))}
          </SkillsList>
        </SkillCard>
      </SkillsContainer>
    </SkillsSection>
  );
}

export default Skills;