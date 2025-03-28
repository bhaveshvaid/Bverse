import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/experience';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, var(--accent), var(--accent-light));
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    width: 50%;
    
    &:nth-child(odd) {
      left: 0;
      padding-right: 3rem;
      
      .timeline-dot {
        right: -10px;
      }
      
      .timeline-content::before {
        right: -15px;
        border-width: 10px 0 10px 15px;
        border-color: transparent transparent transparent var(--bg-tertiary);
      }
    }
    
    &:nth-child(even) {
      left: 50%;
      padding-left: 3rem;
      
      .timeline-dot {
        left: -10px;
      }
      
      .timeline-content::before {
        left: -15px;
        border-width: 10px 15px 10px 0;
        border-color: transparent var(--bg-tertiary) transparent transparent;
      }
    }
  }
  
  @media (max-width: 767px) {
    padding-left: 3rem;
    
    .timeline-dot {
      left: -10px;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--accent);
  border-radius: 50%;
  top: 15px;
  z-index: 2;
  
  @media (min-width: 768px) {
    top: 20px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background-color: rgba(0, 153, 255, 0.2);
    border-radius: 50%;
  }
`;

const TimelineContent = styled.div`
  position: relative;
  padding: 1.5rem;
  background-color: var(--bg-tertiary);
  border-radius: 0.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    border-style: solid;
    
    @media (max-width: 767px) {
      left: -15px;
      border-width: 10px 15px 10px 0;
      border-color: transparent var(--bg-tertiary) transparent transparent;
    }
  }
`;

const CompanyLogo = styled.div`
  position: absolute;
  top: -20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.25rem;
  
  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const CompanyName = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--accent);
`;

const Period = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Location = styled.span`
  display: flex;
  align-items: center;
  
  &::before {
    content: '•';
    margin-right: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ResponsibilityItem = styled.li`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
  color: var(--text-secondary);
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.25rem;
    height: 0.25rem;
    background-color: var(--accent);
    border-radius: 50%;
  }
`;

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  
  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionHeading>Experience</SectionHeading>
        
        <Timeline style={{ opacity }}>
          {experience.map((job, index) => (
            <TimelineItem
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TimelineDot className="timeline-dot" />
              
              <TimelineContent className="timeline-content">
                <CompanyLogo>
                  <img src={job.logo} alt={job.company} />
                </CompanyLogo>
                
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
                <Period>
                  {job.period}
                  <Location>{job.location}</Location>
                </Period>
                
                <Description>{job.description}</Description>
                
                <ResponsibilitiesList>
                  {job.responsibilities.map((item, i) => (
                    <ResponsibilityItem key={i}>{item}</ResponsibilityItem>
                  ))}
                </ResponsibilitiesList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
}

export default Experience;