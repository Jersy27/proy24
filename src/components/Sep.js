import { Container, Row , Col } from "react-bootstrap"
import logoU from "../img/logUmsa.png"
export const Sep=()=>{
  return(
    <div className="final">
      <div><h1>CREDITOS</h1></div>
      <div>
        <section>
            <Container>
                <Row>
                  < Col><h3>
                     <span> Carrera: Informatica</span><br></br>
                      <span> Autor: Jessica Adriana Maydana Chambi</span><br>
                      </br>
                      <span> Coordinadora: Dr. Marisol Tellez</span><br></br>
                      <span> Fecha: 12 de diciembre de 2023</span><br></br>
                      <span> Materia: INF122- "A"</span><br></br>
                  </h3>
                 

                  </Col>
                  <Col>
                  <img src={logoU}></img>
                  </Col>
                </Row>
            </Container>
        </section>
      </div>
      <div><h2>LA PAZ- BOLIVIA</h2></div>
    </div>
  )
}