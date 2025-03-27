import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent 20%, #1e3c72 80%);
    top: 0;
    left: 0;
    opacity: 0.4;
  }
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  z-index: 1;
`;

const Greeting = styled(motion.p)`
  color: #00bfff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  color: #fff;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.primary {
    background: linear-gradient(90deg, #00bfff, #0077ff);
    color: #fff;
    background-size: 200% auto;
    
    &:hover {
      background-position: right center;
      box-shadow: 0 5px 15px rgba(0, 119, 255, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #00bfff;
    }
  }
`;

function Hero() {
  return (
    <HeroSection id="home">
      <Content>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm
        </Greeting>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {personalInfo.name}
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personalInfo.title}
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {personalInfo.about}
        </Description>
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button href="#projects" className="primary">
            View My Work
          </Button>
          <Button href="#contact" className="secondary">
            Contact Me
          </Button>
        </ButtonContainer>
      </Content>
    </HeroSection>
  );
}

export default Hero;