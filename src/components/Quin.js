
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagen1 from '../img/sil.png';

export const Quin = ()=>{
  const formInitialDetails = {
    NOMBRE: '',
    APELLIDOS: '',
    CORREO: '',
    CELULAR: '',
    MENSAJE: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  
  return(
    <div className="gen5">
      <div className="formu">
        <h1>CONTACTO E INFORMACION</h1>
        
      </div>
      <div>
      <section className="" id="">
            
                
                <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <p>LLena el siguiente formulario para que nosotros te podamos informar sobre las nuevas  novedades en sillones, camas, roperos, mesas, escritorios y demas. </p>
                <img src={imagen1}></img>
          </Col>
          <Col size={12} md={6}>
           
                <div className={""}>
                <h2>FORMULARIO</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('NOMBRE', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Apellido" onChange={(e) => onFormUpdate('APELLIDOS', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Correo" onChange={(e) => onFormUpdate('CORREO', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Cel" onChange={(e) => onFormUpdate('CELULAR', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('MENSAJE', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
             
        </section>
      </div>
      <div className="forf">
                    Para mas informacion contactanos a MuebleSnieves@gmail.com
      </div>
    </div>
  )
}