import { Badge, Col, Container, Row, Image, Carousel, Card } from 'react-bootstrap';
import {Placeholder, Fam, Printing, Award, GasMask, Linux, NeedleGun} from '../assets/index.js';
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
                                I’m a Nova Scotian with roots in Turkey, currently studying Programming. Driven by curiosity and a love for learning, I thrive on tackling challenges and mastering new skills. Technology is my foundation, but versatility is my brand—I’m passionate about blending creativity, problem-solving, and hands-on expertise to make an impact.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr className='border-5'/>
            <Container fluid className="py-4">
                <Row>
                    <Col>
                        <h2>A Jack of All Trades</h2>
                        <p>
                            Over the years, I’ve cultivated a diverse skill set that spans both formal education and self-driven exploration. From writing clean, efficient code to crafting leather goods and welding metal, I approach every discipline with professionalism and precision. My adaptability and eagerness to learn allow me to excel in environments that demand both technical knowledge and creative thinking.
                        </p>
                    </Col>
                    <Col lg="5" md="6" sm="12" className="p-0" >
                        <Carousel className='border border-5 rounded-5' style={{ overflow: 'hidden', aspectRatio: '1.5/1'}}>
                            <Carousel.Item className='w-100 h-100'>
                                <Image src={Printing} alt="First slide" fluid style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} onClick={() => window.open(Printing, '_blank')}/>
                            </Carousel.Item>
                            <Carousel.Item className='w-100 h-100'>
                                <Image src={Award} alt="Second slide" fluid style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} onClick={() => window.open(Award, '_blank')}/>
                            </Carousel.Item>
                            <Carousel.Item className='w-100 h-100'>
                                <Image src={GasMask} alt="Third slide" fluid style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} onClick={() => window.open(GasMask, '_blank')}/>
                            </Carousel.Item>
                            <Carousel.Item className='w-100 h-100'>
                                <Image src={Linux} alt="Fourth slide" fluid style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} onClick={() => window.open(Linux, '_blank')}/>
                            </Carousel.Item>
                            <Carousel.Item className='w-100 h-100'>
                                <Image src={NeedleGun} alt="Fifth slide" fluid style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} onClick={() => window.open(NeedleGun, '_blank')}/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                
            </Container>
            <h3>My full list of skills</h3>
            <p>Formally Trained/Educated:
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
                    'Adobe Photoshop/Illustrator',
                    'Fusion 360',
                    'Piano',
                    
                ].map(skill => (
                    <Badge pill key={skill} bg="secondary" className="m-1">{skill}</Badge>
                ))}
            </p>
            <p>Self-Taught/Informally Trained:
                {[
                    'Electronics (Design and assembly)',
                    'Excel',
                    'Welding/Metalworking',
                    'Skateboarding',
                    'Leather Working',
                    'Woodworking',
                    'Cooking',
                    'Baking'
                ].map(skill => (
                    <Badge pill key={skill} bg="secondary" className="m-1">{skill}</Badge>
                ))}
            </p>
            
            <hr className='border-5'/>

            <Container fluid className=' p-4 mb-4'>
                <Row>
                    <Col>
                        <h2>Education</h2>
                        <p>Currently attending NSCC's Institute of Technology campus for IT Programming (year 2 of 2)</p>
                    </Col>
                    <Col>
                        <h2>Training</h2>
                        <p>Fall arrest, confined spaces, power tool usage, and lead awareness with IUPAT (2025)</p>
                    </Col>
                    <Col>
                        <h2>Work Experience</h2>
                        <p>VP Communications with Student Association at IT campus (2024-2025)</p>
                    </Col>
                    <Col>
                        <h2>Awards</h2>
                        <p>Pierre Muise Memorial Award for Excellence in Teamwork with the IT Campus Student Association (2025)</p>
                    </Col>
                    <Col>
                        <h2>Certifications</h2>
                        <p>WHMIS Certified (2025)</p>
                    </Col>
                </Row>
            </Container>

            <br />

            <Container fluid className='border border-5 rounded-5 p-4 mb-4'>
                <h2>The next step for me...</h2>
                <p>
                    After completing my program at NSCC, I’m excited to pursue a lifelong passion: working on vehicles as a Vehicle Technician in the Canadian Armed Forces. This isn’t a departure from IT—it’s an evolution of my journey. I’ve always been drawn to mechanical engineering and problem-solving, and now I’m ready to apply my technical mindset to a hands-on role that challenges me and allows me to serve my country.
                </p>
            </Container>

            <Container fluid className="py-4 px-0">
                <Row className='gx-4'>
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <Card className='text-center border-5 rounded-5 py-4'>
                            <Card.Title><h2>Projects</h2></Card.Title>
                            <hr className='w-75 mx-auto border-3'/>
                            <Card.Text><p className='h2'>5</p></Card.Text>
                        </Card>
                    </Col>
                        
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <Card className='text-center border-5 rounded-5 py-4'>
                            <Card.Title><h2>Clients</h2></Card.Title>
                            <hr className='w-75 mx-auto border-3'/>
                            <Card.Text><p className='h2'>12</p></Card.Text>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <Card className='text-center border-5 rounded-5 py-4'>
                            <Card.Title><h2>Years</h2></Card.Title>
                            <hr className='w-75 mx-auto border-3'/>
                            <Card.Text><p className='h2'>1.5</p></Card.Text>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </Container>
    );
}

export default About;