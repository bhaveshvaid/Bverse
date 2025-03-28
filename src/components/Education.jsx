import styled from 'styled-components';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import { FaGraduationCap, FaBook } from 'react-icons/fa';

const EducationSection = styled.section`
  padding: 5rem 0;
  background-color: var(--bg-secondary);
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

const EducationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const EducationCard = styled(motion.div)`
  position: relative;
  background-color: var(--bg-primary);
  border-radius: 0.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(90deg, var(--accent), var(--accent-hover));
  color: white;
`;

const IconContainer = styled.div`
  font-size: 2rem;
`;

const HeaderContent = styled.div``;

const Institution = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const Degree = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const Period = styled.p`
  font-size: 0.875rem;
  opacity: 0.8;
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const GPA = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--accent-light);
  color: var(--accent);
  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const CoursesTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.75rem;
`;

const CourseItem = styled(motion.div)`
  padding: 0.75rem;
  background-color: var(--bg-tertiary);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent-light);
    color: var(--accent);
    transform: translateY(-2px);
  }
`;

function Education() {
  const edu = education[0]; // Only show college education
  
  return (
    <EducationSection id="education">
      <Container>
        <SectionHeading>Education</SectionHeading>
        
        <EducationContainer>
          <EducationCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardHeader>
              <IconContainer>
                <FaGraduationCap />
              </IconContainer>
              <HeaderContent>
                <Institution>{edu.institution}</Institution>
                <Degree>{edu.degree}</Degree>
                <Period>{edu.period}</Period>
              </HeaderContent>
            </CardHeader>
            
            <CardBody>
              <GPA>{edu.gpa}</GPA>
              
              <CoursesTitle>
                <FaBook /> Relevant Coursework
              </CoursesTitle>
              
              <CoursesGrid>
                {edu.courses.map((course, index) => (
                  <CourseItem
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {course}
                  </CourseItem>
                ))}
              </CoursesGrid>
            </CardBody>
          </EducationCard>
        </EducationContainer>
      </Container>
    </EducationSection>
  );
}

export default Education;