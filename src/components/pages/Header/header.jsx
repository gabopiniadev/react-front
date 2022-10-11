import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/img-1.jpg';
import img2 from '../../img/img-2.jpg';
import img3 from '../../img/img-3.jpg';

function Header() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ img1 }
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>#</h3>
          <p>#.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ img2 }
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>#</h3>
          <p>#</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ img3 }
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>#</h3>
          <p>
            #
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default Header;