import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Home = () => {
   return (
      <>
         {/* Section Hero */}
         <div className="hero">
            <Container>
               <Row>
                  <Col sm={12} md={6} className="align-self-center">
                     <h1 className="header text-uppercase text-white">Hello, Im Rauliqbal</h1>
                     <h2 className="sub-title text-white">WEB DESIGNER</h2>
                     <hr className="bg-white" />
                     <p className="desc text-white">Freelance Front-End Developer and UI Designer based in Bekasi, Indonesian. Let's Work Together.</p>
                     <div className="cta">
                        <button className="btn btn-primary fw-bold rounded-pill">Get Cv</button>
                        <button className="btn btn-primary fw-bold rounded-pill">Get Cv</button>
                     </div>
                  </Col>
                  <Col sm={12} md={6}>
                     <img className="img-fluid" src="images/hero-img.png" alt="Rauliqbal Front End Developer and UI Designer" />
                  </Col>
               </Row>
            </Container>

            {/* <!-- Waves Large Desktop --> */}
         </div>

         {/* Section About */}
         <section className="about">
            <Container>
               <Row>
                  <Col sm={12} md={6}>
                     <img className="img-fluid" src="images/about-img.png" alt="Im Muhamad Raul Iqbal" />
                  </Col>

                  <Col sm={12} md={6} className="align-self-center">
                     <h3 className="section-title text-uppercase">About Me</h3>
                     <h4 className="title">Web Designer</h4>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
};
