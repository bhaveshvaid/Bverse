import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f6f9fc 0%, #f0f4f8 100%);
  position: relative;
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

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #00bfff, #0077ff);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 1rem 0;
  position: relative;
  width: 100%;
  display: flex;
  
  @media (max-width: 768px) {
    padding-left: 60px;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
  
  ${({ isEven }) => isEven && `
    margin-left: auto;
  `}
  
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0 !important;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    background: linear-gradient(to right, white, #f8fbff);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00bfff, #0077ff);
    z-index: 1;
    box-shadow: 0 0 0 4px rgba(0, 191, 255, 0.2);
    transition: all 0.3s ease;
    
    ${({ isEven }) => isEven ? `
      left: -60px;
    ` : `
      right: -60px;
    `}
    
    @media (max-width: 768px) {
      left: -50px;
    }
  }
  
  &:hover:before {
    box-shadow: 0 0 0 6px rgba(0, 191, 255, 0.3);
    transform: scale(1.1);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 22px;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #00bfff, #0077ff);
    z-index: 0;
    
    ${({ isEven }) => isEven ? `
      left: -40px;
    ` : `
      right: -40px;
    `}
    
    @media (max-width: 768px) {
      left: -30px;
      width: 30px;
    }
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #00bfff, transparent);
  }
`;

const Company = styled.h4`
  font-size: 1.1rem;
  color: #00bfff;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00bfff, #0077ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: #00bfff;
  }
`;

const Description = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Responsibilities = styled.ul`
  padding-left: 1.2rem;
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &:before {
      content: '•';
      color: #00bfff;
      position: absolute;
      left: -1rem;
    }
  }
`;

function Experience() {
  return (
    <ExperienceSection id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      
      <Timeline>
        {experience.map((job, index) => (
          <TimelineItem 
            key={job.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TimelineContent isEven={index % 2 === 0}>
              <JobTitle>{job.title}</JobTitle>
              <Company>{job.company}</Company>
              <Meta>
                <MetaItem>
                  <FaCalendarAlt /> {job.period}
                </MetaItem>
                <MetaItem>
                  <FaMapMarkerAlt /> {job.location}
                </MetaItem>
              </Meta>
              <Description>{job.description}</Description>
              <Responsibilities>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </Responsibilities>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
}

export default Experience;