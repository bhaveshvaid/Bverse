import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div``;

const InfoHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 1.5rem;
  
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--accent);
      transform: translateX(5px);
    }
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-light);
  color: var(--accent);
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  ${ContactItem} a:hover & {
    background-color: var(--accent);
    color: white;
  }
`;

const FormContainer = styled(motion.div)`
  background-color: var(--bg-secondary);
  border-radius: 0.25rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-light);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-light);
  }
`;

const SubmitButton = styled.button`
  padding: 0.875rem 1.5rem;
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: var(--text-tertiary);
    cursor: not-allowed;
    transform: none;
  }
`;

const MessageStatus = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  
  &.success {
    background-color: rgba(0, 200, 0, 0.1);
    color: #00aa00;
  }
  
  &.error {
    background-color: rgba(255, 0, 0, 0.1);
    color: #aa0000;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission - replace with actual EmailJS implementation
    setTimeout(() => {
      setStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeading>Contact</SectionHeading>
        
        <ContactContainer>
          <ContactInfo>
            <InfoHeading>Get In Touch</InfoHeading>
            <InfoText>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'll get back to you as soon as possible.
            </InfoText>
            
            <ContactList>
              <ContactItem>
                <a href={`mailto:${personalInfo.email}`}>
                  <IconWrapper>
                    <FaEnvelope />
                  </IconWrapper>
                  {personalInfo.email}
                </a>
              </ContactItem>
              
              <ContactItem>
                <a href={`tel:${personalInfo.phone}`}>
                  <IconWrapper>
                    <FaPhone />
                  </IconWrapper>
                  {personalInfo.phone}
                </a>
              </ContactItem>
              
              <ContactItem>
                <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                  <IconWrapper>
                    <FaGithub />
                  </IconWrapper>
                  github.com/{personalInfo.github}
                </a>
              </ContactItem>
              
              <ContactItem>
                <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <IconWrapper>
                    <FaLinkedin />
                  </IconWrapper>
                  linkedin.com/in/{personalInfo.linkedin}
                </a>
              </ContactItem>
            </ContactList>
          </ContactInfo>
          
          <FormContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Form ref={formRef} onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </SubmitButton>
              
              {status.submitted && (
                <MessageStatus className={status.success ? 'success' : 'error'}>
                  {status.message}
                </MessageStatus>
              )}
            </Form>
          </FormContainer>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
}

export default Contact;