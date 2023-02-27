import {useState, useEffect} from "react"
import { Navbar, Container, Nav} from "react-bootstrap"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../assets/img/Logo-LGS.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"


export const NavBar = () => {
 const [activeLink, setActiveLink]= useState('home');
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {

    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
 }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)},[]);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return(
        
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="logoNav" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/lucas-soria-g/" target="_blank" ><img src={navIcon1} alt="" /> </a>
                <a href="https://github.com/LG-Soria"  target="_blank" ><img src={navIcon2} alt="" /> </a>
                <a href="https://twitter.com/_LSoria" target="_blank"><img src={navIcon3} alt="" /> </a>

            </div>

            <button className="vvd" onClick={() => console.log('connect')}><span>Conectemosnos!</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
