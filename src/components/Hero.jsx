import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--bg-primary);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--accent-light) 0%, transparent 70%);
    opacity: 0.4;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 800px;
`;

const Greeting = styled(motion.span)`
  display: inline-block;
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--accent);
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 10vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  span {
    color: var(--accent);
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  max-width: 600px;
`;

const CTA = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: var(--accent);
    color: white;
    
    &:hover {
      background-color: var(--accent-hover);
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border);
    
    &:hover {
      border-color: var(--accent);
      transform: translateY(-2px);
    }
  }
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  
  &:hover .mouse {
    transform: translateY(-3px);
  }
`;

const Mouse = styled.div`
  width: 26px;
  height: 40px;
  border: 2px solid var(--text-tertiary);
  border-radius: 20px;
  position: relative;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background-color: var(--accent);
    border-radius: 2px;
    animation: scroll 1.5s infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 15px);
      opacity: 0;
    }
  }
`;

const ScrollText = styled.span`
  font-size: 0.875rem;
  color: var(--text-tertiary);
`;

function Hero() {
  const scrollRef = useRef(null);
  
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <HeroSection id="home">
      <Container>
        <Content>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </Greeting>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {personalInfo.name.split(' ')[0]} <span>{personalInfo.name.split(' ')[1]}</span>
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.about}
          </Description>
          
          <CTA
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href="#projects" className="primary">View Projects</Button>
            <Button href="#contact" className="secondary">Contact Me</Button>
          </CTA>
        </Content>
      </Container>
      
      <ScrollDown
        ref={scrollRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={handleScroll}
      >
        <Mouse className="mouse" />
        <ScrollText>Scroll down</ScrollText>
      </ScrollDown>
    </HeroSection>
  );
}

export default Hero;