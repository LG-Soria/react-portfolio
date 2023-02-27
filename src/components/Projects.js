import {Col, Container, Tab, Nav, Row} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

   const projects = [

        {
            title: "Food Ordering App",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Portfolio React",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Computer Store",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Pagina del Clima",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Aplicacion para DT's",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Tienda de ropa",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Proyectos</h2>
                        <p>Estos proyectos son algunos donde pongo en practica mis herramientas y otros que fueron hecho para trabajos freelance.</p>
                       
                        </div>}
                        </TrackVisibility>
                         <Tab.Container id="projects-tabs" >
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Pagina 1</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index)  =>{
                                        return(
                                        <ProjectCard
                                        key={index}
                                        {...project} 
                                        />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
<img className="background-image-right" src={colorSharp2}></img>

        </section>

    )
}