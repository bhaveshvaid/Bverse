import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const FooterSection = styled.footer`
  padding: 2rem 0;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border);
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent);
    color: white;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: var(--text-tertiary);
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background-color: var(--accent-hover);
    transform: translateY(-3px);
  }
  
  &::before {
    content: '↑';
    font-size: 1.25rem;
  }
`;

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterSection>
      <Container>
        <SocialLinks>
          <SocialLink
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialLink>
          
          <SocialLink
            href={`https://linkedin.com/in/${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </SocialLink>
          
          <SocialLink
            href={`mailto:${personalInfo.email}`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        
        <Copyright>&copy; {new Date().getFullYear()} Bhavesh Vaid. All rights reserved.</Copyright>
      </Container>
      
      <ScrollToTop onClick={scrollToTop} />
    </FooterSection>
  );
}

export default Footer;