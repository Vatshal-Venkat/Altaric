import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsContainer = styled.section`
  padding: 4rem 0 3rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.02) 0%, transparent 50%);
  pointer-events: none;
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06));
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const FloatingTriangle = styled(motion.div)`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 12px solid rgba(0, 0, 0, 0.04);
`;

const FloatingSquare = styled(motion.div)`
  position: absolute;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transform: rotate(45deg);
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #000, #333);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TestimonialsCarousel = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 4rem 3rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent, rgba(0, 0, 0, 0.02), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: rgba(0, 0, 0, 0.1);
  font-size: 4rem;

  @media (max-width: 768px) {
    top: 1.5rem;
    left: 1.5rem;
    font-size: 3rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #000, #333);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.25rem;
`;

const AuthorTitle = styled.p`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

const StarIcon = styled(Star)`
  color: #ffd700;
  fill: #ffd700;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`;

const NavButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Testimonials = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Veltris transformed our manufacturing process with their AI solutions. We've seen a 40% increase in efficiency and significant cost savings. Their team's expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      title: "CTO, TechCorp Industries",
      rating: 5
    },
    {
      text: "Working with Veltris has been a game-changer for our healthcare platform. Their AI-powered diagnostics have improved our accuracy rates dramatically while reducing processing time by 60%.",
      author: "Dr. Michael Chen",
      title: "Chief Medical Officer, HealthTech Solutions",
      rating: 5
    },
    {
      text: "The AI solutions from Veltris have revolutionized our customer service operations. We've achieved 99% customer satisfaction while reducing response times by 80%. Exceptional results!",
      author: "Emily Rodriguez",
      title: "VP of Operations, RetailPlus",
      rating: 5
    },
    {
      text: "Altaric delivered an innovative AI solution that exceeded our expectations. Their deep understanding of our industry and cutting-edge technology implementation has given us a competitive edge.",
      author: "David Thompson",
      title: "CEO, FinTech Innovations",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <TestimonialsContainer ref={containerRef} id="testimonials">
      <BackgroundGradient />
      
      <FloatingShapes>
        {/* Floating circles */}
        <FloatingShape
          style={{ width: '60px', height: '60px', top: '10%', left: '10%' }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <FloatingShape
          style={{ width: '40px', height: '40px', top: '20%', right: '15%' }}
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <FloatingShape
          style={{ width: '80px', height: '80px', bottom: '20%', left: '20%' }}
          animate={{
            y: [0, -50, 0],
            x: [0, 40, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Floating triangles */}
        <FloatingTriangle
          style={{ top: '30%', left: '5%' }}
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
            rotate: [0, 120, 240],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <FloatingTriangle
          style={{ top: '60%', right: '10%' }}
          animate={{
            y: [0, -35, 0],
            x: [0, -20, 0],
            rotate: [0, -120, -240],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Floating squares */}
        <FloatingSquare
          style={{ width: '20px', height: '20px', top: '15%', left: '60%' }}
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            rotate: [45, 225, 405],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <FloatingSquare
          style={{ width: '30px', height: '30px', bottom: '30%', right: '25%' }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [45, -135, -315],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </FloatingShapes>
      
      <ContentWrapper>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionTitle>What Our Customers Say</SectionTitle>
          <SectionSubtitle>
            Hear from our clients about the transformative impact of our AI solutions on their businesses.
          </SectionSubtitle>
        </SectionHeader>

        <TestimonialsCarousel>
          <TestimonialCard
            as={motion.div}
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="interactive"
          >
            <QuoteIcon>
              <Quote size={60} />
            </QuoteIcon>
            <TestimonialText>
              {testimonials[currentIndex].text}
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
              </AuthorAvatar>
              <AuthorInfo>
                <AuthorName>{testimonials[currentIndex].author}</AuthorName>
                <AuthorTitle>{testimonials[currentIndex].title}</AuthorTitle>
                <Rating>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} size={16} />
                  ))}
                </Rating>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>

          <NavigationButtons>
            <NavButton
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="interactive"
            >
              <ChevronLeft size={24} />
            </NavButton>
            <NavButton
              onClick={nextTestimonial}
              disabled={currentIndex === testimonials.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="interactive"
            >
              <ChevronRight size={24} />
            </NavButton>
          </NavigationButtons>
        </TestimonialsCarousel>
      </ContentWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials; 