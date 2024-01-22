import "./home.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.herzindagi.info/image/2023/Jan/manicure-main.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/53f1e2cee4b08227236e310d/1454931238490-WKM9A3G9PP8LVLGPHL9N/hands+and+feet.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://youbodymind.com.br/wp-content/uploads/2022/08/foot-washing-in-spa-before-treatment-spa-treatment-and-product-for-female-feet-and-hand-spa.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
