import { Container, Row , Col } from "react-bootstrap";
import ReacPlayer from 'react-player';
export const Cuar =() =>{
  return(
    <div className='video' >
      <div>
         <div className='video'>
      <h1>NUESTRA PRESENTACION</h1>
     
     
      </div>
      <div>
      <section className="" id="">
            <Container>
                <Row>
                <Col xs={12} md={6} xl={7}>
                <p>Los mejores trabajos con las personas adecuadas, una precision incomparable y un amor por el trabajo. Muebleria Nieves
                   ya trabajamos varios anios en esto... por eso podemos ofrecer el mejor de los servicios</p>  
                </Col>
                <Col xs={12} md={6} xl={5}>
                <ReacPlayer 
        url='https://youtu.be/Y9adKEfszGg?si=Ziy90ZtJOkIU8NMW' width="510px" height="430px">
      
      
               </ReacPlayer> 
                </Col>
                </Row>
            </Container>
        </section>
        
      </div>
      <div>
          <h4>Manda el mueble de tus suenios y nosotros lo realizaremos</h4>
      </div>
     
    </div>
    </div>
   
    
  )
}