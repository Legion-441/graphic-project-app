import Carousel from 'react-bootstrap/Carousel';
import HeroImg1 from '../../assets/hero1.jpg'
import HeroImg2 from '../../assets/hero2.jpg'
import HeroImg3 from '../../assets/hero3.jpg'


function HeroSection () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>If photography is your passion</h3>
          <p>Show us what's on your mind</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Have fun with friends</h3>
          <p>And share with us your emotions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>We have pictures you are looking for</h3>
          <p>
            Check out our gallery
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;