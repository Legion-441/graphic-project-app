import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GalleryPic from '../../assets/gallery.jpg'
import NextPic from '../../assets/Next.jpg'
import BlogPic from '../../assets/blog.jpg'
import { Link } from 'react-router-dom';

function CardSection () {
  return (
    <div className="d-flex justify-content-around layout">
      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={GalleryPic} />
        <Card.Body>
          <Card.Title>Galeria Inspiracji</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo architecto, quia incidunt cumque inventore numquam labore laborum consequatur eveniet voluptatum harum. Velit aperiam dignissimos totam cupiditate nam incidunt voluptate?
          </Card.Text>
          <Link to={'/InspirationGallery'}>
            <Button variant="primary">Sprawdź galerię inspiracji</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={BlogPic} />
        <Card.Body>
        <Card.Title>Blog</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo architecto, quia incidunt cumque inventore numquam labore laborum consequatur eveniet voluptatum harum. Velit aperiam dignissimos totam cupiditate nam incidunt voluptate?
          </Card.Text>
          <Link to={'/Blog'}>
            <Button variant="primary">Sprawdź nasz blog</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={NextPic} />
        <Card.Body>
        <Card.Title>Lorem ipsum</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo architecto, quia incidunt cumque inventore numquam labore laborum consequatur eveniet voluptatum harum. Velit aperiam dignissimos totam cupiditate nam incidunt voluptate?
          </Card.Text>
          <Link to={'/InspirationGallery'}>
            <Button variant="primary">Lorem ipsum</Button>
          </Link>
        </Card.Body>
      </Card>

    </div>
  );
}

export default CardSection;