import './Services.css';

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Our Areas of <span>Expertise</span></h2>
        <p>I don't know yet what information to put in the cards Sir....Recusandae qui dolor repellat illum, temporibus voluptas ea est eligendi dolorem minus iusto debitis culpa!</p>
      </div>

      <div className="services-container">
        <div className="service-card">
          <div className="service-text">
            <h3>service 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex dolores inventore officiis explicabo. Atque dicta, dolorum assumenda, quisquam, consectetur pariatur odio dolore obcaecati in tempora repellendus hic suscipit commodi!</p><a href="/services"> Learn More</a>
          </div>
        </div>

        <div className="service-card">
          <div className="service-text">
            <h3>service 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus eum delectus quae officia. Suscipit odio eos tempore pariatur impedit facilis sint eum illo, vitae non, dolorem tempora nam iusto.</p><a href="/services">Learn More</a>
          </div>
        </div>

        <div className="service-card">
          <div className="service-text">
            <h3>service 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga doloremque quod incidunt hic obcaecati error itaque quidem sed, sapiente voluptatem qui assumenda sequi ipsum quaerat exercitationem consequatur corrupti adipisci?</p><a href="/services">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
