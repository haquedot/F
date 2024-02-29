import Container from 'react-bootstrap/Container';
import { Row, Col, Card } from 'react-bootstrap';
import "../styles/style-HeroSection.css"


function HeroSection() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={7}>
                        <Card className='hero_card mb-4 mb-lg-0'>
                            <img src="./public/images/hero-1.jpg" alt="" srcset="" className='w-100' />
                            <div className="hero_card_content">
                                <span>100% Farm Fresh Food</span>
                                <h1>
                                    Farm on Hand
                                </h1>
                                <h5>Fresh from the Fields</h5>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={5} className='right_card'>
                        <Card className='hero_card'>
                            <img src="./public/images/hero-2.jpg" alt="" srcset="" className='w-100' />
                            <div className="hero_card_content_2">
                                Farm on Hand
                            </div>
                        </Card>
                        <Row>
                            <Col md={6}>
                                <Card className='hero_card  mb-4 mb-md-0'>
                                    <img src="./public/images/hero-3.jpg" alt="" srcset="" className='w-100' />
                                    <div className="hero_card_content_3">
                                        <p>Farm on Hand</p>
                                        <p>Buy</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='hero_card'>
                                    <img src="./public/images/hero-4.jpg" alt="" srcset="" className='w-100' />
                                    <div className="hero_card_content_3">
                                        <p>Farm on Hand</p>
                                        <p>Buy</p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default HeroSection;
