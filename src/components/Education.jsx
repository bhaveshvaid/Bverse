import styled from 'styled-components';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import { FaGraduationCap, FaBook, FaSchool } from 'react-icons/fa';

const EducationSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%);
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background-color: #00bfff;
  }
`;

const EducationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const CardHeader = styled.div`
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.2) 0%, rgba(0, 191, 255, 0.4) 100%);
  padding: 1.5rem;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #00bfff;
  margin-right: 1.5rem;
`;

const HeaderContent = styled.div``;

const Institution = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const Period = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;

const Board = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  color: #00bfff;
  margin-top: 0.3rem;
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const GPA = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #00bfff;
`;

const CoursesTitle = styled.h5`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: #00bfff;
  }
`;

const CoursesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const CourseItem = styled(motion.span)`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 191, 255, 0.2);
    transform: translateY(-2px);
  }
`;

function Education() {
  // Function to determine which icon to use based on education level
  const getEducationIcon = (id) => {
    if (id === 1) return <FaGraduationCap />;
    return <FaSchool />;
  };

  return (
    <EducationSection id="education">
      <SectionTitle>Education</SectionTitle>
      
      <EducationContainer>
        {education.map((edu) => (
          <EducationCard
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardHeader>
              <IconWrapper>
                {getEducationIcon(edu.id)}
              </IconWrapper>
              <HeaderContent>
                <Institution>{edu.institution}</Institution>
                <Degree>{edu.degree}</Degree>
                <Period>{edu.period}</Period>
                {edu.board && <Board>{edu.board}</Board>}
              </HeaderContent>
            </CardHeader>
            <CardBody>
              <GPA>{edu.gpa}</GPA>
              <CoursesTitle>
                <FaBook /> {edu.id === 1 ? "Relevant Coursework" : "Subjects"}
              </CoursesTitle>
              <CoursesList>
                {edu.courses.map((course, index) => (
                  <CourseItem
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {course}
                  </CourseItem>
                ))}
              </CoursesList>
            </CardBody>
          </EducationCard>
        ))}
      </EducationContainer>
    </EducationSection>
  );
}

export default Education;