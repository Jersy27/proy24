import { Container, Row , Col } from "react-bootstrap";
import mueble from '../img/muebles.png';
export const Centro = () =>{
    return (
        <section className="Centro" id="pie">
            <Container>
                <Row>
                <Col xs={12} md={6} xl={7}>
                    <h1>BIENVENIDO A LA MUEBLERIA </h1>
                    <span>"NIEVES" </span>
                    <p>Te ofrecemos los mejores muebles de la ciudad de La Paz.
                    </p>
                    <p>Podras encontrar variedad de:
                        <li>
                            <ul>
                                Colores
                            </ul>
                            <ul>
                                Formas
                            </ul>
                            <ul>
                                Estilos
                            </ul>
                           
                        </li>
                        De las mejores marcas, y una costura implacable 
                    </p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={mueble} alt="logo" className="mueble"/>
                </Col>
                </Row>
            </Container>
        </section>
    )
}