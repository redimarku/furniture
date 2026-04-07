import sofa from '../../assets/sofa.png'
import chair from '../../assets/chair.png'
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './index.css'

const slider = [
  {
    image: sofa,
    title: 'Best Seller',
    name: 'Creative Sofa',
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    button: "Shop now"
  },
  {
    image: chair,
    title: 'New products',
    name: 'Flexible chair',
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    button: "Shop now"
  }
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slider.length;

  const prevSlide = () => {
    setActiveIndex(prev => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex(prev => (prev === total - 1 ? 0 : prev + 1));
  };

useEffect(() => {
  const interval = setInterval(nextSlide, 4000);
  return () => clearInterval(interval);
}, []);


  const activeSlide = slider[activeIndex];

  return (
    <div className='slider'>
    <Container className="pt-5 ">
      <Row>
        <Col xs={12} md={6}>
          <div className="context">
            <h4>{activeSlide.title}</h4>
            <h2>{activeSlide.name}</h2>
            <p>{activeSlide.description}</p>
            <a href="/collection" className="btn">{activeSlide.button}</a>
          </div>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <img src={activeSlide.image} alt={activeSlide.name} />
        </Col>
      </Row>

      {/* Controls */}
      <div className="slider-controls">
        <button onClick={prevSlide} aria-label="Previous slide">&lt;</button>
        <span>{activeIndex + 1} / {total}</span>
        <button onClick={nextSlide} aria-label="Next slide">&gt;</button>
      </div>

      {/* INDICATORS (new) */}
      <div className="slider-dots">
        {slider.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'dot active' : 'dot'}
            onClick={() => setActiveIndex(index)}
        
          />
        ))}
      </div>
    </Container>
    </div>
  );
};

export default Header;
