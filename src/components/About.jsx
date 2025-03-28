// src/components/About.jsx
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { personalInfo } from '../data/personalInfo';

const AboutSection = styled.section`
  padding: 7rem 0;
  background: var(--bg-secondary);
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 350px) 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  box-shadow: var(--shadow-lg);
  border-radius: 12px;
  overflow: hidden;
  
  &::before {
    content: '';
    display: block;
    padding-top: 125%; /* 4:5 aspect ratio */
  }
  
  @media (max-width: 768px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.5s ease;
  
  ${ImageContainer}:hover & {
    transform: scale(1.03);
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
`;

const RolesTitle = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
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

const RolesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RoleItem = styled(motion.li)`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1.25rem;
  color: var(--text-secondary);
  
  &::before {
    content: '';
    position: absolute;
    top: 0.75rem;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--accent);
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        
        <ContentWrapper>
          <ImageContainer
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProfileImage src="/images/profile.jpg" alt="Bhavesh Vaid" />
          </ImageContainer>
          
          <ContentBox>
            <AboutText
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {personalInfo.about}
            </AboutText>
            
            <RolesTitle
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Leadership Roles
            </RolesTitle>
            
            <RolesList>
              {personalInfo.roles.map((role, index) => (
                <RoleItem
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {role}
                </RoleItem>
              ))}
            </RolesList>
          </ContentBox>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;