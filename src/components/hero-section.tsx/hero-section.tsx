import Carousel from 'react-bootstrap/Carousel';
import HeroImg1 from '../../assets/hero1.jpg'
import HeroImg2 from '../../assets/hero2.jpg'
import HeroImg3 from '../../assets/hero3.jpg'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function HeroSection () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-picture"
          src={HeroImg3}
          alt="Third slide"
        />

        <Carousel.Caption className="description-margin">
          <h3 className="description-text-colour heading-font-size">Mamy zdjęcia, których szukasz</h3>
          <Link to={'/InspirationGallery'} className="link-color">
            <p className="description-text-colour paragraph-text-size">Sprawdź naszą galerię</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-picture"
          src={HeroImg1}
          alt="First slide"
        />
        <Carousel.Caption className="description-margin">
          <h3 className="heading-font-size">Sprawdź nowości</h3>
          <Link to={'/Blog'} className="link-text-color">
            <p  className="paragraph-text-size">Odwiedź nasz blog</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-picture"
          src={HeroImg2}
          alt="Second slide"
        />

        <Carousel.Caption className="description-margin">
          <h3 className="description-text-colour heading-font-size">Lorem ipsum</h3>
          <Link to={'/InspirationGallery'} className="link-color">
            <p className="description-text-colour paragraph-text-size">Lorem Ipsum</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}


export default HeroSection;