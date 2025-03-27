import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -10%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,191,255,0.03) 0%, transparent 70%);
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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 400px;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid #00bfff;
    border-radius: 8px;
    z-index: -1;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    top: 10px;
    left: 10px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${ImageContainer}:hover & {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #00bfff, transparent);
  }
`;

const RolesTitle = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #00bfff, transparent);
  }
`;

const RolesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RoleItem = styled(motion.li)`
  padding: 0.7rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
  transition: all 0.3s ease;
  
  &:before {
    content: '•';
    color: #00bfff;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: 0.5rem;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #333;
    transform: translateX(5px);
  }
  
  &:hover:before {
    color: #0077ff;
  }
`;

function About() {
  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      
      <Container>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image src="/images/profile.jpg" alt="Bhavesh Vaid" />
        </ImageContainer>
        
        <ContentContainer>
          <AboutText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {personalInfo.about}
          </AboutText>
          
          <RolesTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Leadership & Roles
          </RolesTitle>
          
          <RolesList>
            {personalInfo.roles.map((role, index) => (
              <RoleItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {role}
              </RoleItem>
            ))}
          </RolesList>
        </ContentContainer>
      </Container>
    </AboutSection>
  );
}

export default About;