import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const SkillsSection = styled.section`
  padding: 5rem 0;
  background-color: var(--bg-primary);
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeading = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 700;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 3rem;
    height: 0.25rem;
    background-color: var(--accent);
  }
`;

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const MernBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, var(--accent), var(--accent-hover));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 3rem;
  box-shadow: 0 4px 12px rgba(0, 153, 255, 0.2);
  
  &::before {
    content: '●';
    margin-right: 0.5rem;
    font-size: 0.75rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

const TagButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--accent)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--accent)' : 'var(--border)'};
  border-radius: 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: var(--accent);
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 0.5rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const ProgressContainer = styled.div`
  height: 0.5rem;
  background-color: var(--bg-tertiary);
  border-radius: 0.25rem;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-hover));
  border-radius: 0.25rem;
  width: ${props => props.width}%;
  transition: width 1s ease;
`;

function Skills() {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'languages', name: 'Languages' }
  ];
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);
  
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionHeading>My Skills</SectionHeading>
        
        <SkillsContainer>
          <MernBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            MERN Stack Developer
          </MernBadge>
          
          <TagsContainer>
            {categories.map(category => (
              <TagButton
                key={category.id}
                active={filter === category.id}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </TagButton>
            ))}
          </TagsContainer>
          
          <SkillsList>
            {filteredSkills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                </SkillHeader>
                <ProgressContainer>
                  <Progress width={skill.level} />
                </ProgressContainer>
              </SkillItem>
            ))}
          </SkillsList>
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
}

export default Skills;