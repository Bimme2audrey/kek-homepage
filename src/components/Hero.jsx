import './Hero.css'
function Hero() {
 return(
        <section className="hero" id="home">
            <div className="herocontent">
            <h2>KEK GLOBAL HOLDINGS SARL is a diversified industrial holding company based in Bafoussam, Cameroon.</h2>
            <p>Founded and led by Kenkoh Etiene Kelse, a professional Accountant and TEF/UNDP Certified Entrepreneur, we bridge the gap between local production and industry.</p>

            <div className="herobutton">
                <a href="#about" className="btn-one">Learn More</a>
                <a href="#services" className="btn-two">Explore Our Services</a>
            </div>
            </div>

            <div className="hero-image">
                <img src="/images/hero.jpg" alt="team" />
            </div>
        </section>
  );
}
export default Hero;