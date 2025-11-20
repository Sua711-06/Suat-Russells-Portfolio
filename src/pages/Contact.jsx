import '../Styles/Contact.css';
import { Col, Row, Container } from 'react-bootstrap';

function Contact() {
    return (
        <div className="contact-container p-4 m-0">
            <h1>How to contact me:</h1>
            <hr />
            <Container>
                <Row className="mb-4">
                    <Col className="border border-5 rounded-5 d-flex align-items-center justify-content-center" lg={{ span: 6 }} md={{ span: 10 }} sm={{ span: 12 }}>
                        <p className='m-2'>Phone: <a href="tel:+19029434412">Secret</a></p>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="border border-5 rounded-5 d-flex align-items-center justify-content-center" lg={{ span: 6, offset: 3 }} md={{ span: 10 }} sm={{ span: 12 }}>
                        <p className='m-2'>School Email: <a href="mailto:w0508798@nscc.ca">Secret</a></p>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="border border-5 rounded-5 d-flex align-items-center justify-content-center" lg={{ span: 6, offset: 6 }} md={{ span: 10 }} sm={{ span: 12 }}>
                        <p className='m-2'>Personal Email: <a href="mailto:suatrussell@gmail.com">Secret</a></p>
                    </Col>
                </Row>
            </Container>            
        </div>
    );
}

export default Contact;