
import { Navbar,Container,Nav } from "react-bootstrap";
import { useState,useEffect } from "react";
import logo from '../img/muebles.png';
import {
  BrowserRouter as Router
} from "react-router-dom";
export const NavBar1= () =>{

    const [scrolled,setScrolled] = useState(false);
    const [activeLink, setActiveLink]=useState('home');
    useEffect(()=>{
      const onScroll = () =>{
        if(window.scrollY > 50){
          setScrolled(true);
        }else{
          setScrolled(true);
        }
      }
      window.addEventListener("scroll", onScroll);
      return ()=> window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value)=>{
      setActiveLink(value);
    }
    return(
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="/">
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggles-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'Centro' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('Centro')}>INICIO</Nav.Link>
            <Nav.Link href="#prim" className={activeLink === 'Prim' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('Prim')}>TIPOS</Nav.Link>
            <Nav.Link href="#seg" className={activeLink === 'Seg' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('Seg')}>COMPRAS F.</Nav.Link>
            <Nav.Link href="#seg" className={activeLink === 'Cuar' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('Cuar')}>PRESENT.</Nav.Link>
            <Nav.Link href="#seg" className={activeLink === 'Quin' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('Quin')}>COMPRAS ON</Nav.Link>
          </Nav>
          <span className="navBar-text">
            <div>
              <a href="#" ><img src={''} alt=""/></a>
            </div>
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </Router>
        
    )
}