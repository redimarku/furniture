import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap"
import policy1 from '../../assets/policy1.png';
import policy2 from '../../assets/policy2.png';
import policy3 from '../../assets/24-hour-service.svg';


const OurPolicy = () =>{

    return(
        <>
            <Container fluid className="text-center p-3" style={{backgroundColor:"#F2F5FF"}}>
                <Row>
                    <Col md={4} >
                        <Image src={policy1} alt={policy1} style={{width:"100px", height:"100px" }}/>
                        <h5>7 Days Return Policy</h5>
                        <span>We provide 7 days free return policy</span>
                    </Col>
                       <Col md={4} >
                        <Image src={policy2} alt={policy1} style={{width:"100px", height:"100px" }} />
                        <h5>Free Delivery</h5>
                        <span>We provide 7 days free return policy</span>
                    </Col>
                       <Col md={4} >
                        <Image src={policy3} alt={policy1} style={{width:"100px", height:"100px" }} />
                        <h5>Support 24/7</h5>
                        <span>We provide 7 days free return policy</span>
                    </Col>
                </Row>
            </Container>   
        </>
    )
}

export default OurPolicy;