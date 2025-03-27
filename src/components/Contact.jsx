import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f6f9fc 0%, #e6f0f9 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(0,191,255,0.1) 0%, transparent 70%);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  
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

const ContactContainer = styled.div`
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

const ContactInfo = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #00bfff, transparent);
  }
`;

const InfoText = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #555;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00bfff, #0077ff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 1rem;
  transition: all 0.3s ease;
  
  ${ContactItem}:hover & {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 119, 255, 0.3);
  }
`;

const ContactLink = styled.a`
  color: #555;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00bfff;
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #00bfff, #0077ff);
  }
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #00bfff;
    box-shadow: 0 0 0 3px rgba(0, 191, 255, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #00bfff;
    box-shadow: 0 0 0 3px rgba(0, 191, 255, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #00bfff, #0077ff);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background-size: 200% auto;
  
  &:hover {
    background-position: right center;
    box-shadow: 0 5px 15px rgba(0, 119, 255, 0.3);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #cccccc, #a0a0a0);
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 4px;
  
  &.success {
    background: linear-gradient(135deg, rgba(0, 200, 0, 0.1), rgba(0, 150, 0, 0.1));
    color: green;
    border-left: 3px solid green;
  }
  
  &.error {
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(200, 0, 0, 0.1));
    color: red;
    border-left: 3px solid red;
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
    
    // Replace with your EmailJS service ID, template ID, and public key
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    })
    .catch(() => {
      setStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again.'
      });
      setLoading(false);
    });
  };
  
  return (
    <ContactSection id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      
      <ContactContainer>
        <ContactInfo>
          <InfoTitle>Get In Touch</InfoTitle>
          <InfoText>
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </InfoText>
          
          <ContactDetails>
            <ContactItem>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <ContactLink href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </ContactLink>
            </ContactItem>
            
            <ContactItem>
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <ContactLink href={`tel:${personalInfo.phone}`}>
                {personalInfo.phone}
              </ContactLink>
            </ContactItem>
            
            <ContactItem>
              <IconWrapper>
                <FaGithub />
              </IconWrapper>
              <ContactLink href={`https://github.com/${personalInfo.github}`} target="_blank">
                github.com/{personalInfo.github}
              </ContactLink>
            </ContactItem>
            
            <ContactItem>
              <IconWrapper>
                <FaLinkedin />
              </IconWrapper>
              <ContactLink href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank">
                linkedin.com/in/{personalInfo.linkedin}
              </ContactLink>
            </ContactItem>
          </ContactDetails>
        </ContactInfo>
        
        <ContactForm
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
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
            <FormMessage className={status.success ? 'success' : 'error'}>
              {status.message}
            </FormMessage>
          )}
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;