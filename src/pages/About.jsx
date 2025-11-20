import { Anchor, Badge, Col, Container, Row, Image, Carousel, Card } from 'react-bootstrap';
import fam from '../assets/fam.jpg';
import placeholder from '../assets/placeholder.png';
import '../Styles/About.css';

function About() {
    return (
        <Container fluid className="about-container p-4 m-0">
            <Container fluid className="py-4">
                <Row>
                    <Col md="3">
                        <Image className='border border-5' src={fam} alt="Family photo" roundedCircle fluid style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}/>
                    </Col>

                    <Col md="9" className="d-flex flex-column">
                        <Row><h1>About Me</h1></Row>
                        <Row>
                            <p>
                                I'm a multidisciplinary designer and developer who builds thoughtful,
                                accessible digital experiences. I focus on clean layout, clear
                                communication, and practical design systems.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr className='border-5'/>
            <Container fluid className="py-4">
                <Row>
                    <Col md="8">
                        <h1>Jack-of-All-Trades</h1>
                        <p>
                            This block represents a larger content area in the sketch. Use it to
                            tell a story about your background, approach, or highlight key
                            projects. Keep paragraphs short and scannable.
                        </p>
                    </Col>
                    <Col className="p-0">
                        <Carousel className='border border-5 rounded-5' style={{ overflow: 'hidden' }}>
                            <Carousel.Item>
                                <Image height={100} src={placeholder} alt="First slide" fluid />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={placeholder} alt="Second slide" fluid />
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={placeholder} alt="Third slide" fluid />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                
            </Container>
            <br />

            <Container fluid className='border border-5 rounded-5 p-4 mb-4'>
                <h2>Header</h2>
                <p>
                    This block represents a larger content area in the sketch. Use it to
                    tell a story about your background, approach, or highlight key
                    projects. Keep paragraphs short and scannable.
                </p>
            </Container>

            <Container fluid className="py-4">
                <Row className='gx-4'>
                    <Col className='ps-0'>
                        <Card className='text-center border-5 rounded-5 py-4'>
                            <Card.Title><h1>Projects</h1></Card.Title>
                            <hr className='w-75 mx-auto border-3'/>
                            <Card.Text><h3>24</h3></Card.Text>
                        </Card>
                    </Col>
                        
                    <Col >
                        <Card className='text-center border-5 rounded-5 py-4'>
                            <Card.Title><h1>Clients</h1></Card.Title>
                            <hr className='w-75 mx-auto border-3'/>
                            <Card.Text><h3>12</h3></Card.Text>
                        </Card>
                    </Col>
                    <Col className='pe-0'>
                        <Card className='text-center border-5 rounded-5 py-4'>
                            <Card.Title><h1>Years</h1></Card.Title>
                            <hr className='w-75 mx-auto border-3'/>
                            <Card.Text><h3>8</h3></Card.Text>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </Container>
    );
}

export default About;