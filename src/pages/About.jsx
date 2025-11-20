import { Badge, Col, Container, Row, Image, Carousel, Card } from 'react-bootstrap';
import {Placeholder, Fam} from '../assets/index.js';
import '../Styles/About.css';

function About() {
    return (
        <Container fluid className="about-container p-4 m-0">
            <Container fluid className="py-4">
                <Row>
                    <Col md="3">
                        <Image className='border border-5' src={Fam} alt="Family photo" roundedCircle fluid style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}/>
                    </Col>

                    <Col md="9" className="d-flex flex-column">
                        <Row><h1>About Me</h1></Row>
                        <Row>
                            <p>
                                I'm a multidisciplinary designer and developer who builds thoughtful,
                                accessible digital experiences. I focus on clean layouts, clear
                                communication, and practical design systems.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr className='border-5'/>
            <Container fluid className="py-4">
                <Row>
                    <Col>
                        <h2>A man of many talents</h2>
                        <p>
                            This block represents a larger content area in the sketch. Use it to
                            tell a story about your background, approach, or highlight key
                            projects. Keep paragraphs short and scannable.
                        </p>
                    </Col>
                    <Col lg="5" md="6" sm="12" className="p-0" >
                        <Carousel className='border border-5 rounded-5' style={{ overflow: 'hidden', aspectRatio: '1.5/1'}}>
                            <Carousel.Item>
                                <Image src={Placeholder} alt="First slide" fluid style={{width: '100%', objectFit: 'cover'}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={Placeholder} alt="Second slide" fluid style={{width: '100%', objectFit: 'cover'}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={Placeholder} alt="Third slide" fluid style={{width: '100%', objectFit: 'cover'}}/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                
            </Container>
            <p>My full list of skills includes (sorted by relevance): 
                {[ 
                    'HTML/CSS/JavaScript',
                    'React',
                    'Python',
                    'C#',
                    'Java',
                    'Kotlin',
                    'Jetpack Compose',
                    '.NET',
                    'SQL',
                    'Git',
                    'Linux',
                    'Windows Admin',
                    'Networking',
                    'Cybersecurity',
                    'Excel',
                    'Adobe Photoshop/Illustrator',
                    'Fusion 360',
                    'Electronics (Design and assembly)',
                    'Piano',
                    'Skateboarding',
                    'Leather Working',
                    'Woodworking',
                    'Cooking',
                    'Baking'
                ].map(skill => (
                    <Badge pill key={skill} bg="secondary" className="m-1">{skill}</Badge>
                ))}
            </p>
            <br />

            <Container fluid className='border border-5 rounded-5 p-4 mb-4'>
                <h2>The next step for me...</h2>
                <p>
                    After I complete my two years at NSCC, I intend to change career paths and enlist in the Canadian
                    Armed Forces as a Vehicle Technician. I've always wanted to work on vehicles as much as I've wanted to work in IT, 
                    and now that I've tried IT, I feel confident in my decision. I look forward to serving my country and continuing to grow both personally and professionally.
                </p>
            </Container>

            <Container fluid className="py-4 px-0">
                <Row className='gx-4'>
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <Card className='text-center border-5 rounded-5 py-4'>
                            <Card.Title><h2>Projects</h2></Card.Title>
                            <hr className='w-75 mx-auto border-3'/>
                            <Card.Text><p>24</p></Card.Text>
                        </Card>
                    </Col>
                        
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <Card className='text-center border-5 rounded-5 py-4'>
                            <Card.Title><h2>Clients</h2></Card.Title>
                            <hr className='w-75 mx-auto border-3'/>
                            <Card.Text><p>12</p></Card.Text>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <Card className='text-center border-5 rounded-5 py-4'>
                            <Card.Title><h2>Years</h2></Card.Title>
                            <hr className='w-75 mx-auto border-3'/>
                            <Card.Text><p>8</p></Card.Text>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </Container>
    );
}

export default About;