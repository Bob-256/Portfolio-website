import React, { useEffect, useState } from 'react';

function About() {
    const [lastVisit, setLastVisit] = useState(null);

    useEffect(() => {
        const lastVisitCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('lastVisit='));
        if (lastVisitCookie) {
            setLastVisit(lastVisitCookie.split('=')[1]);
        } else {
            setLastVisit('This is your first visit!');
        }
    }, []);

    return (
        <section id="about" className="mb-5">
            <h2 className="text-center mb-4">About Me</h2>
            <p className="lead text-center">Welcome to Russell's gaming Website! I add cool and fun games while giving the links to play them! Try out some games below to get started.</p>
            <p className="text-center">{lastVisit ? `Your last visit was on: ${lastVisit}` : 'Loading...'}</p>
        </section>
    );
}

export default About;
