import '../Styles/Projects.css';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Carousel, Image } from 'react-bootstrap';
import {Placeholder, RcCar1, RcCar2, Sword1, Sword2, Sword3, Weather1, Weather2, Weather3, Transit1, Transit2, Transit3} from '../assets/index.js';
import Screensaver from '../assets/screensaver.gif';

function Projects() {
    const Projects = [
        {
            title: 'Hotwheels RC Car',
            description: 'This project is converting a standard Hotwheels car (Dodge Charger) into a remote-controlled vehicle. Currently waiting for a voltage booster to arrive.',
            images: [RcCar1, RcCar2],
            status: 'Waiting for Parts',
        },
        {
            title: 'Wooden Sword',
            description: 'This is a sword i made out of wood for production tech class.',
            images: [Sword1, Sword2, Sword3],
            status: 'Completed with mark of 95%',
        },
        {
            title: 'Screensaver',
            description: 'This project involved creating a screensaver application using C# and .NET framework. The screensaver features randomly generated complex polygons and collision detection/handling.',
            images: [Screensaver],
            status: 'Completed with mark of 96%',
        },
        {
            title: 'Weather App',
            description: 'This is a mobile application that provides real-time weather updates and forecasts. Built using Jetpack Compose and integrated with a weather API to fetch accurate data.',
            images: [Weather1, Weather2, Weather3],
            status: 'Completed with mark of 85%',
        },
        {
            title: 'Halifax Transit App',
            description: 'This is a mobile application that provides real-time transit updates and schedules for Halifax. Built using Jetpack Compose and integrated with the Halifax Transit API.',
            images: [Transit1, Transit2, Transit3],
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
                                    md={{ order: isEven ? 'last' : 'first', span: 8 }}
                                    sm={12}
                                    className="d-flex flex-column justify-content-start"
                                >
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div className="mt-auto">
                                        <p className="mb-0"><strong>Status:</strong> <Badge pill bg={project.status.includes('Completed') ? 'success' : 'warning'} className="m-1">{project.status}</Badge></p>
                                    </div>
                                </Col>
                                <Col
                                    md={{ order: isEven ? 'first' : 'last', span: 4 }}
                                    sm={12}
                                    className="d-flex align-items-stretch"
                                >
                                    <Carousel
                                        className='border border-5 rounded-5 w-100 h-100'
                                        style={{ overflow: 'hidden', aspectRatio: '4 / 3', width: '100%', height: '100%' }}
                                    >
                                        {project.images.map((imgSrc, imgIndex) => (
                                            <Carousel.Item key={imgIndex} className="w-100 h-100">
                                                <Image
                                                    src={imgSrc}
                                                    alt={`Slide ${imgIndex + 1}`}
                                                    fluid
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                                    onClick={() => window.open(imgSrc, '_blank')}
                                                />
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