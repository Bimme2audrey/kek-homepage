import './About.css';
function About() {
    return (
        <section className="about" id="about">
            <div className="about-image"><img src="/images/founder-image.jpg" alt="KEK founder" />
                <div className="about-image-caption">Leadership driven by innovation and sustainable development</div>
            </div>

            <div className="about-content">
                <h2>Transforming local potential into<span> industrial opportunity.</span></h2>
                <p>Founded and led by Kenkoh Etiene Kelse, a professional Accountant and TEF/UNDP Certified Entrepreneur, we bridge the gap between local production and industry.</p>
                <p></p>
                <p></p>
                <a href="/about" className="about-link">Our Story </a>
            </div>
        </section>
    );
}

export default About;
