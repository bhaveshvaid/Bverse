import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 3rem 2rem 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom left, rgba(255,255,255,0.05) 0%, transparent 50%);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const LogoContainer = styled.div`
  margin-bottom: 2rem;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fff, #00bfff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: #aaa;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00bfff, transparent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #00bfff;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00bfff;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: #888;
  text-align: center;
  font-size: 0.9rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #00bfff, transparent);
  }
`;

const ScrollTop = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #00bfff, #0077ff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 119, 255, 0.3);
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
      <FooterContent>
        <LogoContainer>
          <Logo>Bhavesh Vaid</Logo>
        </LogoContainer>
        
        <Navigation>
          <NavItem><NavLink href="#home">Home</NavLink></NavItem>
          <NavItem><NavLink href="#about">About</NavLink></NavItem>
          <NavItem><NavLink href="#skills">Skills</NavLink></NavItem>
          <NavItem><NavLink href="#experience">Experience</NavLink></NavItem>
          <NavItem><NavLink href="#projects">Projects</NavLink></NavItem>
          <NavItem><NavLink href="#education">Education</NavLink></NavItem>
          <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
        </Navigation>
        
        <SocialLinks>
          <SocialLink href={`https://github.com/${personalInfo.github}`} target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href={`mailto:${personalInfo.email}`}>
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Bhavesh Vaid. All rights reserved.
        </Copyright>
      </FooterContent>
      
      <ScrollTop onClick={scrollToTop}>
        <FaArrowUp />
      </ScrollTop>
    </FooterSection>
  );
}

export default Footer;