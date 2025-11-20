import '../Styles/Projects.css';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Carousel, Image } from 'react-bootstrap';
import {Placeholder} from '../assets/index.js';

function Projects() {
    const Projects = [
        {
            title: 'Hotwheels RC Car',
            description: 'Description of project 1. This project involved...',
            images: [Placeholder, Placeholder, Placeholder],
            status: 'Waiting for Parts',
        },
        {
            title: 'Wooden Sword',
            description: 'Description of project 2. This project involved...',
            images: [Placeholder, Placeholder],
            status: 'Completed with mark of 95%',
        },
        {
            title: 'Screensaver',
            description: 'Description of project 3. This project involved...',
            images: [Placeholder, Placeholder, Placeholder],
            status: 'Completed with mark of 96%',
        },
        {
            title: 'Weather App',
            description: 'Description of project 4. This project involved...',
            images: [Placeholder, Placeholder],
            status: 'Completed with mark of 85%',
        },
        {
            title: 'Halifax Transit App',
            description: 'Description of project 5. This project involved...',
            images: [Placeholder, Placeholder, Placeholder],
            status: 'Currently in progress',
        },
        // Add more projects as needed
    ];
    return (
        <div className="projects-container p-4 m-0">
            <h1>All my Projects and Work</h1>
            <Container fluid className="py-4">
                <Col>
                    {Projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <Row key={index} className='border border-5 rounded-5 p-4 m-4'>
                                <Col
                                    xs={{ order: isEven ? 'last' : 'first' }}
                                    className="d-flex flex-column justify-content-start"
                                    md={8}
                                >
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div className="mt-auto">
                                        <p className="mb-0"><strong>Status:</strong> <Badge pill bg={project.status.includes('Completed') ? 'success' : 'warning'} className="m-1">{project.status}</Badge></p>
                                    </div>
                                </Col>
                                <Col
                                    xs={{ order: isEven ? 'first' : 'last' }}
                                >
                                    <Carousel className='border border-5 rounded-5' style={{ overflow: 'hidden' }}>
                                        {project.images.map((imgSrc, imgIndex) => (
                                            <Carousel.Item key={imgIndex}>
                                                <Image src={imgSrc} alt={`Slide ${imgIndex + 1}`} fluid style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Col>
                            </Row>
                        );
                    })}
                </Col>
            </Container>
        </div>
    );
}

export default Projects;