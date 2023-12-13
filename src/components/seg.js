import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Ter } from "./Ter";
import projImg1 from "../components/navega/im2.jpeg";
import projImg2 from "../components/navega/im3.jpeg";
import projImg3 from "../components/navega/im4.jpeg";
import projImg4 from "../components/navega/im5.jpeg";
import projImg5 from "../components/navega/im6.jpeg";
import projImg6 from "../components/navega/im1.jpeg";



import colorSharp2 from "../components/navega/im5.jpeg";



export const Seg = () => {

  const Seg= [
    {
      title: "40%",
      description: "ESCRITORIO",
      imgUrl: projImg1,
    },
    {
      title: "20%",
      description: "ROPERO",
      imgUrl: projImg2,
    },
    {
      title: "30%",
      description: "CAMA",
      imgUrl: projImg3,
    },
    
  ];
  const Seg1= [
    {
      title: "2000bs",
      description: "MESA GRANDE",
      imgUrl: projImg4,
    },
    {
      title: "600bs",
      description: "SILLON",
      imgUrl: projImg5,
    },
    {
      title: "4000bs",
      description: "ROPERO",
      imgUrl: projImg6,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            
              <div className={''}>
                <h2>COMPRAS</h2>
                <p>Ofrecemos los mejores descuentos y promociones este 2023</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Descuentos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Promociones</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={''}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Seg.map((seg, index) => {
                            return (
                              <Ter
                                key={index}
                                {...seg}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className="img2">
                      <Row>
                        {
                          Seg1.map((seg, index) => {
                            return (
                              <Ter
                                key={index}
                                {...seg}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}