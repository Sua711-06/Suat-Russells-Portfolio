import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../Styles/Home.css';

function Home() {
    const fullText = '</Suat Russell>';
    const [text, setText] = useState('');

    useEffect(() => {
        let cancelled = false;
        let i = 0;
        const speed = 120; // ms per character

        function tick() {
            if (cancelled) return;
            if (i < fullText.length) {
                // set the slice up to i+1 to avoid concatenation/undefined issues
                setText(fullText.slice(0, i + 1));
                i += 1;
                setTimeout(tick, speed);
            }
        }

        tick();

        return () => {
            cancelled = true;
        };
    }, [fullText]);

    return (
        <Container fluid className='home-container'>
            <h1 className="typing">
                <span className="typing-text">{text}</span>
                <span className="typing-cursor" aria-hidden="true" />
            </h1>
        </Container>
    );
}

export default Home;