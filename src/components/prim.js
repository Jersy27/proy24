import meter1 from "../components/navega/im1.jpeg";
import meter2 from "../components/navega/im2.jpeg";
import meter3 from "../components/navega/im3.jpeg";
import meter4 from "../components/navega/im4.jpeg";
import meter5 from "../components/navega/im5.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../components/navega/im4.jpeg"

export const Prim = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>TIPOS DE MUEBLES</h2>
                        <p>Te mostramos la variedad de muebles que tenemos para ti<br></br> Cada uno viene con diferentes colores y modelos</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>ROPERO DE MARMOL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>ESCRITORIO</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>ROPERO CON ESPEJO</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>CAMA</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>MESA DE MARMOL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}